/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Render inline markdown (only bold and links) without react-markdown to avoid SSR hydration mismatches */
function InlineMarkdown({ children }: { children: string }) {
    const html = children
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline underline-offset-4">$1</a>');
    return <p dangerouslySetInnerHTML={{ __html: html }} />;
}

interface Props {
    title: string;
    description: readonly string[];
    tags: readonly string[];
    links?: readonly {
        icon: React.ReactNode;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    links,
    className,
}: Props) {
    return (
        <div
            className={cn(
                "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
                className,
            )}
        >
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold">{title}</h3>
                    </div>
                </div>
                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {links.map((link, idx) => (
                            <a
                                href={link.href}
                                aria-disabled={!link.href}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e: React.MouseEvent) =>
                                    e.stopPropagation()
                                }
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                )}
                <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                    {description.map((point, index) => (
                        <InlineMarkdown key={index}>{point}</InlineMarkdown>
                    ))}
                </div>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                                variant="outline"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
