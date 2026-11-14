import Tape from "./collage/Tape";
import { handCopy } from "@/lib/hand-copy";

const ScrollDown = () => {
  return (
    <div className="relative mt-8 flex items-center justify-center pb-32 max-[480px]:px-6 max-[768px]:mt-10 max-[768px]:pb-24">
      <button
        className="group relative inline-flex items-center gap-3 border-2 border-ink bg-sheet px-5 py-2.5 shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Tape
          tone="pink"
          rotate={-4}
          className="absolute -top-3 left-5 h-4 w-14"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] max-[375px]:w-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z" />
          <path d="M11 6h2v6h-2z" />
        </svg>
        <span className="font-hand text-lg text-ink">{handCopy.scroll}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] motion-safe:animate-bounce max-[375px]:w-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z" />
          <path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollDown;
