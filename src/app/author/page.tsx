"use client"

import Pagination from "@/components/Pagination/pagination";
import { categoriesDate } from "@/const/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AuthorPage = () => {
  const [pCategories, setPCategories] = useState<any>();
  const PaginatedData = (res: any) => {
    setPCategories(res);
  };
  return (
    <div className="mb-28">
      <section className="my-28 flex justify-center md:justify-between flex-wrap gap-8">
        {author?.map((item: any, idx: number) => {
          return (
            <Link
              href={`#`}
              className="flex flex-col group items-center"
              key={idx}
            >
              <figure className="overflow-hidden rounded-full">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={300}
                  height={300}
                  className=" transition-all duration-300 ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                />
              </figure>
              <h4 className="text-center font-normal mt-2 capitalize group-hover:text-light-blue text-text text-lg">
                {item?.name}
              </h4>
            </Link>
          );
        })}
      </section>
      <Pagination data={categoriesDate} PaginatedData={PaginatedData} perpage={12}/>
    </div>
  );
};

export default AuthorPage;



const author = [
  {
    name: 'Noah Johnson    ',
    image: '/assets/images/profil1.jpeg'
  },
  {
    name: 'Liam Williams    ',
    image: '/assets/images/profil2.webp'
  },
  {
    name: 'Mason Smith    ',
    image: '/assets/images/profil3.jpeg'
  },
  {
    name: 'Emma Johnson    ',
    image: '/assets/images/profil4.jpeg'
  },
  {
    name: 'Olivia Williams    ',
    image: '/assets/images/profil5.webp'
  },
  {
    name: 'Ava Smith    ',
    image: '/assets/images/profil6.jpeg'
  },
  {
    name: 'Elijah Martinez    ',
    image: '/assets/images/profil7.jpeg'
  },

  {
    name: 'Oliver Davis    ',
    image: '/assets/images/profil8.jpeg'
  },
  {
    name: 'Sophia Martinez    ',
    image: '/assets/images/profil9.webp'
  },
  {
    name: 'Harper Brown    ',
    image: '/assets/images/profil10.jpeg'
  },
  {
    name: 'Aiden Robinson    ',
    image: '/assets/images/profil11.webp'
  },
  {
    name: 'Ethan Taylor    ',
    image: '/assets/images/profil12.jpeg'
  },
]