import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import Logo from "@/components/logo";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 w-full bg-white">
      <Separator/>
      <div className="lg:w-1/2 md:w-2/3 p-4 mx-auto mb-6 mt-6">
        <div className="flex items-center mb-6">
          <Logo width={200}/>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="pb-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Eigerstrasse+2,+3007+Bern,+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              ><p>Eigerstrasse 2</p>
                <p>3007 Bern</p>
                <p>Schweiz</p>
              </a>
            </div>
            <p><a href="mailto:hello@yuw.ch">hello@yuw.ch</a></p>
            <p><a href="tel:+41797308877">079 730 88 77</a></p>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <p className="font-bold">Info</p>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <Separator/>
      <div className="flex justify-between lg:w-1/2 md:w-2/3 p-4 mx-auto">
        <p>
          © {year} Your Ultimate Workspace
        </p>
        <Button size="sm" variant="link" className="px-0">
          <Link href={"/impressum"}>Impressum</Link>
        </Button>
      </div>
    </footer>
  )
}