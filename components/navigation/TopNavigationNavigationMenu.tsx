"use client";

import Link from "next/link";
import { LINKS } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Post } from "@/lib/definitions";
import { stripHtml } from "string-strip-html";

export default function TopNavigationNavigationMenu({
  services,
  articles
}: {
  services: Post[];
  articles: Post[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"w-96"}>
              <nav>
                {LINKS.slice(0, 3).map(({ href, anchor }) => (
                  <NavigationMenuLink key={href} asChild>
                    <Link href={href} title={anchor}>
                      <div className={"flex flex-col gap-1 text-sm"}>
                        <div className={"leading-none font-medium"}>
                          {anchor}
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </nav>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={"flex"}>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"grid w-100 gap-2 md:w-125 md:grid-cols-2"}>
              {services.map((service: Post) => {
                const title = stripHtml(service.title.rendered).result;
                const excerpt = stripHtml(service.excerpt.rendered).result;

                return (
                  <NavigationMenuLink key={service.id} asChild>
                    <Link href={`/${service.slug}`} title={title}>
                      <div className={"flex flex-col gap-1 text-sm"}>
                        <div className={"leading-none font-medium"}>
                          {title}
                        </div>
                        <div className={"line-clamp-2 text-muted-foreground"}>
                          {excerpt}
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={"flex"}>
          <NavigationMenuTrigger>Articles</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"grid w-100 gap-2 md:w-125 md:grid-cols-2"}>
              {articles.map((article: Post) => {
                const title = stripHtml(article.title.rendered).result;
                const excerpt = stripHtml(article.excerpt.rendered).result;

                return (
                  <NavigationMenuLink key={article.id} asChild>
                    <Link href={`/launchpad/${article.slug}`} title={title}>
                      <div className={"flex flex-col gap-1 text-sm"}>
                        <div className={"leading-none font-medium"}>
                          {title}
                        </div>
                        <div className={"line-clamp-2 text-muted-foreground"}>
                          {excerpt}
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
