import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-red-950 flex flex-col content-center items-center p-16">
      <nav> Home About Projects Contact en</nav>

      <main className="flex flex-col justify-center items-center w-full p-8  gap-4">
        <section className="flex flex-row justify-center items-center w-full p-4 gap-4">
          <span className="text-4xl">Hello I'm Caio</span>
          <Image
            src="/coding.svg"
            alt="Profile picture"
            width={200}
            height={200}
          />
        </section>

        <section className="flex flex-col justify-center items-center  min-h-96  bg-red-700 rounded-lg w-full p-4 min-w-80">
          <span className="text-left text-">About-me</span>
          <span className="text-xs text-left ">
            Computer engineering student,fast learner and completely passionate
            by software engineering. With 4 years of experience with full-stack
            web development I'm always looking for new technologies and best
            practices to improve my skills. Drive by react and dotnet core, I'm
            always looking for new projects to work on.
          </span>
          <Image
            src="/computer.svg"
            alt="Profile picture"
            width={200}
            height={200}
          />
        </section>
        <section className="flex flex-col justify-center items-center  min-h-96  bg-red-700 rounded-lg w-full p-4 min-w-80">
          Curriculo{" "}
        </section>

        <section className="flex flex-col justify-center items-center  min-h-96  bg-red-700 rounded-lg w-full p-4 min-w-80">
          Projetos{" "}
        </section>

        <section className="flex flex-col justify-center items-center  min-h-96  bg-red-700 rounded-lg w-full p-4 min-w-80">
          Contato{" "}
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}
