import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Ultimate Workspace",
  description: "We provide professional IT services for small and medium-sized businesses in Switzerland. Our services include hardware and software sales, managed IT services, and complete IT workspace solutions tailored to your business needs.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${montserrat.variable} antialiased`}
    >
    <Providers>
      <main>
        {children}
      </main>
    </Providers>
    </body>
    </html>
  );
}
