"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="mt-24 max-[768px]:mt-28">
      {/* Neobrutalism section heading */}
      <div className="mb-6">
        <h1
          className="neo-badge text-3xl bg-[#e6b448]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          About Me
        </h1>
      </div>

      <div>
        {/* Profile photo — tilted for editorial feel */}
        <figure className="float-right ml-6 mb-4 w-40 md:w-60 flex-shrink-0">
          <motion.div
            className="border-2 border-black shadow-[6px_6px_0_#1a1a1a] overflow-hidden"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="relative pt-[100%]">
              <div className="absolute inset-0">
                <Image
                  width={200}
                  height={300}
                  alt="Agus Narestha"
                  src={"/me/me.webp"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </figure>

        <article className="font-body">
          <p className="mt-5">
            Hello! I&apos;m{" "}
            <span
              className="font-display font-black bg-[#3cc4ce] border border-black px-1.5 py-0.5"
            >
              Agus Narestha,
            </span>{" "}
            a software developer passionate about web and data development, with a
            strong interest in learning and growing within the field.
          </p>
          <p className="mt-3">
            I enjoy working on software development and deployment projects,
            collaborating with teams, and applying my skills to solve real-world
            problems. I also regularly use AI tools to support and enhance my
            workflow — whether for development, data analysis, problem-solving, or
            improving productivity and learning efficiency.
          </p>
          <p className="mt-3">
            This website showcases my projects and serves as a space to connect.
            Feel free to reach out if you have questions, ideas, or want to
            collaborate!
          </p>
          <p className="mt-3 font-display font-bold">Let&apos;s create something amazing together!</p>
        </article>

        {/* Social icon buttons with pop animation */}
        <div className="flex flex-row gap-3 mt-5">
          {[
            { href: "https://www.linkedin.com/in/agusnarestha/", label: "LinkedIn", color: "#3cc4ce", icon: "linkedin" },
            { href: "https://github.com/agusnarestha", label: "GitHub", color: "#e6b448", icon: "github" },
            { href: "mailto:agusnaresthaa@gmail.com", label: "Email", color: "#df548e", icon: "gmail" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center border-2 border-black
                shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]
                transition-all duration-100"
              style={{ backgroundColor: social.color }}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Image alt={social.label} height="20" width="20" src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${social.icon}.svg`} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
