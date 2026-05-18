import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for could not be found. Return to Agus Narestha's portfolio homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center px-8">
      <div className="text-center">
        {/* Big 404 with neobrutalist style */}
        <div className="relative inline-block mb-6">
          <span
            className="font-display font-black text-[120px] md:text-[180px] lg:text-[220px] leading-none tracking-tighter text-[#faf9f6]"
            style={{
              WebkitTextStroke: "3px #1a1a1a",
            }}
          >
            404
          </span>
          {/* Decorative accent shapes */}
          <div className="absolute top-4 -left-4 w-6 h-6 bg-[#3cc4ce] border-2 border-black rotate-45 animate-float" />
          <div className="absolute bottom-8 -right-4 w-5 h-5 bg-[#df548e] border-2 border-black rounded-full animate-float-slow" />
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#e6b448] border-2 border-black animate-drift" />
        </div>

        {/* Message */}
        <div className="mb-8">
          <h1
            className="neo-badge text-2xl md:text-3xl bg-[#df548e] text-white mb-4"
          >
            Page Not Found
          </h1>
          <p className="text-[#525252] mt-4 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Return home button */}
        <Link
          href="/"
          className="neo-btn bg-[#3cc4ce] text-black text-sm px-6 py-3 inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Return Home
        </Link>
      </div>
    </div>
  );
}
