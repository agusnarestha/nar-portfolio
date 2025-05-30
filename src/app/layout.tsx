import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Agus Narestha Portfolio",
  openGraph: {
    title: "Agus Narestha Portfolio",
    description:
      "Explore Agus Narestha's personal portfolio website showcasing a collection of innovative projects and achievements in web development and technology.",
    url: "https://www.agusnarestha.dev",
    siteName: "Agus Narestha Portfolio",
    type: "website",
    images: [
      {
        url: "https://agusnarestha.dev/emoji.png",
        width: 1200,
        height: 630,
        alt: "Agus Narestha Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  description:
    "Explore Agus Narestha's personal portfolio website showcasing a collection of innovative projects and achievements in web development and technology.",
  keywords: [
    "Agus Narestha",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Projects",
    "Blog",
  ],
  authors: [{ name: "Agus Narestha" }],
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
    title: "Agus Narestha Portfolio",
    description:
      "Explore Agus Narestha's personal portfolio website showcasing a collection of innovative projects and achievements in web development and technology.",
    images: ["https://agusnarestha.dev/emoji.png"],
  },
  other: {
    "google-site-verification": "Hqx3xeh09OgoTUxXBJvvPqYvcp46ccE63zLCqko-8so",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="da6ad19e-934b-47ec-b254-4b3f41d490be"
        ></script>
      </head>
      <GoogleTagManager gtmId="GTM-PHV2VZN6" />
      <GoogleAnalytics gaId="G-B2ZN13JQ9F" />
      <body className="font-SpaceGrotesk relative max-w-6xl mx-auto px-8 max-[768px]:mt-28 max-[480px]:px-0 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
