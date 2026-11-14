"use client";

import { useSyncExternalStore } from "react";
import TypeIt from "typeit-react";
import ScrollDown from "../ScrollDown";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import BackgroundArt from "../BackgroundArt";
import { motion, useReducedMotion } from "framer-motion";
import Highlight from "../collage/Highlight";
import HandNote from "../collage/HandNote";
import Polaroid from "../collage/Polaroid";
import { handCopy } from "@/lib/hand-copy";

const emptySubscribe = () => () => {};

const HomeSection = () => {
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundArt />
      <section className="relative z-10 flex flex-1 items-center justify-center px-4 pb-10 pt-24">
        <div className="w-full max-w-3xl text-center">
          <motion.h1
            initial={reduceMotion ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl xl:text-8xl"
          >
            Agus <Highlight>Narestha</Highlight>
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-4"
          >
            <HandNote className="text-2xl sm:text-3xl">{handCopy.hero}</HandNote>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-6"
          >
            <Polaroid
              src="/emoji.webp"
              alt="Agus Narestha Emoji"
              width={300}
              height={300}
              priority
              rotate={-2}
              className="mx-auto w-[220px] sm:w-[280px]"
            />
          </motion.div>

          <div className="mt-6">
            {mounted && !reduceMotion ? (
              <TypeIt
                className="font-display text-xl text-ink sm:text-2xl xl:text-3xl"
                options={{ speed: 60 }}
              >
                Hello Everyone...👋
              </TypeIt>
            ) : (
              <p className="font-display text-xl text-ink sm:text-2xl xl:text-3xl">
                Hello Everyone...👋
              </p>
            )}
          </div>

          <motion.div
            initial={reduceMotion ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mx-auto mt-8 w-full max-w-md"
          >
            <SpotifyNowPlaying />
          </motion.div>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default HomeSection;
