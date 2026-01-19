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
      <div className="flex text-center items-center justify-between max-[480px]:px-8">
        <div className="flex">
          <h1 className="font-bold text-4xl mt-1 ml-2 max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]">
            Recent Post
          </h1>
        </div>
        <a
          href="/blog"
          className="flex text-center justify-center gap-1 transition-all duration-300 mt-1 max-[375px]:hover:gap-2 hover:gap-3 group"
        >
          <h1 className="font-medium text-base text-[#525252] max-[325px]:text-[11px] max-[380px]:text-[12px] max-[430px]:text-[13px] max-[540px]:text-[14px] dark:text-[#a3a3a3] group-hover:dark:text-[#d4d4d4]">
            View All
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-[#525252] max-[325px]:w-[16px] max-[380px]:w-[18px] max-[430px]:w-[20px] max-[540px]:w-[21px] dark:fill-[#a3a3a3] group-hover:dark:fill-[#d4d4d4]"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
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
