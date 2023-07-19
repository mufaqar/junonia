"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import ThemeSwitch from "../ThemeSwitch";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";
import { HiOutlineMenu } from "react-icons/hi";
import SideSection from "../side-section/side-section";
import SubMenu from "./subMenu";
import Route from "./route";
import { SlArrowDown } from "react-icons/sl";
import MegaMenu from '../megaMenu/MegaMenu'
import { navItems } from '../../const/navlinks'
import { useRouter } from "next/navigation";

const Header1 = () => {
  const {
    searchOpen,
    setSearchOpen,
    isMobile,
    setIsMobile,
    setOpenSide,
    openSide,
    setOpenMegaMenu,
    OpenMegaMenu
  } = useContext(SettingsContext);

  const [scrollTop, setScrollTop] = useState<any>(0);
  const [headerClr, setHeaderClr] = useState(false);
  const [SecoundlvlMenu, setSecoundlvlMenu] = useState<string>();

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= "10" ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const handleMegaMenu = () => {
    setOpenMegaMenu(!OpenMegaMenu)
  }

  const Handle2nslvlMenu = (id: string) => {
    setSecoundlvlMenu(id)
  }

  return (
    <>
      <header
        className={`right-0 left-0 top-0 shadow-md max-h-[64px] fixed w-full z-50 ${headerClr ? "bg-black" : "bg-black/40"
          }`}
      >
        <div className="container mx-auto flex py-2 justify-between items-center px-4 md:px-10">
          <Logo />
          <div className="flex text-white">

            <Nav />

            <BiSearch
              size={24}
              className="mx-5 mt-1 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <HiOutlineMenu
              size={24}
              className="mr-5 mt-1 cursor-pointer"
              onClick={() => setOpenSide(!openSide)}
            />
            <ThemeSwitch />
            <div
              className="ml-3 md:hidden"
              onClick={() => setIsMobile(!isMobile)}
            >
              {!isMobile ? (
                <BiMenuAltRight size={32} />
              ) : (
                <RxCross1 size={32} />
              )}
            </div>
          </div>
        </div>
      </header>
      {searchOpen && (
        <div className="fixed top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 ">
          <SearchBox />
        </div>
      )}
      <section
        className={`transition-all duration-300 fixed top-0 bottom-0 p-8 bg-[#090909] z-50 w-full md:w-[350px] ease-in-out ${openSide ? "right-0" : "-right-[100%]"
          }`}
      >
        <SideSection />
      </section>
      {OpenMegaMenu && <MegaMenu />}
    </>
  );
};

export default Header1;

const SearchBox = () => {
  const { searchValue, setSearchValue, setSearchOpen } =
    useContext(SettingsContext);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <section className="flex justify-center items-center mt-28">
      <div className="flex items-center md:w-[600px] relative bg-dark-gray rounded-full overflow-hidden">
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleChange={handleChange}
          className="md:w-[600px] p-5 bg-transparent text-pure"
        />
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <BiSearch
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
          />
        </button>
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <RxCross2
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </button>
      </div>
    </section>
  );
};

export const Nav = () => {
  const {
    isMobile,
  } = useContext(SettingsContext);

  const [ActiveSubMenu, setActiveSubMenu] = useState<string>()
  const HandleSubMenu = (id: string) => {
    setActiveSubMenu(id)
  }
  const router = useRouter()

  return (
    <ul className={`gap-7 mr-4 md:items-center w-full ${isMobile
      ? "absolute top-[52px] flex flex-col gap-6 p-10 left-0 right-0 bg-black dark:bg-light-gray w-full"
      : "hidden md:flex"
      }`}>
      {
        navItems.map((item: any, idx: number) => {
          return (
            <li className="flex items-center group relative gap-2" key={idx} onMouseEnter={() => HandleSubMenu(item.name)} onMouseLeave={() => setActiveSubMenu('')}>
              <Link href={item.link} className="capitalize text-white">{item.name}</Link>
              {item?.child?.length > 1 && <SlArrowDown size={13} />}
              {
                ActiveSubMenu === item.name && <SubMenu>
                  {item?.child?.map((subLink: any, id: number) => {
                    return (
                      <Route to={subLink?.link} key={id} subChild={subLink?.subChild}>{subLink?.name} </Route>
                    )
                  })
                  }
                </SubMenu>
              }
            </li>
          )
        })
      }
      <button onClick={()=>router.push('/blogs/single-post')}>Home</button>
    </ul>
  )
}


