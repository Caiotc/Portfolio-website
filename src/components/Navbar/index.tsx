"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";

const Links = [
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
const navClasses =
  "fixed px-4 ml-0 mr-0 text-md justify-between items-center bg-[#171023] shadow-2xl w-full flex gap-8 z-50 p-4 sm:text-2xl";
export const Navbar = () => {
  const scrollToSection = useCallback((id: string) => {
    const componentToSmoothScroll = document.getElementById(id);
    componentToSmoothScroll?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={navClasses}>
      <section className="font-kalam flex">
        Caio <strong>Theodoro </strong>
      </section>

      <Image
        className="max-w-12 hover:cursor-pointer sm:hidden"
        src="/breadcrumb.svg"
        width={100}
        height={100}
        alt="breadCrumb"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      {isMenuOpen && (
        <div
          className={`absolute h-screen top-20 right-0 animate-[navbar_.3s_ease-out] w-[80%] z-10 backdrop-blurmd`}
        >
          <ul className="flex flex-col gap-10 h-full justify-start bg-[#231636] ">
            <NavigationLinks
              NavigationLinks={Links}
              scrollToSection={scrollToSection}
              setIsMenuOpen={setIsMenuOpen}
            />
          </ul>
        </div>
      )}

      <ul className=" flex-row gap-4 hidden sm:flex ">
        <NavigationLinks
          NavigationLinks={Links}
          scrollToSection={scrollToSection}
          setIsMenuOpen={setIsMenuOpen}
        />
      </ul>
    </nav>
  );
};
