"use client";

import HomeSection from "@/components/sections/HomeSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <RecentProjectSection />
      <RecentPostSection />
    </div>
  );
}
