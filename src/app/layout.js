"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//   title: "NextMerce | Future of Shopping",
//   description: "Experience the next generation of e-commerce.",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
