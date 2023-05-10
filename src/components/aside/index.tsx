import { SettingsContext } from "@/context/setting-context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Input from "../controlls/input";

interface ISidebar {
  aboutAuthor: boolean;
  social: boolean;
  newsletter: boolean;
  latestPost:any
}

const Aside = ({ aboutAuthor, social, newsletter, latestPost }: ISidebar) => {
  return (
    <aside className="lg:w-[27%] bg-light-gray p-7 py-10">
      {aboutAuthor && <AboutAuthorSection />}
      {social && <SocialSection />}
      {newsletter && <NewsLetterSection />}
      {latestPost.length > 0 && <LatestPostSection posts={latestPost}/>}
    </aside>
  );
};

export default Aside;

const SocialSection = () => {
  return (
    <>
      <div className="pt-[1px] bg-border my-6 mt-10" />

      <div className="flex text-2xl justify-between">
        <Link
          href="#"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaInstagram />
        </Link>
        <Link
          href="#"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaTwitter />
        </Link>
        <Link
          href="#"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="#"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaPinterestP />
        </Link>
      </div>

      <div className="pt-[1px] bg-border my-6 mb-16" />
    </>
  );
};

const AboutAuthorSection = () => {
  return (
    <>
      <SideBarHeading> About author</SideBarHeading>
      <Image
        src="/assets/images/author.jpeg"
        alt="author"
        width={100}
        height={100}
        className="w-full mt-4 object-cover h-[150px]"
      />
      <p className="text-center text-sm text-text mt-3">
        Hi! i'm Marie dummy text of the printing and typesetting
      </p>
      <Image
        src="/assets/images/sig.png"
        alt="author"
        width={100}
        height={100}
        className="w-full mt-4 object-contain"
      />
    </>
  );
};

export const SideBarHeading = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-[1px] bg-yellow w-full" />
      <h6 className="uppercase text-sm text-center px-2 bg-light-gray inline-block -mt-[10px]">
        {children}
      </h6>
    </div>
  );
};

const NewsLetterSection = () => {

  const {searchValue, setSearchValue} = useContext(SettingsContext)
  const handleChange = (value:string)=>{
    setSearchValue(value)
  }

  return (
    <>
      <SideBarHeading> Subscribe Newsletter </SideBarHeading>
      <section className="bg-yellow p-4 py-6 mt-6"> 
      <p className="text-dark-gray mb-4 text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <Input 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
        className="w-full p-3 bg-white text-dark-gray"
      />
      <button className="bg-dark-gray mt-4 p-3 w-full">Subscribe</button>
      </section>
    </>
  );
};

const LatestPostSection = ({posts}:any) => {
  return(
    <div className="mt-12">
    <SideBarHeading> latest posts </SideBarHeading>
    <div className="mt-8 flex flex-col gap-4">
      {
        posts.slice(0,5).map((p:any, idx:number)=>{
          return(
            <div className="flex gap-4 ">
              <Image src={p?.img} alt="feature" width={100} height={100} className="h-24 w-24 object-cover"/>
              <div>
                <h2 className="uppercase text-sm text-gray-400">{p.title}</h2>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}
