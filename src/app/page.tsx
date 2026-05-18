"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Animated neobrutalist section divider with zigzag line and colored diamond
const SectionDivider = ({ color = "#3cc4ce" }: { color?: string }) => (
  <div className="relative flex items-center my-16 overflow-hidden">
    {/* Left line with dash pattern */}
    <motion.div
      className="flex-1 h-0.5 bg-ink"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    {/* Diamond */}
    <motion.div
      className="mx-3 flex-shrink-0"
      initial={{ scale: 0, rotate: 0 }}
      whileInView={{ scale: 1, rotate: 45 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div
        className="w-4 h-4 border-2 border-black"
        style={{ backgroundColor: color }}
      />
    </motion.div>
    {/* Right line */}
    <motion.div
      className="flex-1 h-0.5 bg-ink"
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

        <SectionDivider color="#e6b448" />

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

      <SectionDivider color="#df548e" />

      {/* Recent Projects — scale up */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <RecentProjectSection />
      </motion.div>

      <SectionDivider color="#3cc4ce" />

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
