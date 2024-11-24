import { getBlogPosts } from "app/trabalhos/utils";

export const baseUrl = "https://projects-bice-iota.vercel.app/";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/trabalhos/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/trabalhos"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
