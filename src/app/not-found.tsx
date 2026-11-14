import Link from "next/link";
import { Metadata } from "next";
import HandNote from "@/components/collage/HandNote";
import Tape from "@/components/collage/Tape";
import { handCopy } from "@/lib/hand-copy";

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
    <div className="relative flex min-h-[100vh] items-center justify-center px-6 py-24">
      <div className="relative w-full max-w-xl border-2 border-ink bg-sheet p-8 text-center shadow-paper-lg sm:p-12">
        <Tape
          tone="pink"
          rotate={-4}
          className="absolute -top-3 left-8 h-5 w-20"
        />

        <div className="relative mb-2 inline-block">
          <span
            className="font-display text-[100px] font-extrabold leading-none tracking-tighter text-cobalt md:text-[150px]"
            style={{ WebkitTextStroke: "2px #15161A" }}
          >
            404
          </span>
        </div>

        <h1 className="mb-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
          Page Not Found
        </h1>

        <HandNote rotate={-2} className="mb-6 block text-xl">
          {handCopy.notFound}
        </HandNote>

        <p className="mx-auto mb-8 max-w-md font-body text-sm leading-relaxed text-ink-2">
          Oops! The page you&apos;re looking for seems to have wandered off.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border-2 border-ink bg-cobalt px-5 py-2.5 font-body text-sm font-medium uppercase tracking-wide text-white shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
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
