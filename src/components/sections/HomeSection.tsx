"use client";
import TypeIt from "typeit-react";
import ScrollDown from "../ScrollDown";
import Image from "next/image";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import BackgroundArt from "../BackgroundArt";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <BackgroundArt />
      <section className="flex-1 flex items-center justify-center relative z-10 pt-16">
        <div className="relative w-full max-w-screen-md mx-auto px-4">
          {/* Centered hero layout */}
          <div className="flex flex-col items-center justify-center">
            {/* Name text */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-display font-bold text-black text-4xl sm:text-6xl xl:text-8xl text-center"
              style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 0.15)" }}
            >
              Agus Narestha
            </motion.h1>

            {/* Emoji avatar with bounce-in */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative z-10 mt-2"
            >
              <Image
                className="relative mx-auto w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
                src="/emoji.webp"
                alt="Agus Narestha Emoji"
                width={300}
                height={300}
                priority
              />
            </motion.div>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-3"
            >
              <TypeIt className="font-display text-black text-xl sm:text-2xl xl:text-3xl">
                Hello Everyone...👋
              </TypeIt>
            </motion.div>

            {/* Spotify Now Playing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 w-full max-w-md mx-auto"
            >
              <SpotifyNowPlaying />
            </motion.div>
          </div>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default HomeSection;
