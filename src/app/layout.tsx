import type { Metadata } from "next";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agus Narestha - Portfolio",
  description: "Personal Portfolio Website of Agus Narestha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="font-SpaceGrotesk lg:px-24 sm:px-5 md:px-5"> */}
      <body className="relative max-w-6xl mx-auto px-8 max-[768px]:mt-28 max-[480px]:px-0 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
