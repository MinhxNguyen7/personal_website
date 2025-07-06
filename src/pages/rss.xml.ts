import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: { site: string }) {
  return rss({
    title: "Minh Nguyen's writings",
    description: "Minh's writings on various topics.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./src/content/posts/**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
