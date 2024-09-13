import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="max-[480px]:px-8 mt-24 max-[768px]:mt-28">
      <h1 className="font-bold text-4xl mb-2 mt-1 max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]">
        About Me
      </h1>
      <hr className="border-[#d1d5db]"></hr>
      <div className="">
        <figure className="float-right ml-6 w-40 md:w-72 overflow-hidden rounded shadow dark:shadow-none">
          <div className="relative pt-[100%]">
            <div className="absolute inset-0">
              <Image
                width={200}
                height={300}
                alt="Photo of Agus Narestha"
                src={"me/me.jpg"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </figure>
        <article>
          <p className="mt-5">
            Hello! I'm{" "}
            <span className="font-bold bg-gradient-to-r from-blue-500 to-green-500 text-white w-max">
              Agus Narestha.
            </span>{" "}
            a passionate web developer. My journey in web development began at
            university, where I dedicated myself to mastering both backend and
            frontend development. To level up my skills, I decided take some
            courses and watching some YouTube videos.
          </p>
          <p className="mt-3">
            I am motivated to continuously expand my knowledge in web
            development. I really enjoy learning new things and I'm open to
            feedback to improve my skills and grow professionally.
          </p>
          <p className="mt-3">
            This website serves as a platform to showcase my completed projects
            and engage in meaningful discussions. Whether you have questions,
            ideas to share, or potential collaborations in mind, please feel
            free to reach out.
          </p>
          <p className="mt-3">
            I look forward to connecting with you and exploring the
            possibilities together!"
          </p>
        </article>
        <div className="flex flex-row">
          <a href="https://www.linkedin.com/in/agusnarestha/">
            <Image
              className="mr-4 mt-5"
              alt=""
              height="28"
              width="28"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/linkedin.svg`}
            />
          </a>
          <a href="https://github.com/agusnarestha">
            <Image
              className="mr-4 mt-5"
              alt=""
              height="28"
              width="28"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/github.svg`}
            />
          </a>
          <a href="mailto:agusnaresthaa@gmail.com">
            <Image
              className="mr-4 mt-5"
              alt=""
              height="28"
              width="28"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/gmail.svg`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
