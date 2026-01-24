import { NextResponse } from "next/server";
import dns from "dns/promises";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json({ error: "Missing domain parameter" }, { status: 400 });
  }

  try {
    const nameservers = await dns.resolveNs(domain);
    return NextResponse.json({ domain, nameservers });
  } catch (err) {
    return NextResponse.json({ error: "NS lookup failed", details: (err as Error).message }, { status: 404 });
  }
}