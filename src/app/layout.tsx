import type { Metadata } from "next";
import { Archivo, Figtree, Gochi_Hand, DM_Mono } from "next/font/google";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";
import PortfolioJsonLd from "@/components/PortfolioJsonLd";
import MotionProvider from "@/components/MotionProvider";
import AnalyticsConsent from "@/components/AnalyticsConsent";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
  preload: false,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agusnarestha.dev"),
  title: {
    default: "Agus Narestha - Web Developer & Data Enthusiast",
    template: "%s | Agus Narestha",
  },
  description:
    "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
  category: "technology",
  applicationName: "Agus Narestha",
  generator: "Next.js",
  openGraph: {
    title: "Agus Narestha - Web Developer & Data Enthusiast",
    description:
      "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
    url: "https://agusnarestha.dev",
    siteName: "Agus Narestha",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Agus Narestha",
    "Web Developer",
    "Data Enthusiast",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Web Development",
    "Data Analysis",
    "Data Visualization",
    "Projects",
    "Blog",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "Database Management",
    "Data Processing",
  ],
  authors: [{ name: "Agus Narestha", url: "https://agusnarestha.dev" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Agus Narestha - Web Developer & Data Enthusiast",
    description:
      "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
    creator: "@agusnarestha",
    site: "@agusnarestha",
  },
  other: {
    "google-site-verification": "Hqx3xeh09OgoTUxXBJvvPqYvcp46ccE63zLCqko-8so",
    // "msvalidate.01": "YOUR_BING_VERIFICATION_ID", // Get from https://www.bing.com/webmasters
  },
  alternates: {
    canonical: "https://agusnarestha.dev",
    types: {
      "application/rss+xml": "https://agusnarestha.dev/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${figtree.variable} ${gochi.variable} ${dmMono.variable}`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>
      <PortfolioJsonLd />
      <body className="font-body relative min-h-screen max-md:mt-28 bg-surface">
        <div aria-hidden className="paper-grain" />
        <MotionProvider>
          <div className="relative z-10">
            <Header />
            {children}
          </div>
          <Footer />
        </MotionProvider>
        <AnalyticsConsent />
      </body>
    </html>
  );
}
