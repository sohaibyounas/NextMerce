"use client";

import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ToastProvider from "@/components/Toast/ToastProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class" 
            defaultTheme="system"
            enableSystem
          >
            {children}
            <ScrollToTop />
            <ToastProvider />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
