"use client";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";
import RecentPostSection from "@/components/sections/RecentPostSection";
import TornDivider from "@/components/collage/TornDivider";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Home() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("scroll") === "about") {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      }
    }
  }, [reduceMotion]);

  return (
    <div>
      {/* Hero — transform only, so the name is visible without JS */}
      <motion.div
        initial={reduceMotion ? false : { y: 24 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HomeSection />
      </motion.div>

      <div id="about" className="my-24 mb-10 sm:my-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <AboutSection />
        </motion.div>

        <TornDivider className="my-12 sm:my-16" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <ExperienceSection />
        </motion.div>
      </div>

      <TornDivider className="my-12 sm:my-16" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <RecentProjectSection />
      </motion.div>

      <TornDivider className="my-12 sm:my-16" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <RecentPostSection />
      </motion.div>
    </div>
  );
}
