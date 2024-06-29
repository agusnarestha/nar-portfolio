"use client";

import Head from "next/head";

import HomeSection from "@/components/sections/HomeSection";
import RecentProjectSection from "@/components/sections/RecentProjectSection";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="3LKzU_9eGN8m0aZwlYu22VKTDhkYtmEbGIzCuDQzs2g"
        />
      </Head>
      <HomeSection />
      <RecentProjectSection />
    </div>
  );
}
