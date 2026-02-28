import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="max-[480px]:px-8 mt-24 max-[768px]:mt-28">
      {/* Neobrutalism section heading */}
      <div className="mb-6">
        <h1
          className="inline-block font-black text-3xl uppercase tracking-tight
            bg-[#e6b448] border-2 border-black px-4 py-1
            shadow-[5px_5px_0_#000]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          About Me
        </h1>
      </div>

      <div>
        {/* Profile photo */}
        <figure className="float-right ml-6 mb-4 w-40 md:w-60 flex-shrink-0">
          <div
            className="border-2 border-black shadow-[6px_6px_0_#000] overflow-hidden"
          >
            <div className="relative pt-[100%]">
              <div className="absolute inset-0">
                <Image
                  width={200}
                  height={300}
                  alt="Agus Narestha"
                  src={"/me/me.webp"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </figure>

        <article>
          <p className="mt-5">
            Hello! I&apos;m{" "}
            <span
              className="font-black bg-[#3cc4ce] border border-black px-1.5 py-0.5"
            >
              Agus Narestha.
            </span>{" "}
            a software developer currently focused on web development and
            data-driven solutions. My journey started at university, where I
            focused on both backend and frontend development. To level up, I&apos;ve
            watched YouTube tutorials and read documentation to stay on top of
            the latest trends and improve my skills.
          </p>
          <p className="mt-3">
            What excites me is exploring new technologies to help businesses
            unlock their full potential and solve real-world problems. I&apos;m
            always curious to dive into new challenges and eager to keep
            learning and improving.
          </p>
          <p className="mt-3">
            This website showcases my projects and serves as a space to connect.
            Feel free to reach out if you have questions, ideas, or want to
            collaborate!
          </p>
          <p className="mt-3">Let&apos;s create something amazing together!</p>
        </article>

        {/* Social icon buttons */}
        <div className="flex flex-row gap-3 mt-5">
          <a
            href="https://www.linkedin.com/in/agusnarestha/"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center border-2 border-black bg-[#3cc4ce]
              shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all duration-100"
          >
            <Image alt="LinkedIn" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/linkedin.svg" />
          </a>
          <a
            href="https://github.com/agusnarestha"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center border-2 border-black bg-[#e6b448]
              shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all duration-100"
          >
            <Image alt="GitHub" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/github.svg" />
          </a>
          <a
            href="mailto:agusnaresthaa@gmail.com"
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center border-2 border-black bg-[#df548e]
              shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
              transition-all duration-100"
          >
            <Image alt="Gmail" height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/gmail.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
