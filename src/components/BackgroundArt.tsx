const BackgroundArt = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="halftone absolute inset-0 opacity-20" />
      <div className="halftone-cobalt absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 sm:h-[520px] sm:w-[520px]" />
      <div className="absolute left-[8%] top-[22%] hidden h-2 w-2 rounded-full bg-cobalt/40 md:block" />
      <div className="absolute bottom-[26%] right-[10%] hidden h-3 w-3 rounded-full bg-pink/50 md:block" />
    </div>
  );
};

export default BackgroundArt;
