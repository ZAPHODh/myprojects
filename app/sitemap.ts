import { getBlogPosts } from "app/jobs/utils";

export const baseUrl = "https://projects-bice-iota.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/jobs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/jobs", "/stacks"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
