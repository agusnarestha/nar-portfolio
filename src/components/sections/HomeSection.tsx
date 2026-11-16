"use client";

import ScrollDown from "../ScrollDown";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import BackgroundArt from "../BackgroundArt";
import HandNote from "../collage/HandNote";
import Polaroid from "../collage/Polaroid";
import Tape from "../collage/Tape";
import { handCopy } from "@/lib/hand-copy";

const HomeSection = () => {
  return (
    <div className="relative flex min-h-[calc(100svh-7rem)] flex-col md:min-h-screen">
      <BackgroundArt />
      <section className="relative z-10 flex flex-1 items-center justify-center px-4 pb-6 pt-8 sm:pb-10 sm:pt-24">
        <div className="pointer-events-none absolute left-[7%] top-[24%] hidden xl:block">
          <HandNote rotate={-6} className="text-xl">
            open to work →
          </HandNote>
        </div>

        <div className="pointer-events-none absolute right-[8%] top-[35%] hidden xl:block">
          <HandNote rotate={3} className="text-lg">
            web · data · ai
          </HandNote>
        </div>

        <div className="w-full max-w-3xl text-center">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl xl:text-8xl">
            Agus{" "}
            <mark className="highlight highlight-yellow bg-transparent">
              Narestha
            </mark>
          </h1>

          <div className="mt-4">
            <HandNote className="text-2xl sm:text-3xl">{handCopy.hero}</HandNote>
            <svg
              viewBox="0 0 80 36"
              aria-hidden="true"
              fill="none"
              className="mx-auto mt-1 h-7 w-20 text-ink/45"
            >
              <path
                d="M8 6c14 22 38 24 62 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M58 14l12 6-10 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mt-6">
            <Polaroid
              src="/emoji.webp"
              alt="Agus Narestha Emoji"
              width={300}
              height={300}
              priority
              unoptimized
              fetchPriority="high"
              sizes="(max-width: 640px) 210px, 300px"
              rotate={-2}
              caption="that's me"
              className="mx-auto w-[210px] sm:w-[300px] md:w-[320px]"
            />
          </div>

          <div className="mx-auto mt-6 w-full max-w-xs sm:mt-8">
            <div className="relative rotate-1">
              <Tape
                tone="mint"
                rotate={-4}
                className="absolute -top-3 left-1/2 z-10 h-4 w-16 -translate-x-1/2"
              />
              <SpotifyNowPlaying />
            </div>
          </div>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default HomeSection;
