"use client";
import TypeIt from "typeit-react";
import ScrollDown from "../ScrollDown";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex-row items-center justify-center h-screen">
        <div className="relative py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <p
            className="absolute inset-x-0 top-[calc(50%+10px)] text-gray-500 xl:text-7xl text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Agus Narestha
          </p>

          <Image
            className="relative mx-auto mb-5"
            src="emoji.png"
            alt="Agus Narestha"
            width={300}
            height={300}
          />
          <TypeIt className="text-gray-500 text-2xl xl:text-3xl dark:text-gray-400">
            Hello Everyone...👋
          </TypeIt>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default HomeSection;
