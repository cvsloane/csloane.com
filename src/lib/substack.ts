import Parser from "rss-parser";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

export async function getLatestPosts(): Promise<SubstackPost[]> {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL("https://cvsloane.substack.com/feed");
    return feed.items.map((item) => ({
      title: item.title || "Untitled",
      link: item.link || "",
      pubDate: item.pubDate || "",
      contentSnippet: item.contentSnippet || "",
    }));
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    return [];
  }
}
