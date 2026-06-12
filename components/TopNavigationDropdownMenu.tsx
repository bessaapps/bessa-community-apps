"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function TopNavigationDropdownMenu() {
  const LINKS = [
    { href: "/#works", anchor: "Works" },
    { href: "/#about", anchor: "About" },
    { href: "/#contact", anchor: "Contact" },
    { href: "/launchpad", anchor: "Blog" }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={"cursor-pointer"}>
        <AiOutlineMenu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <nav>
          {LINKS.map(({ href, anchor }) => (
            <Link key={href} href={href} title={anchor}>
              <DropdownMenuItem>{anchor}</DropdownMenuItem>
            </Link>
          ))}
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
