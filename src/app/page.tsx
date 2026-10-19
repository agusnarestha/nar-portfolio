"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Animated neo-brutalist section divider with bold line and icon
const SectionDivider = ({ color = "#3b82f6" }: { color?: string }) => (
  <div className="relative flex items-center my-12 sm:my-16 overflow-hidden px-2">
    {/* Left thick line */}
    <motion.div
      className="flex-1 h-2 bg-black"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    {/* Center colored diamond */}
    <motion.div
      className="mx-3 sm:mx-5 flex-shrink-0"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div
        className="w-4 h-4 sm:w-5 sm:h-5 border-[3px] border-black"
        style={{ backgroundColor: color, transform: "rotate(45deg)" }}
      />
    </motion.div>
    {/* Right thick line */}
    <motion.div
      className="flex-1 h-2 bg-black"
      initial={{ scaleX: 0, originX: 1 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
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
      {/* Hero — fade up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <HomeSection />
      </motion.div>

      <div id="about" className="mb-10 my-32">
        {/* About — slide from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <AboutSection />
        </motion.div>

        <SectionDivider color="#84cc16" />

        {/* Experience — slide from right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ExperienceSection />
        </motion.div>
      </div>

      <SectionDivider color="#ec4899" />

      {/* Recent Projects — scale up */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <RecentProjectSection />
      </motion.div>

      <SectionDivider color="#06b6d4" />

      {/* Recent Posts — fade up with rotate */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <RecentPostSection />
      </motion.div>
    </div>
  );
}
