import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Mahix InfoTech - Software Development & Digital Solutions",
  description: "Leading software development company in Dindigul specializing in web development, mobile apps, AI/ML solutions, cloud services, and SEO optimization. Transform your business with innovative digital solutions.",
  keywords: "software development, web development, mobile apps, AI, ML, cloud services, SEO, digital transformation, Dindigul, Tamil Nadu, India",
  authors: [{ name: "Mahix InfoTech" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Mahix InfoTech - Software Development & Digital Solutions",
    description: "Leading software development company in Dindigul specializing in web development, mobile apps, AI/ML solutions, cloud services, and SEO optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Mahix InfoTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahix InfoTech - Software Development & Digital Solutions",
    description: "Leading software development company in Dindigul specializing in web development, mobile apps, AI/ML solutions, cloud services, and SEO optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloating />
        </ThemeProvider>
      </body>
    </html>
  );
}

