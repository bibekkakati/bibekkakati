import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Compass } from "lucide-react";

export default function NavbarIsland() {
    const [isOpen, setIsOpen] = useState(true);
    const [isNonHomepage, setIsNonHomepage] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        const nonHome = path !== "/" && path !== "";
        setIsNonHomepage(nonHome);

        // On mobile (< 768px) and non-homepage, start collapsed
        if (nonHome && window.innerWidth < 768) {
            setIsOpen(false);
        }
    }, []);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
        >
            <TooltipProvider delayDuration={0}>
                {/* Floating trigger button attached to the right side of the screen */}
                {isNonHomepage && (
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open navigation"
                        className={`
                            md:hidden fixed z-40 right-0 bottom-6
                            w-11 h-12 pl-2 pr-1
                            flex items-center justify-center
                            rounded-l-full
                            bg-card/95 backdrop-blur-2xl
                            border border-r-0 border-border
                            shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                            text-foreground/80 hover:text-foreground
                            transition-all duration-300 ease-out
                            cursor-pointer active:scale-95
                            ${!isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
                        `}
                    >
                        <Compass className="size-5 animate-pulse" />
                    </button>
                )}

                {/* Backdrop on mobile when popped open */}
                {isNonHomepage && isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="md:hidden fixed inset-0 z-20 bg-background/20 backdrop-blur-[2px] transition-opacity"
                        aria-hidden="true"
                    />
                )}

                {/* Navbar handles its own fixed positioning without outer transformed container */}
                <Navbar
                    isOpen={isOpen}
                    isNonHomepage={isNonHomepage}
                    onClose={isNonHomepage ? () => setIsOpen(false) : undefined}
                />
            </TooltipProvider>
        </ThemeProvider>
    );
}
