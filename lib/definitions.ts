export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}
