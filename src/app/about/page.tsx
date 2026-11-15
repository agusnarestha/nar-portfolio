import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Agus Narestha — web developer and software engineer with expertise in modern web technologies and full-stack development.",
  openGraph: {
    title: "About | Agus Narestha",
    description:
      "Learn more about Agus Narestha — web developer and software engineer with expertise in modern web technologies and full-stack development.",
    url: "https://agusnarestha.dev/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Agus Narestha",
    description:
      "Learn more about Agus Narestha — web developer and software engineer with expertise in modern web technologies and full-stack development.",
  },
  alternates: {
    canonical: "https://agusnarestha.dev/about",
  },
};

export default function About() {
  return (
    <div className="relative my-24 max-[768px]:mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <AboutSection headingLevel="h1" />
        <ExperienceSection />
      </div>
    </div>
  );
}
