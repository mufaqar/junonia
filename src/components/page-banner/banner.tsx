"use client";

import React from "react";
import Header1 from "../header/header1";
import Button from "../ui/button";
import Link from "next/link";

interface IPageBanner {
  title?: string;
  subTitle?: string;
  image: string;
  buttontext?: string;
  buttonLink?: string | number | any;
}

const PageBanner = ({
  title,
  subTitle,
  image,
  buttontext,
  buttonLink,
}: IPageBanner) => {
  return (
    <>
      <Header1 />
      <div
        className="h-[450px] bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 p-4 flex flex-col justify-center text-white items-center right-0 bottom-0 left-0 bg-black/30">
          <h1 className="text-xl md:text-6xl pt-10 text-yellow font-bold font-poppins capitalize">
            {title}
          </h1>
          {subTitle && <p className="mt-3 text-lg font-poppins font-light max-w-[600px] text-center mb-5">{subTitle}</p>}
          
          {buttontext && (
            <Link href={buttonLink}>
              <Button variants="primary" size="medium">
                {buttontext}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PageBanner;
