import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Agus Narestha Portfolio",
  description:
    "Learn more about Agus Narestha - a passionate web developer and software engineer with expertise in modern web technologies and full-stack development.",
  openGraph: {
    title: "About | Agus Narestha Portfolio",
    description:
      "Learn more about Agus Narestha - a passionate web developer and software engineer with expertise in modern web technologies and full-stack development.",
    url: "https://agusnarestha.dev/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Agus Narestha Portfolio",
    description:
      "Learn more about Agus Narestha - a passionate web developer and software engineer with expertise in modern web technologies and full-stack development.",
  },
};

export default function About() {
  return (
    <div className="mb-10 my-32">
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
