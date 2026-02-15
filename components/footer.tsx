import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import BigLogo from "@/components/logo/big-logo";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 w-full bg-white">
      <Separator/>
      <div className="lg:w-1/2 md:w-2/3 p-4 mx-auto mb-6 mt-6">
        <div className="flex items-center mb-10">
          <BigLogo width={300}/>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="pb-5">
              <h3 className="font-bold text-xl">Address</h3>
              <a
                href="https://www.google.com/maps/place/Your+Ultimate+Workspace/@46.9406659,7.4317014,166m/data=!3m1!1e3!4m6!3m5!1s0xacf2d7a5b2f65ea3:0xdfdab3234feef43f!8m2!3d46.9404393!4d7.4319355!16s%2Fg%2F11yybq4rc4?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>Eigerstrasse 2</p>
                <p>3007 Bern</p>
                <p>Schweiz</p>
              </a>
            </div>
            <h3 className="font-bold text-xl">Contact</h3>
            <p><a href="mailto:hello@yuw.ch">hello@yuw.ch</a></p>
            <p><a href="tel:+41797308877">079 730 88 77</a></p>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">Info</h3>
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