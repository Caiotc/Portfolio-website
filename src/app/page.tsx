import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const NavigationLinks = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <div
      id="Home"
      className="h-full bg-[#171023] flex flex-col content-start items-center "
    >
      <Navbar NavigationLinks={NavigationLinks} />
      <main className="flex flex-col  justify-center items-center w-full p-8 gap-4 mt-20">
        <section className="flex flex-col-reverse justify-center items-center w-full p-4 gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-4xl font-kalam">{`Hello I'm Caio`}</span>
            <span className="text-xs text-left sm:text-base font-heebo">
              I have 4 years of experience in the software industry,
              specializing in building applications with React and .NET. As a
              computer engineering student, I am a fast learner and completely
              passionate about software engineering. I am always eager to
              explore new technologies and best practices to enhance my skills.
              If you have any exciting projects, feel free to reach out!
            </span>
            <div className="flex gap-4">
              <button className="bg-red-900 text-white rounded-lg p-2 font-heebo">
                My resume
              </button>
              <button className="bg-red-900 text-white rounded-lg p-2 font-heebo">
                Get in touch
              </button>
            </div>
          </div>
          <div className="relative min-h-40 ">
            <div className="w-full h-full flex justify-center">
              <Image
                className="max-w-10 sm:max-w-56 md:max-w-80 rounded-full absolute z-40 right-14"
                src="/spark_1.svg"
                alt="spark"
                width={550}
                height={550}
              />
              <Image
                className="max-w-10 sm:max-w-56 md:max-w-80 rounded-full absolute z-40 -right-20 top-8"
                src="/spark_2.svg"
                alt="spark"
                width={550}
                height={550}
              />
              <Image
                className="max-w-20 sm:max-w-56 md:max-w-80 rounded-full absolute z-40 top-32 rotate-[120deg] right-16"
                src="/arrow.svg"
                alt="spark"
                width={550}
                height={550}
              />
              <Image
                className="max-w-36 sm:max-w-56 md:max-w-80 rounded-full absolute z-30"
                src="https://avatars.githubusercontent.com/u/32607657?v=4"
                alt="Profile picture"
                width={550}
                height={550}
              />
            </div>
          </div>
        </section>

        <section
          id="About"
          className="flex flex-col sm:flex-row justify-center  items-center  min-h-96  bg-red-900 rounded-lg w-full p-4 min-w-80"
        >
          <div className="flex flex-col gap-4">
            <span className="text-left w-full font-kalam">About-me</span>
            <span className="text-xs text-left sm:text-base font-heebo">
              {`Computer engineering student,fast learner and completely passionate
            by software engineering. With 4 years of experience with full-stack
            web development I'm always looking for new technologies and best
            practices to improve my skills. Drive by react and dotnet core, I'm
            always looking for new projects to work on.`}
            </span>
          </div>
        </section>
        <section
          id="Projects"
          className="flex flex-col justify-center items-center  min-h-96  bg-red-900 rounded-lg w-full p-4 min-w-80"
        >
          Projetos
        </section>

        <section className="flex flex-col justify-center items-center  min-h-96  bg-red-900 rounded-lg w-full p-4 min-w-80">
          Projetos{" "}
        </section>

        <section
          id="Contact"
          className="flex flex-col justify-center items-center  min-h-96  bg-red-900 rounded-lg w-full p-4 min-w-80"
        >
          Contato{" "}
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}
