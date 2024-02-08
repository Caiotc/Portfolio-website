import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="Home" />
      <div className="h-full bg-[#171023] flex flex-col content-start items-center ">
        <Navbar />
        <main
          className="flex flex-col  justify-center items-center w-full p-8 gap-4 mt-16 
        sm:mt-28
        max-w-4xl
        
        "
        >
          <section
            className="flex flex-col-reverse justify-center items-center w-full p-4 gap-10
        sm:flex-row
        "
          >
            <div className="flex flex-col gap-4 flex-grow">
              <span className="text-4xl font-kalam">{`Hello I'm Caio`}</span>
              <span className="text-xs text-left sm:text-base font-heebo">
                I have 4 years of experience in the software industry,
                specializing in building applications with React and .NET. As a
                computer engineering student, I am a fast learner and completely
                passionate about software engineering. I am always eager to
                explore new technologies and best practices to enhance my
                skills. If you have any exciting projects, feel free to reach
                out!
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
              <div className="w-full h-full flex justify-center items-baseline">
                <Image
                  className="max-w-10  rounded-full absolute z-40 right-14
                sm:right-60
                sm:top-8

                "
                  src="/spark_1.svg"
                  alt="spark"
                  width={550}
                  height={550}
                />
                <Image
                  className="max-w-10  rounded-full absolute z-40 -right-20 top-8
                sm:max-w-14
                sm:right-0
                
                "
                  src="/spark_2.svg"
                  alt="spark"
                  width={550}
                  height={550}
                />
                <Image
                  className="max-w-20  rounded-full absolute z-40 top-32 rotate-[120deg] right-16
                sm:max-w-36
                sm:rotate-[180deg]
                sm:-top-7
                sm:right-60
                "
                  src="/arrow.svg"
                  alt="spark"
                  width={550}
                  height={550}
                />
                <Image
                  className="max-w-36  rounded-full absolute z-30
                sm:relative
                sm:max-w-72
                "
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
            className="flex flex-col  justify-center  items-center  min-h-96  bg-slate-800 rounded-lg w-full p-4 min-w-80          
          "
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 flex-grow">
                <div className="w-full h-full flex justify-start gap-4 items-baseline">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg"
                    alt="csharp_icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg"
                    alt="csharp_icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg"
                    alt="postgresql_icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    className="fill-slate-600"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt="react_icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                    alt="javscript_icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-plain.svg"
                    alt="webpack_icon"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-4xl font-kalam">
                  {`About me`} <br />
                </span>
                <span className="text-xs text-left sm:text-base font-heebo">
                  {`                I'm Caio Theodoro, a software engineer based in Brazil.`}
                </span>
                <span className="text-xs text-left sm:text-base font-heebo">
                  I have 4 years of experience in the software industry,
                  specializing in building applications with React and .NET. As
                  a computer engineering student, I am a fast learner and
                  completely passionate about software engineering. I am always
                  eager to explore new technologies and best practices to
                  enhance my skills. If you have any exciting projects, feel
                  free to reach out!
                </span>
              </div>
            </div>
          </section>
          <section
            id="Projects"
            className="flex flex-col justify-center items-center  min-h-96  rounded-lg w-full p-4 min-w-80"
          >
            Projetos
          </section>

          <section
            id="Contact"
            className="flex flex-col justify-center items-center  min-h-96  bg-slate-800 rounded-lg w-full p-4 min-w-80"
          >
            Contato{" "}
          </section>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}
