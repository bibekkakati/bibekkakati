import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    let currentDate = new Date().getTime();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date).getTime();
    let timeDifference = Math.abs(currentDate - targetDate);
    let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let fullDate = new Date(date).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });

    if (daysAgo < 1) {
        return "Today";
    } else if (daysAgo < 7) {
        return `${fullDate}`;
    } else if (daysAgo < 30) {
        return `${fullDate}`;
    } else if (daysAgo < 365) {
        return `${fullDate}`;
    } else {
        return `${fullDate}`;
    }
}

export function calculateReadingTime(body: string): string {
    const readingTime = Math.ceil((body?.length || 1) / 1000);
    return `${readingTime} min${readingTime === 1 ? "" : "s"} read`;
}
