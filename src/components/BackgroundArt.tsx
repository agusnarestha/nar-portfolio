"use client";

import { motion } from "framer-motion";

const BackgroundArt = () => {
  const shapes = [
    // Floating crosses
    { type: "cross", x: "8%", y: "15%", size: 22, color: "#ec4899", delay: 0, duration: 8 },
    { type: "cross", x: "85%", y: "12%", size: 18, color: "#06b6d4", delay: 2, duration: 10 },
    { type: "cross", x: "15%", y: "75%", size: 16, color: "#f97316", delay: 4, duration: 9 },
    { type: "cross", x: "90%", y: "60%", size: 20, color: "#22c55e", delay: 1, duration: 11 },

    // Dots
    { type: "dot", x: "20%", y: "25%", size: 8, color: "#3b82f6", delay: 0.5, duration: 7 },
    { type: "dot", x: "75%", y: "20%", size: 10, color: "#ec4899", delay: 1.5, duration: 9 },
    { type: "dot", x: "50%", y: "85%", size: 7, color: "#06b6d4", delay: 3, duration: 8 },
    { type: "dot", x: "10%", y: "55%", size: 9, color: "#f97316", delay: 2.5, duration: 10 },
    { type: "dot", x: "92%", y: "40%", size: 6, color: "#22c55e", delay: 0, duration: 6 },

    // Diamonds
    { type: "diamond", x: "30%", y: "10%", size: 14, color: "#fbbf24", delay: 1, duration: 12 },
    { type: "diamond", x: "70%", y: "70%", size: 12, color: "#06b6d4", delay: 3, duration: 10 },
    { type: "diamond", x: "55%", y: "30%", size: 10, color: "#ec4899", delay: 2, duration: 14 },

    // Triangles
    { type: "triangle", x: "40%", y: "8%", size: 16, color: "#22c55e", delay: 0.5, duration: 11 },
    { type: "triangle", x: "65%", y: "80%", size: 14, color: "#3b82f6", delay: 2, duration: 9 },
  ];

  const renderShape = (shape: typeof shapes[0], index: number) => {
    const baseStyle = {
      position: "absolute" as const,
      left: shape.x,
      top: shape.y,
    };

    const animationProps = {
      animate: {
        y: [0, -15, 5, -10, 0],
        x: [0, 8, -5, 10, 0],
        rotate: [0, 5, -3, 8, 0],
      },
      transition: {
        duration: shape.duration,
        repeat: Infinity,
        delay: shape.delay,
        ease: "easeInOut" as const,
      },
    };

    switch (shape.type) {
      case "cross":
        return (
          <motion.div key={index} style={baseStyle} {...animationProps}>
            <svg width={shape.size} height={shape.size} viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="2" x2="10" y2="18" stroke={shape.color} strokeWidth="3" strokeLinecap="round" />
              <line x1="2" y1="10" x2="18" y2="10" stroke={shape.color} strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>
        );
      case "dot":
        return (
          <motion.div
            key={index}
            style={baseStyle}
            {...animationProps}
          >
            <div
              style={{
                width: shape.size,
                height: shape.size,
                borderRadius: "50%",
                backgroundColor: shape.color,
                border: "2px solid #000",
                opacity: 0.7,
              }}
            />
          </motion.div>
        );
      case "diamond":
        return (
          <motion.div key={index} style={baseStyle} {...animationProps}>
            <div
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
                transform: "rotate(45deg)",
                border: "3px solid #000",
                opacity: 0.6,
              }}
            />
          </motion.div>
        );
      case "triangle":
        return (
          <motion.div key={index} style={baseStyle} {...animationProps}>
            <svg width={shape.size} height={shape.size} viewBox="0 0 20 20" fill="none">
              <polygon
                points="10,2 18,18 2,18"
                fill={shape.color}
                stroke="#000"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => renderShape(shape, index))}
    </div>
  );
};

export default BackgroundArt;
