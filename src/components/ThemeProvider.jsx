"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import FullScreenLoader from "@/components/Loader/FullScreenLoader";

/* Global Theme Context */
export const ThemeContext = createContext(null);

export default function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider {...props}>
      {!mounted && <FullScreenLoader />}

      <ThemeContext.Provider value={{ mounted }}>
        <ThemeConsumer>{children}</ThemeConsumer>
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
}

/* Safely read theme after mount */
function ThemeConsumer({ children }) {
  const { theme } = useTheme();
  const context = useContext(ThemeContext);

  const isDark = context.mounted && theme === "dark";

  return (
    <ThemeContext.Provider
      value={{
        mounted: context.mounted,
        theme,
        isDark,
      }}
    >
      <div style={{ visibility: context.mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
