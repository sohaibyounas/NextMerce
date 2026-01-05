import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "NextMerce | Future of Shopping",
  description: "Experience the next generation of e-commerce.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
