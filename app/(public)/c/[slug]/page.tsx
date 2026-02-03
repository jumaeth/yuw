import { notFound } from "next/navigation";
import {people} from "@/app/data/people";
import QRCode from "qrcode";
import Image from "next/image";

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

      <div className="grid gap-2.5 mt-5">
        <a
          href={vcfUrl}
          className="py-3.5 px-4 rounded-xl border border-gray-300 text-center hover:bg-gray-50"
        >
          Add Contact
        </a>

        {person.phone && (
          <a href={`tel:${person.phone}`} className="py-3.5 px-4 rounded-xl border border-gray-300 text-center hover:bg-gray-50">
            Call
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`} className="py-3.5 px-4 rounded-xl border border-gray-300 text-center hover:bg-gray-50">
            E-Mail
          </a>
        )}
      </div>
    </div>
  );
}
