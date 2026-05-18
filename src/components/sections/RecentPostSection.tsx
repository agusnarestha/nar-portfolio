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
      <div className="flex items-center justify-between mb-2">
        <h1
          className="neo-badge text-3xl bg-[#3cc4ce]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          Recent Post
        </h1>
        <a
          href="/blog"
          className="neo-btn"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 24 24">
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </a>
      </div>

      <div className="my-9 -mx-4 sm:-mx-8 px-4 sm:px-8 lg:mx-0 lg:px-0 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        <div className="flex lg:grid lg:grid-cols-3 gap-5 w-max lg:w-auto">
          {latestPosts.map((post, index) => (
            <div key={index} className="w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
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
    </div>
  );
};

export default RecentPostSection;
