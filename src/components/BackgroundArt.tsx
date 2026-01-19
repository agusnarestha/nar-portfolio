"use client";

const BackgroundArt = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
                className="absolute top-0 left-0 w-full h-full opacity-100 dark:opacity-50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff9ebb" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#90cbf9" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                {/* Large 4-point star top-left */}
                <path
                    d="M100,50 L110,90 L150,100 L110,110 L100,150 L90,110 L50,100 L90,90 Z"
                    fill="url(#star-gradient)"
                    className="animate-pulse"
                    style={{ animationDuration: '4s' }}
                />

                {/* Medium 4-point star bottom-right */}
                <path
                    d="M800,600 L808,630 L838,638 L808,646 L800,676 L792,646 L762,638 L792,630 Z"
                    fill="url(#star-gradient)"
                    className="animate-pulse"
                    style={{ animationDuration: '5s' }}
                />

                {/* Small sparkles scattered */}
                <circle cx="20%" cy="20%" r="2" fill="#64b5f6" opacity="0.9" />
                <circle cx="85%" cy="15%" r="3" fill="#ff80ab" opacity="0.8" />
                <circle cx="50%" cy="80%" r="2" fill="#90caf9" opacity="0.9" />
                <circle cx="10%" cy="80%" r="3" fill="#ce93d8" opacity="0.8" />
                <circle cx="90%" cy="50%" r="2" fill="#64b5f6" opacity="0.9" />

                {/* Cross shapes (+ signs) */}
                <g stroke="#ff9ebb" strokeWidth="2" opacity="0.8">
                    <path d="M200 200 L220 200 M210 190 L210 210" />
                    <path d="M850 150 L870 150 M860 140 L860 160" />
                    <path d="M150 700 L170 700 M160 690 L160 710" />
                </g>
            </svg>
        </div>
    );
};

export default BackgroundArt;
