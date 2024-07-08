import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Agus Narestha Portfolio",
};

export default function About() {
  return (
    <div className="mb-10 my-32">
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
