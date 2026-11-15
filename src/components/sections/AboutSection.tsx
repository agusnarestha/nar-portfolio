"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PaperSheet from "../collage/PaperSheet";
import Polaroid from "../collage/Polaroid";
import Tape from "../collage/Tape";
import Highlight from "../collage/Highlight";
import { handCopy } from "@/lib/hand-copy";

type AboutSectionProps = {
  headingLevel?: "h1" | "h2";
};

const AboutSection = ({ headingLevel = "h2" }: AboutSectionProps) => {
  const reduceMotion = useReducedMotion();
  const Heading = headingLevel;

  return (
    <div className="relative mt-16 max-[768px]:mt-20">
      <div className="relative mb-8 inline-block border-2 border-ink bg-butter px-5 py-2 shadow-paper-sm">
        <Tape
          tone="mint"
          rotate={-4}
          className="absolute -top-3 left-6 h-4 w-16"
        />
        <Heading className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
          About Me
        </Heading>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[auto_1fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, rotate: -4 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center lg:justify-start"
        >
          <Polaroid
            src="/me/me.webp"
            alt="Agus Narestha"
            width={256}
            height={256}
            caption={handCopy.about}
            rotate={-2}
            className="w-56 md:w-64"
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PaperSheet className="p-5 sm:p-6">
            <p className="mb-4 font-body text-base leading-relaxed text-ink-2">
              Hello! I&apos;m{" "}
              <Highlight>
                <span className="font-semibold text-ink">Agus Narestha</span>
              </Highlight>
              , a{" "}
              <Highlight>
                <span className="font-medium text-ink">software developer</span>
              </Highlight>{" "}
              passionate about{" "}
              <Highlight>
                <span className="font-medium text-ink">
                  web and data development
                </span>
              </Highlight>
              , with a strong interest in learning and growing within the field.
              I enjoy working on software development and deployment projects,{" "}
              <Highlight>
                <span className="font-medium text-ink">
                  collaborating with teams
                </span>
              </Highlight>
              , and applying my skills to solve real-world problems. I also
              regularly use AI tools to support and enhance my workflow.
            </p>

            <p className="mb-4 font-body text-base leading-relaxed text-ink-2">
              This website showcases my projects and serves as a space to
              connect. Feel free to reach out if you have questions, ideas, or
              want to collaborate!
            </p>

            <div className="mb-4 border-t border-dashed border-ink/30" />

            <div className="flex flex-wrap items-center gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/agusnarestha/",
                  label: "LinkedIn",
                  tone: "bg-sky",
                  icon: "linkedin",
                },
                {
                  href: "https://github.com/agusnarestha",
                  label: "GitHub",
                  tone: "bg-butter",
                  icon: "github",
                },
                {
                  href: "mailto:agusnaresthaa@gmail.com",
                  label: "Email",
                  tone: "bg-pink-light",
                  icon: "gmail",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex items-center gap-2 border-2 border-ink px-3 py-1.5 font-body text-sm font-medium text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 ${social.tone}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Image
                    alt={social.label}
                    height={18}
                    width={18}
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${social.icon}.svg`}
                  />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </PaperSheet>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
