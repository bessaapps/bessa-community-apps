import axios from "axios";

export default async function sitemap() {
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  const articles = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=20"
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return [
    {
      url: "https://bessaapps.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: "https://bessaapps.com/launchpad",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    ...services?.flatMap(({ slug }: { slug: string }) => ({
      url: `https://bessaapps.com/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    })),
    ...articles?.flatMap(({ slug }: { slug: string }) => ({
      url: `https://bessaapps.com/launchpad/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6
    }))
  ];
}
