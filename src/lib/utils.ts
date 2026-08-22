import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }

    return new Date(date).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });
}

export function calculateReadingTime(body: string): string {
    const readingTime = Math.ceil((body?.length || 1) / 1000);
    return `${readingTime} min${readingTime === 1 ? "" : "s"} read`;
}
