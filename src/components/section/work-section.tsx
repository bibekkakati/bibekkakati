/* eslint-disable @next/next/no-img-element */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
            onError={() => setImageError(true)}
        />
    );
}

export default function WorkSection() {
    return (
        <Accordion type="single" collapsible className="w-full grid gap-6">
            {DATA.work.map((work) => (
                <AccordionItem
                    key={work.company}
                    value={work.company}
                    className="w-full border-b-0 grid gap-2"
                >
                    <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                        <div className="flex items-start md:items-center gap-x-3 justify-between w-full text-left">
                            <LogoImage
                                src={work.logoUrl}
                                alt={work.company}
                            />
                            <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 md:gap-y-0">
                                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                    <div className="font-semibold leading-none flex items-center gap-2">
                                        {work.company}
                                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                                            <ChevronRight
                                                className={cn(
                                                    "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                                                    "translate-x-0 opacity-0",
                                                    "group-hover:translate-x-1 group-hover:opacity-100",
                                                    "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                                                )}
                                            />
                                            <ChevronDown
                                                className={cn(
                                                    "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                                                    "opacity-0 rotate-0",
                                                    "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="font-sans text-sm text-muted-foreground">
                                        {work.title}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-left md:text-right flex-none">
                                    <span>
                                        {work.start} -{" "}
                                        {work.end ??
                                            DATA.sections.work.presentLabel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                        <ul className="list-disc pl-1 md:pl-4 space-y-2">
                            {work.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
