import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
import { people } from "@/app/data/people";
import { personToVCard } from "@/lib/vcard-generator";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const person = people.find(p => p.slug === slug);
  if (!person) return notFound();

  const vcf = personToVCard(person);
  const filename = `${person.firstName}-${person.lastName}`.replace(/\s+/g, "-");

  return new NextResponse(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}.vcf"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}
