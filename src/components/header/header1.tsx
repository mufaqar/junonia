import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { NavLinks } from "../../const/navlinks";
import { NavLinksType } from "@/utils/types";
import ThemeSwitch from "../ThemeSwitch";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";


const Header1 = () => {
  const {searchOpen, setSearchOpen} = useContext(SettingsContext)

  return (
    <>
      <header className="flex container py-4 mx-auto justify-between items-center">
        <Logo />
        <div className="flex">
          <nav className="flex gap-7 mr-4 items-center">
            {NavLinks.map((item: NavLinksType, idx: number) => {
              return <Link href={item.link} className="uppercase hover:text-yellow" key={idx}>{item.name}</Link>;
            })}
          </nav>
          <BiSearch size={24} className="mx-5 mt-1 cursor-pointer" onClick={()=>setSearchOpen(true)}/>
          <ThemeSwitch/>
        </div>
      </header>
      {
        searchOpen &&  <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 "><SearchBox/></div>
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
        className="md:w-[600px] p-5 bg-transparent text-white"
      />
      <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
        {
          searchValue.length > 0 ? <BiSearch size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"/> :
          <RxCross2 size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer" onClick={()=>setSearchOpen(false)}/>
        }
        
      </button>
      
      </div>
    </section>
  )
}