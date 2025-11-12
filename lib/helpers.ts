import { keyword, title } from "@/lib/constants";

export const formatTitle = (pageTitle: string) => {
  return [...(pageTitle ? [pageTitle] : []), title, keyword].join(" | ");
};
