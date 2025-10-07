import { Logo } from "@/components/navbar/logo";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "Tecnologias",
    href: "#",
  },
  {
    title: "Serviços",
    href: "#",
  },
  {
    title: "TimeLine",
    href: "#",
  },
  {
    title: "Contato",
    href: "#",
  },
];

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <Logo />
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-muted-foreground hover:text-foreground">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div
            className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Davi Chagas
              </Link>
              . Todos os direitos reservados.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
