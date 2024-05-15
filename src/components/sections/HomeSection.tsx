"use client";

import TypeIt from "typeit-react";
const HomeSection = () => {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex items-center justify-center h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <TypeIt className="text-gray-500 md:text-3xl xl:text-5xl dark:text-gray-400">
            Hello Everyone...👋
          </TypeIt>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
