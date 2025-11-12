export default async function sitemap() {
  return [
    {
      url: "https://bessaapps.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    }
  ];
}
