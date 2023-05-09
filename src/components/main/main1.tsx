import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SettingsContext } from "@/context/setting-context";

const data = [
     {
          id:1,
          name:'a'
     },
     {
          id:2,
          name:'b'
     },
     {
          id:3,
          name:'c'
     },
     {
          id:4,
          name:'d'
     },
];

const Main1 = () => {
  const {windowSize} = useContext(SettingsContext)
  const [post,setPost] = useState<any>([])

  useEffect(()=>{
     windowSize[0] <= 1080 ? setPost(data.slice(0,2)) : setPost(data.slice(0,4)) 
  })
  return (
    <>
      <main className="h-[520px] md:grid grid-cols-2">
        <div className="">
          <MainPost className="text-xl md:text-3xl"/>
        </div>
        <div>
          <div className="grid grid-cols-2 _grid h-full">
            {
               post.map((item:any, idx:number)=>{
                    return(
                         <MainPost className="text-sm md:text-xl "/>
                    )
               })
            }
        </div>
          
        </div>
      </main>
     
    </>
  );
};

export default Main1;

const MainPost = ({className}:any) => {
  return (
    <div
      className="relative h-[250px] md:h-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("/assets/images/Cars.jpg")` }}
    >
      <div className="absolute top-0 right-0 p-4 md:p-10 flex flex-col justify-end left-0 bottom-0 bg-black/30">
        <span className="text-yellow text-xs md:text-base uppercase">Extreme</span>
        <h2 className={` uppercase mt-2 max-w-[480px] font-bold text-white ${className}`}>
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </h2>
        <Link href="#" className="hover:text-yellow mt-3 text-white">
          <AiOutlinePlusCircle size={32} />
        </Link>
      </div>
    </div>
  );
};
