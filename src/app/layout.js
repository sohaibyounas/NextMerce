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
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
