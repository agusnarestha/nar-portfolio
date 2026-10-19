"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="mt-24 max-[768px]:mt-28 relative">
      {/* Floating decorative shapes */}
      <div className="absolute -top-8 -right-4 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="80" height="80" viewBox="0 0 80 80" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="40,5 75,65 5,65" fill="#fbbf24" stroke="#000" strokeWidth="3" opacity="0.6" />
        </motion.svg>
      </div>
      <div className="absolute -bottom-4 -left-6 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="5" y="5" width="50" height="50" rx="4" fill="#ec4899" stroke="#000" strokeWidth="3" opacity="0.5" />
        </motion.svg>
      </div>

      {/* Neo-brutalism section heading */}
      <div className="mb-8 relative z-10">
        <h1
          className="neo-badge text-3xl bg-[#f97316]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start relative z-10">
        {/* Profile photo column */}
        <div className="flex justify-center lg:justify-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-[#fbbf24] border-[3px] border-black translate-x-3 translate-y-3 -z-10" />
            {/* Photo frame */}
            <div className="border-[3px] border-black shadow-[6px_6px_0_#000000] overflow-hidden bg-white">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                <Image
                  width={256}
                  height={256}
                  alt="Agus Narestha"
                  src={"/me/me.webp"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Small decorative icon badge */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#3b82f6] border-[3px] border-black shadow-[3px_3px_0_#000000] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 18a6 6 0 0 0-8 0" />
                <path d="M12 2v4" />
                <path d="m5.6 5.6 2.8 2.8" />
                <path d="M2 12h4" />
                <path d="m18.4 5.6-2.8 2.8" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Content — single unified card */}
        <motion.div
          className="neo-card bg-white border-[3px] border-black shadow-[6px_6px_0_#000000] p-5 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Top-left corner bracket */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-[3px] border-l-[3px] border-black pointer-events-none z-10" />
          {/* Bottom-right corner bracket */}
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-black pointer-events-none z-10" />

          {/* Top-right icon badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#fbbf24] border-[3px] border-black shadow-[3px_3px_0_#000000] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </div>

          <p className="font-body text-base leading-relaxed mb-4">
            Hello! I&apos;m{" "}
            <span className="inline-block bg-[#fbbf24] border-[3px] border-black px-2 py-0.5 shadow-[2px_2px_0_#000000] font-display font-bold">
              Agus Narestha
            </span>
            , a software developer passionate about web and data development, with a strong interest in learning and growing within the field. I enjoy working on software development and deployment projects, collaborating with teams, and applying my skills to solve real-world problems. I also regularly use AI tools to support and enhance my workflow.
          </p>

          <p className="font-body text-base leading-relaxed mb-4">
            This website showcases my projects and serves as a space to connect. Feel free to reach out if you have questions, ideas, or want to collaborate!
          </p>

          {/* Divider */}
          <div className="border-t-[3px] border-black mb-4" />

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { href: "https://www.linkedin.com/in/agusnarestha/", label: "LinkedIn", color: "#06b6d4", icon: "linkedin" },
              { href: "https://github.com/agusnarestha", label: "GitHub", color: "#f97316", icon: "github" },
              { href: "mailto:agusnaresthaa@gmail.com", label: "Email", color: "#ec4899", icon: "gmail" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex items-center gap-2 border-[3px] border-black px-3 py-2 font-display font-bold text-sm text-black"
                style={{ backgroundColor: social.color }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Image alt={social.label} height="18" width="18" src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${social.icon}.svg`} />
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
