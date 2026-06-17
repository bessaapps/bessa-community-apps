"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Post } from "@/lib/definitions";

export default function TopNavigationDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [markets, setMarkets] = useState<Post[]>([]);
  const [services, setServices] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const marketsResponse = await fetch(
        "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=10&_embed",
        { next: { revalidate: 3600 } }
      );
      const markets = await marketsResponse.json();
      setMarkets(markets);
      const servicesResponse = await fetch(
        "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&per_page=4&_embed",
        { next: { revalidate: 3600 } }
      );
      const services = await servicesResponse.json();
      setServices(services);
    })();
  }, []);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <AiOutlineMenu size={24} />
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        className={"p-4"}
        onBlur={() => setIsOpen(false)}
      >
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
            <Link
              href={"/launchpad"}
              title={"Launchpad: The App Builder's Guide"}
              onClick={() => setIsOpen(false)}
            >
              <li className={"text-primary font-medium"}>Learn</li>
            </Link>
          </ul>
        </nav>
        <div className={"flex flex-col gap-1"}>
          <p className={"text-sm uppercase"}>Markets</p>
          <nav>
            <ul>
              {markets.map(({ id, slug, title, acf }) => (
                <Link
                  key={id}
                  href={`/${slug}`}
                  title={title.rendered}
                  onClick={() => setIsOpen(false)}
                >
                  <li className={"text-primary font-medium"}>
                    {acf.short_title}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className={"flex flex-col gap-1"}>
          <p className={"text-sm uppercase"}>Services</p>
          <nav>
            <ul>
              {services.map(({ id, slug, title, acf }) => (
                <Link
                  key={id}
                  href={`/${slug}`}
                  title={title.rendered}
                  onClick={() => setIsOpen(false)}
                >
                  <li className={"text-primary font-medium"}>
                    {acf.short_title}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
