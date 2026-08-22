import { CONFIG } from "@/data/config";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: function (str: string, lang: string) {
        // Fallback if no language is specified for the code block
        const languageClass = lang ? `class="language-${lang}"` : "";

        // Safely escape characters like <, >, & so they don't break XML
        let escapedCode = md.utils.escapeHtml(str);

        // Replace spaces with non-breaking spaces and newlines with <br/>
        // to force RSS readers to preserve formatting even if they strip CSS
        escapedCode = escapedCode
            .replace(/ /g, "&nbsp;")
            .replace(/\n/g, "<br/>");

        // Return clean tags
        return `<pre style="white-space: pre-wrap; word-break: break-word; font-family: monospace;"><code ${languageClass} style="white-space: pre-wrap; font-family: monospace;">${escapedCode}</code></pre>`;
    } as any,
});

// Also override default indented code block renderer for RSS
md.renderer.rules.code_block = function (tokens, idx) {
    const token = tokens[idx];
    let escapedCode = md.utils.escapeHtml(token.content);
    escapedCode = escapedCode.replace(/ /g, "&nbsp;").replace(/\n/g, "<br/>");
    return `<pre style="white-space: pre-wrap; word-break: break-word; font-family: monospace;"><code style="white-space: pre-wrap; font-family: monospace;">${escapedCode}</code></pre>\n`;
};

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
            content: sanitizeHtml(md.render(post.body || ""), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
                allowedAttributes: {
                    ...sanitizeHtml.defaults.allowedAttributes,
                    pre: ["style"],
                    code: ["style", "class"],
                },
            }),
        })),
    });
}
