import {Person} from "@/app/data/people";

function esc(v?: string) {
  // vCard special chars escape: \ ; ,
  return (v ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

export function personToVCard(p: Person) {
  const n = `${esc(p.lastName)};${esc(p.firstName)};;;`;
  const fn = `${esc(p.firstName)} ${esc(p.lastName)}`.trim();

  // ADR: POBOX;EXT;STREET;CITY;REGION;ZIP;COUNTRY
  const adr = `;;${esc(p.street)};${esc(p.city)};;${esc(p.zip)};${esc(p.country)}`;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${n}`,
    `FN:${fn}`,
    p.org ? `ORG:${esc(p.org)}` : null,
    p.title ? `TITLE:${esc(p.title)}` : null,
    p.phone ? `TEL;TYPE=CELL:${esc(p.phone)}` : null,
    p.email ? `EMAIL;TYPE=INTERNET:${esc(p.email)}` : null,
    p.url ? `URL:${esc(p.url)}` : null,
    (p.street || p.city || p.zip || p.country) ? `ADR;TYPE=WORK:${adr}` : null,
    "END:VCARD",
  ].filter(Boolean);

  // vCard mostly uses CRLF; helps for compatibility
  return lines.join("\r\n") + "\r\n";
}
