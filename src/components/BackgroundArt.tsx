const BackgroundArt = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="halftone-cobalt absolute inset-0 opacity-50" />
      <div className="absolute left-[6%] top-[20%] h-10 w-24 -rotate-6 border-2 border-ink bg-butter opacity-80" />
      <div className="absolute bottom-[24%] right-[8%] h-8 w-20 rotate-3 border-2 border-ink bg-pink-light opacity-80" />
    </div>
  );
};

export default BackgroundArt;
