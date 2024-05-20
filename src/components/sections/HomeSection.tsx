"use client";
import TypeIt from "typeit-react";
import ScrollDown from "../ScrollDown";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex items-center justify-center h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <Image
            className="mx-auto mb-5"
            src="emoji.png"
            alt="emoji"
            width={300}
            height={300}
          ></Image>
          <TypeIt className="text-gray-500 md:text-3xl xl:text-5xl dark:text-gray-400">
            Hello Everyone...👋
          </TypeIt>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default HomeSection;
