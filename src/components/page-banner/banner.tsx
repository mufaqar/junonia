"use client"

import React from "react";
import Header1 from "../header/header1";

interface IPageBanner {
  title: string;
  subTitle: string;
  image: string;
}

const PageBanner = ({ title, subTitle, image }: IPageBanner) => {
  return (
    <>
      <Header1 />
      <div
        className="h-[350px] bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 p-4 flex flex-col justify-center text-white items-center right-0 bottom-0 left-0 bg-black/30">
               <h1 className="text-xl md:text-3xl pt-10 font-bold font-poppins capitalize">{title}</h1>
               <p className="mt-3 font-normal">{subTitle}</p>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
