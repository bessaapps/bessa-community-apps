"use client";

import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { keyword, title } from "@/lib/constants";
import TopNavigationDropdownMenu from "./TopNavigationDropdownMenu";
import TopNavigationNavigationMenu from "./TopNavigationNavigationMenu";
import { Post } from "@/lib/definitions";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TopNavigation() {
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=4&_embed"
        )
        .then((response) => setArticles(response.data))
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <>
      <div
        className={
          "w-full fixed top-0 z-10 border-b-[1] border-b-accent backdrop-filter backdrop-blur"
        }
      >
        <div className={"w-full max-w-[1300] px-4 py-2 mx-auto"}>
          <div className={"flex items-center justify-between gap-8"}>
            <Link href={"/"} title={`${keyword} - ${title}`}>
              <div className={"w-12"}>
                <Image
                  src={Logo}
                  alt={
                    "Bessa Community Apps company logo with abstract concentric lines, representing a provider of custom mobile app development services."
                  }
                  className={"object-fill"}
                />
              </div>
            </Link>
            <div className={"hidden sm:block"}>
              <TopNavigationNavigationMenu articles={articles} />
            </div>
            <div className={"sm:hidden"}>
              <TopNavigationDropdownMenu />
            </div>
          </div>
        </div>
      </div>
      <div className={"h-16.25"} />
    </>
  );
}
