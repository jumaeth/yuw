import { NextResponse } from "next/server";
import dns from "dns/promises";
import {KNOWN_PROVIDERS} from "@/lib/providers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json({ error: "Invalid domain" }, { status: 400 });
  }

  if (KNOWN_PROVIDERS[domain]) {
    return NextResponse.json(KNOWN_PROVIDERS[domain]);
  }

  try {
    const mx = await dns.resolveMx(domain);
    const best = mx.sort((a, b) => a.priority - b.priority)[0]?.exchange ?? "";

    return NextResponse.json({ imap: best, smtp: best });
  } catch {
    return NextResponse.json({ error: "MX lookup failed" }, { status: 404 });
  }
}