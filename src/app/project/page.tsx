import AllProjectSection from "@/components/sections/AllProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
  openGraph: {
    title: "Projects",
    description:
      "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
    url: "https://agusnarestha.dev/project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Agus Narestha",
    description:
      "Explore Agus Narestha's portfolio of web development projects, including full-stack applications, websites, and innovative solutions.",
  },
  alternates: {
    canonical: "https://agusnarestha.dev/project",
  },
};

export default function Project() {
  return (
    <div className="relative my-24 max-[768px]:mt-32">
      <AllProjectSection />
    </div>
  );
}
