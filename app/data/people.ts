export type Person = {
  slug: string;
  firstName: string;
  lastName: string;
  org?: string;
  title?: string;
  phone?: string;
  email?: string;
  url?: string;
  street?: string;
  city?: string;
  zip?: string;
  country?: string;
};

export const people: Person[] = [
  {
    slug: "marco-jucker",
    firstName: "Marco",
    lastName: "Jucker",
    org: "Your Ultimate Workspace",
    title: "Informatiker",
    phone: "+41797308877",
    email: "marco@yuw.ch",
    url: "https://yuw.ch",
  },
  {
    slug: "megi-jucker",
    firstName: "Megi",
    lastName: "Jucker",
    org: "Your Ultimate Workspace",
    title: "Buchhaltung",
    url: "https://yuw.ch",
  },
  {
    slug: "luis-jucker",
    firstName: "Luis",
    lastName: "Jucker",
    org: "Your Ultimate Workspace",
    title: "Informatiker",
    url: "https://yuw.ch",
  },
];
