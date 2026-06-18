import { Post } from "@/lib/definitions";

export default async function sitemap() {
  const marketsResponse = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2",
    { next: { revalidate: 3600 } }
  );
  const markets = await marketsResponse.json();
  const servicesResponse = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2",
    { next: { revalidate: 3600 } }
  );
  const services = await servicesResponse.json();
  const articlesResponse = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3",
    { next: { revalidate: 3600 } }
  );
  const articles = await articlesResponse.json();

  return [
    {
      url: "https://bessaapps.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    ...services?.flatMap(({ slug }: Post) => ({
      url: `https://bessaapps.com/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    })),
    ...markets?.flatMap(({ slug }: Post) => ({
      url: `https://bessaapps.com/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    })),
    {
      url: "https://bessaapps.com/launchpad",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    ...articles?.flatMap(({ slug, modified }: Post) => ({
      url: `https://bessaapps.com/launchpad/${slug}`,
      lastModified: modified,
      changeFrequency: "daily",
      priority: 0.7
    }))
  ];
}
