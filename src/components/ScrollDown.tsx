import { handCopy } from "@/lib/hand-copy";

const ScrollDown = () => {
  return (
    <div className="relative mt-4 flex items-center justify-center pb-16 max-[768px]:mt-3 max-[768px]:pb-8">
      <button
        className="group flex flex-col items-center gap-1"
        aria-label="Scroll to about"
        onClick={() => {
          const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          document.getElementById("about")?.scrollIntoView({
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }}
      >
        <span className="font-hand text-lg text-ink-2 transition-colors group-hover:text-ink">
          {handCopy.scroll}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-6 text-ink motion-safe:animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v14" />
          <path d="m6 12 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollDown;
