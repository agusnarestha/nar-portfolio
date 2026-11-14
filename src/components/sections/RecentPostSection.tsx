import React, { useState, useEffect } from "react";
import Link from "next/link";
import PostCard from "../PostCard";
import Tape from "../collage/Tape";

const RecentPostSection = () => {
  const [latestPosts, setLatestPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/posts");
      const posts = await res.json();
      const transformedData = posts.slice(0, 3).map((post: any) => ({
        title: post.title,
        slug: post.slug,
        description: post.description,
        date: post.date,
        tags: post.tags,
      }));
      setLatestPosts(transformedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative inline-block border-2 border-ink bg-sky px-5 py-2 shadow-paper-sm">
          <Tape
            tone="pink"
            rotate={-4}
            className="absolute -top-3 left-6 h-4 w-16"
          />
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Recent Post
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 self-start border-2 border-ink bg-butter px-4 py-2 font-body text-sm font-medium text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </Link>
      </div>

      <div className="my-8 -mx-4 flex gap-6 overflow-x-auto px-4 scrollbar-hide sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {latestPosts.map((post, index) => (
          <div
            key={index}
            className="w-[280px] flex-shrink-0 sm:w-[320px] lg:w-auto"
          >
            <PostCard
              slug={post.slug}
              pubDate={new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              tags={post.tags}
              title={post.title}
              description={post.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPostSection;
