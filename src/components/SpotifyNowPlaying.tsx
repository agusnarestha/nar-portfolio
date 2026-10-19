"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Music2 } from "lucide-react";
import { SpotifyNowPlayingData } from "@/types/spotify";

const formatTimeAgo = (timestamp: string): string => {
    const now = Date.now();
    const playedAt = new Date(timestamp).getTime();
    const diffMs = now - playedAt;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
};

const SpotifyNowPlaying = () => {
    const [data, setData] = useState<SpotifyNowPlayingData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/spotify/now-playing", {
                    cache: "no-store",
                });
                const nowPlaying: SpotifyNowPlayingData = await response.json();
                setData(nowPlaying);
            } catch (error) {
                console.error("Error fetching now playing:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 30000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-3 bg-white border-[3px] border-black shadow-[6px_6px_0_#000000] max-w-md mx-auto"
            >
                <div className="animate-pulse flex items-center gap-3 w-full">
                    <div className="w-12 h-12 bg-gray-200 border-2 border-black" />
                    <div className="flex-1">
                        <div className="h-4 bg-gray-200 border-2 border-black w-3/4 mb-2" />
                        <div className="h-3 bg-gray-200 border-2 border-black w-1/2" />
                    </div>
                </div>
            </motion.div>
        );
    }

    if (!data || (!data.isPlaying && !data.isRecentlyPlayed)) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-3 bg-white border-[3px] border-black shadow-[6px_6px_0_#000000] max-w-md mx-auto"
            >
                <Music2 className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-600">
                    Spotify is offline
                </span>
            </motion.div>
        );
    }

    const isPlaying = data.isPlaying;
    const label = isPlaying
        ? "Now Playing"
        : data.playedAt
            ? `Last Played ${formatTimeAgo(data.playedAt)}`
            : "Last Played";
    const labelColor = isPlaying
        ? "text-green-700"
        : "text-gray-600";
    const barColor = isPlaying
        ? "bg-green-600"
        : "bg-gray-400";

    return (
        <AnimatePresence mode="wait">
            <motion.a
                key={data.songUrl || "offline"}
                href={data.songUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-3 px-4 py-3 bg-white border-[3px] border-black shadow-[6px_6px_0_#000000] max-w-md mx-auto transition-all cursor-pointer group
                    ${isPlaying ? 'hover:shadow-[2px_2px_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px]' : ''}`}
            >
                {/* Album Art */}
                {data.albumImageUrl && (
                    <motion.div
                        className="relative w-12 h-12 overflow-hidden flex-shrink-0 border-2 border-black"
                        whileHover={{ rotate: 5 }}
                    >
                        <img
                            src={data.albumImageUrl}
                            alt={data.album}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        {isPlaying ? (
                            <motion.div
                                className="flex gap-0.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-0.5 ${barColor} rounded-full`}
                                        animate={{
                                            height: ["4px", "12px", "4px"],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <Clock className="w-3.5 h-3.5 text-gray-500" />
                        )}
                        <span className={`text-xs font-bold ${labelColor}`}>
                            {label}
                        </span>
                    </div>
                    <p className="text-sm font-bold text-black truncate group-hover:text-green-700 transition-colors">
                        {data.title}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                        {data.artist}
                    </p>
                </div>

                {/* Spotify Icon */}
                <svg
                    className="w-5 h-5 text-gray-600 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            </motion.a>
        </AnimatePresence>
    );
};

export default SpotifyNowPlaying;
