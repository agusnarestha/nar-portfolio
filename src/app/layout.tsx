import type { Metadata } from "next";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agus Narestha Portfolio",
  openGraph: {
    title: "Agus Narestha Portfolio",
    description:
      "Explore Agus Narestha's personal portfolio website showcasing a collection of innovative projects and achievements in web development and technology.",
    url: "https://agusnarestha.dev",
    siteName: "Agus Narestha Portfolio",
    type: "website",
    images: [
      {
        url: "https://agusnarestha.dev/emoji.png",
      },
    ],
  },
  description:
    "Explore Agus Narestha's personal portfolio website showcasing a collection of innovative projects and achievements in web development and technology.",
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
      <body className="font-SpaceGrotesk relative max-w-6xl mx-auto px-8 max-[768px]:mt-28 max-[480px]:px-0 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
