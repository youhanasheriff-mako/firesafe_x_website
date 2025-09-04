"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "firesafex-theme";

function getInitialTheme(): ThemeMode {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const isLight = theme === "light";
    const nextTheme: ThemeMode = isLight ? "dark" : "light";

    return (
        <button
            aria-label="Toggle theme"
            className="fixed top-4 right-4 z-50 glass rounded-full border soft-border soft-border-hover p-2 cursor-pointer transition-colors"
            onClick={() => setTheme(nextTheme)}
        >
            {isLight ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </button>
    );
}


