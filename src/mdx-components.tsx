import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
    "data-language"?: string;
};

export const mdxComponents = {
    MediaContainer,
    pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
    hr: (props: ComponentProps<"hr">) => (
        <div className="my-10 flex w-full items-center" {...props}>
            <div
                className="flex-1 h-px bg-border"
                style={{
                    maskImage:
                        "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                }}
            />
        </div>
    ),
    table: (props: ComponentProps<"table">) => (
        <div className="my-6 border border-border rounded-md overflow-hidden">
            <div className="w-full overflow-x-auto">
                <table
                    className="m-0! w-full min-w-full border-separate border-spacing-0 text-xs md:text-sm px-3 py-2"
                    {...props}
                />
            </div>
        </div>
    ),
    code: ({ children, ...props }: CodeProps) => {
        if (props["data-language"]) {
            return <code {...props}>{children}</code>;
        }
        return (
            <code
                className="py-0.5 rounded-md text-xs font-mono text-foreground/90"
                {...props}
            >
                {children}
            </code>
        );
    },
} as const;
