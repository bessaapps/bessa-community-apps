import axios from "axios";

export default async function sitemap() {
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  const customers = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=4")
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return [
    {
      url: "https://bessaapps.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    ...services?.flatMap(({ slug }: { slug: string }) => ({
      url: `https://bessaapps.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    })),
    ...customers?.flatMap(({ slug }: { slug: string }) => ({
      url: `https://bessaapps.com/customers/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    }))
  ];
}
