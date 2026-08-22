import { CONFIG } from "@/data/config";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
    const allPosts = await getCollection("blog");
    const sortedPosts = [...allPosts].sort((a, b) => {
        if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt))
            return -1;
        return 1;
    });

    return rss({
        title: "Technology Blogs by Bibek",
        description:
            "Read about technology, implementations, projects and my journey.",
        site: context.site ?? CONFIG.site.url,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(post.data.publishedAt),
            description: post.data.summary ?? "",
            link: `/blog/${post.id}/`,
        })),
    });
}
