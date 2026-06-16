export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  modified: string;
  _embedded: { "wp:featuredmedia": { source_url: string; alt_text: string }[] };
  acf: { meta_title: string; short_title: string };
}
