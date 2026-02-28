import React, { useState, useEffect } from "react";
import PostCard from "../PostCard";

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
      {/* Heading row */}
      <div className="flex items-center justify-between max-[480px]:px-8 mb-2">
        <h1
          className="inline-block font-black text-3xl uppercase tracking-tight
            bg-[#3cc4ce] border-2 border-black px-4 py-1
            shadow-[5px_5px_0_#000]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          Recent Post
        </h1>
        <a
          href="/blog"
          className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-widest
            border-2 border-black bg-white px-3 py-2
            shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000]
            hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all duration-100"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 24 24">
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </a>
      </div>

      <div className="my-9 gap-5 grid grid-cols-3 max-[992px]:grid-cols-2 max-[768px]:mt-5 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1 max-[992px]:flex max-[992px]:flex-row max-[992px]:overflow-hidden max-[992px]:overflow-x-auto max-[992px]:scrollbar-hide max-[480px]:px-8">
        {latestPosts.map((post, index) => (
          <div key={index} className="flex-shrink-0 max-[600px]:w-full sm:w-[350px] lg:w-auto">
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
