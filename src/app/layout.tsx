import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahix InfoTech - Software Development & Digital Solutions",
  description: "Leading software development company specializing in web development, mobile apps, AI/ML solutions, cloud services, and SEO optimization.",
  keywords: "software development, web development, mobile apps, AI, ML, cloud services, SEO, digital transformation",
  authors: [{ name: "Mahix InfoTech" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Mahix InfoTech - Software Development & Digital Solutions",
    description: "Leading software development company specializing in web development, mobile apps, AI/ML solutions, cloud services, and SEO optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
