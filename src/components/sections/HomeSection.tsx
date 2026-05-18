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
      <section className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-screen-md mx-auto px-4">
          {/* Asymmetric hero layout */}
          <div className="relative flex flex-col items-center">
            {/* Name text — sits behind the emoji with overlap */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-black text-gray-500 text-3xl sm:text-5xl xl:text-7xl text-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)" }}
            >
              Agus Narestha
            </motion.p>

            {/* Emoji avatar with bounce-in */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -5 }}
              animate={{ opacity: 1, y: -20, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative z-10"
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
            >
              <TypeIt className="font-display text-gray-500 text-lg sm:text-2xl xl:text-3xl">
                Hello Everyone...👋
              </TypeIt>
            </motion.div>

            {/* Spotify Now Playing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
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
