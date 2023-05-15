import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { NavLinks } from "../../const/navlinks";
import { NavLinksType } from "@/utils/types";
import ThemeSwitch from "../ThemeSwitch";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";
import {HiOutlineMenu} from 'react-icons/hi'

const Header1 = () => {
  const {searchOpen, setSearchOpen, isMobile, setIsMobile} = useContext(SettingsContext)
  

  return (
    <>
      <header className="bg-white right-0 left-0 top-0 shadow-md fixed w-full z-50 dark:bg-dark-gray">
        <div className="container mx-auto flex py-2 justify-between items-center px-4 md:px-0">
        <Logo />
        <div className="flex">
          <nav className={`gap-7 mr-4 items-center ${isMobile ? 'absolute top-12 flex flex-col gap-6 p-10 left-0 right-0 bg-light-gray w-full' : 'hidden md:flex'}`}>
            {NavLinks.map((item: NavLinksType, idx: number) => {
              return <Link href={item.link} className="uppercase hover:text-yellow" key={idx}>{item.name}</Link>;
            })}
          </nav>
          <BiSearch size={24} className="mx-5 mt-1 cursor-pointer" onClick={()=>setSearchOpen(true)}/>
          <HiOutlineMenu size={24} className="mr-5 mt-1 cursor-pointer"/>
          <ThemeSwitch/>
          <div className="ml-3 md:hidden" onClick={()=>setIsMobile(!isMobile)}>{!isMobile ? <BiMenuAltRight size={32}/> : <RxCross1 size={32}/>}</div> 
        </div>
        </div>
      </header>
      {
        searchOpen &&  <div className="absolute top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 "><SearchBox/></div>
      }
    </>
  );
};

export default Header1;



const SearchBox = () => {
  const {searchValue, setSearchValue, setSearchOpen} = useContext(SettingsContext)
  const handleChange = (value:string)=>{
    setSearchValue(value)
  }
  return(
    <section className="flex  justify-center items-center mt-28">
      <div className="flex items-center md:w-[600px] relative bg-dark-gray rounded-full overflow-hidden" >
      <Input 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
        className="md:w-[600px] p-5 bg-transparent text-pure"
      />
      <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
        <BiSearch size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"/>
      </button>
      <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
        <RxCross2 size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer" onClick={()=>setSearchOpen(false)}/> 
      </button>
      </div>
    </section>
  )
}