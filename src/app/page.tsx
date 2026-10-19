"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Animated neo-brutalist section divider with label badge
const SectionDivider = ({ color = "#3b82f6", label }: { color?: string; label: string }) => (
  <div className="relative flex flex-col sm:flex-row items-center my-12 sm:my-16 overflow-hidden">
    {/* Top/left line */}
    <motion.div
      className="flex-1 h-2 sm:h-2 bg-black w-full sm:w-auto"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    {/* Center label badge */}
    <motion.div
      className="my-3 sm:my-0 sm:mx-6 flex-shrink-0 self-center"
      initial={{ scale: 0, rotate: -10 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div
        className="inline-flex items-center gap-2 border-[3px] border-black px-3 py-1.5 sm:px-4 sm:py-2 shadow-[3px_3px_0_#000000] sm:shadow-[4px_4px_0_#000000]"
        style={{ backgroundColor: color }}
      >
        <span className="font-display font-bold text-xs uppercase tracking-wider text-black whitespace-nowrap">
          {label}
        </span>
      </div>
    </motion.div>
    {/* Bottom/right line */}
    <motion.div
      className="flex-1 h-2 sm:h-2 bg-black w-full sm:w-auto"
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

        <SectionDivider color="#84cc16" label="Experience" />

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

      <SectionDivider color="#ec4899" label="Projects" />

      {/* Recent Projects — scale up */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <RecentProjectSection />
      </motion.div>

      <SectionDivider color="#06b6d4" label="Posts" />

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
