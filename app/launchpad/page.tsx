import { Button } from "@/components/ui/button";
import Link from "next/link";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { formatTitle } from "@/lib/helpers";
import axios from "axios";
import { stripHtml } from "string-strip-html";
import { Post } from "@/lib/definitions";

export default async function Launchpad() {
  const articles = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=6&_embed")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  const featuredArticle = articles[0];
  const featuredArticleTitle = stripHtml(featuredArticle.title.rendered).result;

  return (
    <main>
      <div className={"px-4 py-8"}>
        <div className={"flex flex-col gap-4"}>
          <h1
            className={
              "animate-text text-center text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-muted-foreground via-primary to-foreground font-bold"
            }
          >
            Launchpad
          </h1>
          <p className={"text-xl text-center"}>
            Concept to cross-platform. Your roadmap to launch.
          </p>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-8 mx-auto"}>
        <div className={"grid grid-cols-3 gap-4"}>
          {articles.map((article: Post, index: number) => {
            const title = stripHtml(article.title.rendered).result;

            return index === 1 ? (
              <div className={"col-span-2 row-span-2"}>
                <Link
                  href={`/launchpad/${featuredArticle.slug}`}
                  title={formatTitle(featuredArticleTitle)}
                >
                  <div
                    className={
                      "bg-card aspect-square rounded-2xl overflow-hidden"
                    }
                  >
                    <div
                      className={"h-full grid grid-cols-2 grid-rows-2 gap-4"}
                    >
                      <div className={"col-span-2 p-4"}>
                        <div className={"flex flex-col gap-4"}>
                          <div>
                            <p className={"font-bold"}>Featured</p>
                            <h3
                              className={"text-4xl text-primary font-semibold"}
                            >
                              {featuredArticleTitle}
                            </h3>
                          </div>
                          <p>
                            {stripHtml(featuredArticle.excerpt.rendered).result}
                          </p>
                        </div>
                      </div>
                      <div />
                      <div className={"relative"}>
                        <Image
                          src={
                            featuredArticle._embedded["wp:featuredmedia"][0]
                              .source_url
                          }
                          alt={formatTitle(featuredArticleTitle)}
                          fill
                          objectFit={"cover"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <Link
                key={article.id}
                href={`/launchpad/${article.slug}`}
                title={formatTitle(title)}
              >
                <div
                  className={
                    "bg-card aspect-square rounded-2xl overflow-hidden"
                  }
                >
                  <div className={"flex flex-col justify-between h-full p-4"}>
                    <div>
                      <h3 className={"text-3xl text-primary font-semibold"}>
                        {title}
                      </h3>
                    </div>
                    <div>
                      <Button>Read More</Button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-8 mx-auto"}>
        <div className={"grid grid-cols-3 gap-4"}>
          <div />
          <div className={"bg-card aspect-[8/10] rounded-2xl"}>
            <div className={"flex flex-col justify-between h-full p-4"}>
              <h3 className={"text-4xl font-semibold text-primary"}>
                About the Author
              </h3>
              <div className={"flex flex-col gap-4"}>
                <p className={"text-primary"}>
                  Ten years of bringing ideas to life through mobile and web
                  apps, solving real problems and building solutions that
                  support communities.
                </p>
                <Link
                  href={"mailto:topher@bessaapps.com"}
                  title={formatTitle("")}
                >
                  <Button>Let&apos;s Talk!</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={"rounded-2xl overflow-hidden"}>
            <Image src={Me} alt={formatTitle("")} />
          </div>
        </div>
      </div>
    </main>
  );
}
