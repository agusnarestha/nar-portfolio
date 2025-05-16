import Image from "next/image";

type PostCardProps = {
  title: string;
  slug: string;
  description: string;
  pubDate: string;
  tags: string[];
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  slug,
  description,
  pubDate,
  tags = [],
}) => {
  return (
    <div className="relative h-[180px] border-[1px] group border-[#e5e5e5] rounded-xl overflow-hidden cursor-pointer transition-all duration-[.5s] hover:scale-[1.03] dark:border-[#404040] flex-shrink-0 max-[600px]:w-[100%]">
      <a aria-label="slug" href={`/blog/${slug}`}>
        <div className="BackgroundHoverT absolute z-[4] h-full w-full bg-black bg-opacity-[0.7] opacity-0 transition-opacity duration-[.5s] group-hover:opacity-80" />
        <div className="bg-[#fafafa] h-full w-full absolute z-[6] px-4 pr-1">
          <div className="mt-2">
            <div className="text-[#121212] leading-10 text-lg font-medium transition-all duration-[.5s] group-hover:underline">
              <h1>{title}</h1>
            </div>
            <p className="text-sm text-[#404040] mt-1 dark:text-[#a3a3a3]">
              {description}
            </p>
          </div>
          <div className="flex gap-2 text-[11px] text-white pt-5">
            {tags.map((tag, index) => (
              <h1
                key={index}
                className="flex justify-center bg-[#525252] py-[2px] px-[10px] rounded-xl  border "
              >
                #{tag}
              </h1>
            ))}
          </div>
          <p className="text-sm text-[#404040] mt-1 dark:text-[#a3a3a3] pt-1 pl-1">
            {pubDate}
          </p>
        </div>
      </a>
    </div>
  );
};

export default PostCard;
