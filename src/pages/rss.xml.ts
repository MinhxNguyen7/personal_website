import { URL } from "url";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const posts = await getCollection("posts")
  posts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });

  return rss({
    title: "Minh Nguyen's writings",
    description: "Minh's writings on various topics.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: new URL(`/blog/posts/${post.slug}`, context.site).href,
      pubDate: post.data.pubDate,
    })),
    customData: `<language>en-us</language>`,
  });
}
