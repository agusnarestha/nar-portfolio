const ScrollDown = () => {
  return (
    <div className="flex items-center justify-center mb-52 mt-5 max-[768px]:mt-16 max-[480px]:px-8">
      <div
        className="inline-flex items-center gap-3 border-2 border-black border-dashed px-5 py-2 bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] max-[375px]:w-[18px]"
          viewBox="0 0 24 24"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z" />
          <path d="M11 6h2v6h-2z" />
        </svg>
        <span className="font-black text-[11px] uppercase tracking-widest max-[375px]:text-[10px]">
          Scroll Down
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] max-[375px]:w-[18px] animate-bounce"
          viewBox="0 0 24 24"
        >
          <path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z" />
          <path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollDown;
