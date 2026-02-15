import { notFound } from "next/navigation";
import {people} from "@/app/data/people";
import QRCode from "qrcode";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = people.find(p => p.slug === slug);
  if (!person) return notFound();

  const vcfUrl = `/c/${person.slug}/vcf`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const pageUrl = `${baseUrl}/c/${slug}`;

  const qrCodeDataUrl = await QRCode.toDataURL(pageUrl, {
    width: 200,
    margin: 1,
    errorCorrectionLevel: 'M',
  });


  return (
    <div className="max-w-[560px] mx-auto my-10 p-4">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h1 className="text-[28px] mb-2">
            {person.firstName} {person.lastName}
          </h1>
          <p className="mt-0 opacity-80">
            {person.title}{person.org ? ` · ${person.org}` : ""}
          </p>
        </div>
        <Image
          src={qrCodeDataUrl}
          width={84}
          height={84}
          alt="QR Code"
          className="flex-shrink-0"
        />
      </div>

      <div className="flex flex-row gap-2 mt-6">
        <Button asChild className="flex-1">
          <Link href={vcfUrl}>Add Contact</Link>
        </Button>
        {person.phone && (
          <Button variant="outline" asChild className="flex-1">
            <Link href={`tel:${person.phone}`}>Call</Link>
          </Button>
        )}
        {person.email && (
          <Button variant="outline" asChild className="flex-1">
            <Link href={`mailto:${person.email}`}>E-Mail</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
