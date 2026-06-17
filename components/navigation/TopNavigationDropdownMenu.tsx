"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function TopNavigationDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <AiOutlineMenu size={24} />
      </SheetTrigger>
      <SheetContent className={"p-4"} onBlur={() => setIsOpen(false)}>
        <nav>
          <ul>
            {LINKS.map(({ href, anchor }) => (
              <Link
                key={href}
                href={href}
                title={anchor}
                onClick={() => setIsOpen(false)}
              >
                <li className={"text-primary font-medium"}>{anchor}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
