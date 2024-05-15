import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <body className="font-SpaceGrotesk container mx-auto px-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
