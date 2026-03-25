import { Button } from "@/components/ui/button";
import Link from "next/link";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import { Post } from "@/lib/definitions";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";

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

  const playbooks = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=7&per_page=2&_embed"
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
        <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
          <div
            className={
              "bg-card aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
            }
          >
            <h3>Playbooks:</h3>
          </div>
          {playbooks.map((playbook: Post) => (
            <ArticleCard key={playbook.id} article={playbook} />
          ))}
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-8 mx-auto"}>
        <div className={"grid sm:grid-cols-3 gap-4"}>
          {articles.map((article: Post, index: number) =>
            index === 1 ? (
              <div key={index} className={"sm:col-span-2 sm:row-span-2"}>
                <ArticleCard article={article} />
              </div>
            ) : (
              <ArticleCard key={index} article={article} />
            )
          )}
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-8 mx-auto"}>
        <div className={"grid sm:grid-cols-3 gap-4"}>
          <div />
          <div className={"bg-card aspect-8/10 rounded-2xl"}>
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
