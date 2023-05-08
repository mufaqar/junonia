import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { NavLinks } from "../../const/navlinks";
import { NavLinksType } from "@/utils/types";
import ThemeSwitch from "../ThemeSwitch";


const Header1 = () => {
  

  return (
    <>
      <header className="flex container py-4 mx-auto justify-between items-center">
        <Logo />
        <div className="flex">
          <nav className="flex gap-5 mr-4 items-center">
            {NavLinks.map((item: NavLinksType, idx: number) => {
              return <Link href={item.link} className="capitalize" key={idx}>{item.name}</Link>;
            })}
          </nav>
          <BiSearch  size={24} className="mx-4 mt-1 cursor-pointer"/>
          <ThemeSwitch/>
        </div>
      </header>
    </>
  );
};

export default Header1;
