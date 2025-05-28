import AllProjectSection from "@/components/sections/AllProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Agus Narestha Portfolio",
  description:
    "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
  openGraph: {
    title: "Projects | Agus Narestha Portfolio",
    description:
      "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
    url: "https://agusnarestha.dev/project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Agus Narestha Portfolio",
    description:
      "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
  },
};

export default function Project() {
  return (
    <div className="my-32">
      <AllProjectSection />
    </div>
  );
}
