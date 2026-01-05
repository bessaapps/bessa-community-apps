import { Button } from "@/components/ui/button";
import Link from "next/link";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import { stripHtml } from "string-strip-html";
import { Post } from "@/lib/definitions";
import BlurInText from "@/components/BlurInText";

export const metadata = formatMetadata({
  metadataTitle: formatTitle("Launchpad"),
  metadataDescription: "Concept to cross-platform. Your roadmap to launch.",
  path: "https://bessaapps.com/launchpad"
});

export default async function Launchpad() {
  const articles = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=6&per_page=20&_embed"
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return (
    <main>
      <div className={"px-4 py-24 sm:py-32"}>
        <div className={"flex flex-col gap-4"}>
          <h1 className={"text-center text-5xl sm:text-7xl font-bold"}>
            <BlurInText>Launchpad</BlurInText>
          </h1>
          <p className={"text-xl text-center"}>
            <BlurInText offset={100} multiplier={50}>
              Concept to cross-platform. Your roadmap to launch.
            </BlurInText>
          </p>
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-8 mx-auto"}>
        <div className={"grid sm:grid-cols-3 gap-4"}>
          {articles.map((article: Post, index: number) => {
            const title = stripHtml(article.title.rendered).result;

            return index === 1 ? (
              <div key={article.id} className={"sm:col-span-2 sm:row-span-2"}>
                <Link
                  href={`/launchpad/${article.slug}`}
                  title={formatTitle(title)}
                >
                  <div
                    className={
                      "bg-card aspect-square rounded-2xl overflow-hidden"
                    }
                  >
                    <div className={"h-full grid grid-cols-2 grid-rows-2"}>
                      <div className={"col-span-2 p-4"}>
                        <div className={"flex flex-col gap-4"}>
                          <div>
                            <p className={"font-bold hidden sm:block"}>
                              Featured
                            </p>
                            <h3
                              className={"text-4xl text-primary font-semibold"}
                            >
                              {stripHtml(article.title.rendered).result}
                            </h3>
                          </div>
                          <p className={"hidden sm:block"}>
                            {stripHtml(article.excerpt.rendered).result}
                          </p>
                        </div>
                      </div>
                      <div />
                      <div className={"relative hidden sm:block"}>
                        <Image
                          src={
                            article._embedded["wp:featuredmedia"][0].source_url
                          }
                          alt={formatTitle(
                            stripHtml(article.title.rendered).result
                          )}
                          fill
                          className={"object-cover"}
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
                      <div>
                        {index === 0 && (
                          <p className={"font-bold hidden sm:block"}>Latest</p>
                        )}
                        <h3 className={"text-4xl text-primary font-semibold"}>
                          {stripHtml(article.title.rendered).result}
                        </h3>
                      </div>
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
      <div className={"max-w-[1000] px-4 py-8 mx-auto"}>
        <div className={"grid sm:grid-cols-3 gap-4"}>
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
