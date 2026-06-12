"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { LINKS } from "@/lib/constants";

export default function TopNavigationDropdownMenu() {
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
