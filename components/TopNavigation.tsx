import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { formatTitle } from "@/lib/helpers";
import Link from "next/link";

export default function TopNavigation() {
  const links = [
    { href: "/#works", anchor: "Works" },
    { href: "/#about", anchor: "About" },
    { href: "#contact", anchor: "Contact" }
  ];

  return (
    <div
      className={
        "w-full fixed top-0 z-10 border-b-[1] border-b-accent backdrop-filter backdrop-blur"
      }
    >
      <div className={"w-full max-w-[1300] px-4 py-2 mx-auto"}>
        <div className={"flex items-center justify-between gap-8"}>
          <Link href={"/"} title={formatTitle("")}>
            <div className={"w-12"}>
              <Image
                src={Logo}
                alt={formatTitle("")}
                className={"object-fill"}
              />
            </div>
          </Link>
          <div className={"flex gap-4"}>
            {links.map(({ href, anchor }: { href: string; anchor: string }) => (
              <Link
                key={href}
                href={href}
                title={formatTitle(anchor)}
                className={"text-primary font-bold hover:underline"}
              >
                {anchor}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
