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
import { useEffect, useState } from "react";

export default function TopNavigationNavigationMenu() {
  const [services, setServices] = useState<Post[]>([]);
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const servicesResponse = await fetch(
        "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&_embed",
        { next: { revalidate: 3600 } }
      );
      const services = await servicesResponse.json();
      setServices(services);
      const articlesResponse = await fetch(
        "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=6&_embed"
      );
      const articles = await articlesResponse.json();
      setArticles(articles);
    })();
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"w-96"}>
              <nav>
                {LINKS.map(({ href, anchor }) => (
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
            <ul className={"w-125 grid grid-cols-2 gap-2"}>
              <div>
                {services.map((service: Post) => (
                  <NavigationMenuLink key={service.id} asChild>
                    <Link
                      href={`/${service.slug}`}
                      title={stripHtml(service.title.rendered).result}
                    >
                      <div className={"text-sm leading-none font-medium"}>
                        {service?.acf?.short_title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={"flex"}>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={"w-125 grid grid-cols-2 gap-2"}>
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
