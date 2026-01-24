import { NextResponse } from "next/server";
import whois from "whois";

function whoisLookup(domain: string, options = { follow: 3 }) {
  return new Promise<string>((resolve, reject) => {
    whois.lookup(domain, options, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return NextResponse.json({ error: "Missing domain parameter" }, { status: 400 });
  }

  try {
    const rawWhois = await whoisLookup(domain, { follow: 3 });
    return NextResponse.json({ domain, whois: rawWhois });
  } catch (err) {
    console.error("WHOIS lookup failed:", err);
    return NextResponse.json(
      { error: "WHOIS lookup failed", details: (err as Error).message },
      { status: 500 }
    );
  }
}
