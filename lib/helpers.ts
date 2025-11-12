import { keyword, title, url } from "@/lib/constants";

export const formatTitle = (pageTitle: string) => {
  return [...(pageTitle ? [pageTitle] : []), title, keyword].join(" | ");
};

export const formatMetadata = ({
  metadataTitle,
  metadataDescription,
  path
}: {
  metadataTitle: string;
  metadataDescription: string;
  path: string;
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
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      creator: "@getbessa"
    }
  };
};
