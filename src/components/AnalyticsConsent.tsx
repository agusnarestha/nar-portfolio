"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";

const STORAGE_KEY = "analytics-consent";
const CHANGE_EVENT = "analytics-consent-change";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
};

const getSnapshot = () => window.localStorage.getItem(STORAGE_KEY);
const getServerSnapshot = () => null;

export default function AnalyticsConsent() {
  const stored = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const consent =
    stored === "granted" || stored === "denied" ? stored : null;

  const choose = (value: "granted" | "denied") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <GoogleTagManager gtmId="GTM-PHV2VZN6" />
          <GoogleAnalytics gaId="G-B2ZN13JQ9F" />
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="da6ad19e-934b-47ec-b254-4b3f41d490be"
            strategy="afterInteractive"
          />
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Analytics consent"
          className="fixed bottom-3 left-3 right-3 z-[60] mx-auto flex max-w-xl flex-wrap items-center justify-between gap-2 border-2 border-ink bg-butter px-3 py-2 font-mono text-[10px] text-ink shadow-paper sm:bottom-4"
        >
          <span className="min-w-0 flex-1">
            May I use analytics to see which pages are useful?
          </span>
          <div className="flex gap-2 uppercase tracking-wide">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="border-2 border-ink bg-sheet px-2.5 py-1 transition-colors hover:bg-highlight"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="border-2 border-ink bg-cobalt px-2.5 py-1 text-white transition-transform hover:-translate-y-0.5"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
