import AllProjectSection from "@/components/sections/AllProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Agus Narestha Portfolio",
};

export default function Project() {
  return (
    <div className="my-32">
      <AllProjectSection />
    </div>
  );
}
