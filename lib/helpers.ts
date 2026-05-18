import { keyword, title, url } from "@/lib/constants";

export const formatTitle = (pageTitle: string) =>
  `${pageTitle || keyword} - ${title}`;

export const formatMetadata = ({
  metadataTitle,
  metadataDescription,
  path,
  imagePath
}: {
  metadataTitle: string;
  metadataDescription: string;
  path: string;
  imagePath?: string;
}) => {
  return {
    title: metadataTitle,
    description: metadataDescription,
    languages: {
      "en-US": "/en-US"
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: `${url}${path}`,
      siteName: title,
      images: [
        {
          url: imagePath
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      creator: "@bessaapps",
      images: [
        {
          url: imagePath
        }
      ]
    }
  };
};
