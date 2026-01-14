"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

export function useAppTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useAppTheme must be used inside ThemeProvider");
    }

    return context;
}
