"use client";
import React from "react";
import Image from "next/image";

type NavbarProps = {
  NavigationLinks: Array<{ name: string }>;
};
export const Navbar = ({ NavigationLinks }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="fixed  p-4 right ml-0 mr-0 text-sm justify-between items-center bg-[#171023] shadow-2xl w-full flex gap-8 z-50">
      <section className="font-kalam flex">
        Caio <strong>Theodoro </strong>
      </section>

      <Image
        className="max-w-12 hover:cursor-pointer sm:hidden"
        src="/breadcrumb.svg"
        width={100}
        height={100}
        alt="breadCrumb"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <div className="absolute h-screen top-20 bg-yellow-300 right-0 animate-[navbar_.3s_ease-out] w-[80%] z-10 backdrop-blur-xl">
          <ul className="flex flex-col gap-10 h-full justify-start ">
            {NavigationLinks.map((link) => {
              return (
                link && (
                  <li className="shadow-md min-h-8 text-xl flex p-4 items-center ">
                    <a
                      href="#"
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        console.log();
                        const componentToSmoothScroll = document.getElementById(
                          link.name
                        );
                        const headerOffset = 0;
                        const elementPosition =
                          componentToSmoothScroll?.getBoundingClientRect().top;

                        if (!elementPosition) return;

                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;

                        console.log("!@# component", componentToSmoothScroll);
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      )}

      <ul className=" flex-row gap-4 hidden sm:flex ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <select name="select">
            <option value="en" selected>
              en
            </option>
            <option value="pt">pt</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
