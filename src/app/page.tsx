"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";
import { useEffect } from "react";
import { motion } from "framer-motion";

const SectionDivider = ({ color = "#3cc4ce" }: { color?: string }) => (
  <div className="relative flex items-center my-16 max-[480px]:px-8">
    <div className="flex-1 border-t-2 border-black" />
    <div
      className="mx-3 w-4 h-4 border-2 border-black rotate-45 flex-shrink-0"
      style={{ backgroundColor: color }}
    />
    <div className="flex-1 border-t-2 border-black" />
  </div>
);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("scroll") === "about") {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <HomeSection />
      </motion.div>

      <div id="about" className="mb-10 my-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <AboutSection />
        </motion.div>

        <SectionDivider color="#e6b448" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ExperienceSection />
        </motion.div>
      </div>

      <SectionDivider color="#df548e" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <RecentProjectSection />
      </motion.div>

      <SectionDivider color="#3cc4ce" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <RecentPostSection />
      </motion.div>
    </div>
  );
}
