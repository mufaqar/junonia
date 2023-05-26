"use client";

import { PostMokeData } from "@/const/post";
import React from "react";
import Slider2 from "@/components/Slider/Slider2";
import Header2 from "@/components/header/header2";
import PostDesign2 from "@/components/post-design/post-design-2";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { categoriesDate } from "@/const/categories";
import Link from "next/link";
import PostDesign from "@/components/post-design/post-design";
import VideosGallery from '@/components/videos-gallery/videos'

const Home2 = () => {
  return (
    <>
      <Header2 />
      <Slider2 data={PostMokeData.slice(0, 4)} />
      <div className="my-16">
        <Layout>
          <PostDesign2 />
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Top trending Categories
          </h2>
          <section className="mt-16 flex justify-center flex-wrap gap-8">
            {categoriesDate?.map((item: any, idx: number) => {
              return (
                <Link
                  href={`category/${item?.name}`}
                  className="flex flex-col group items-center"
                  key={idx}
                >
                  <figure className="overflow-hidden rounded-3xl shadow-xl border-[3px] border-light-gray">
                    <Image
                      src={`/assets/images/${item?.image}`}
                      alt={item?.name}
                      width={300}
                      height={300}
                      className=" transition-all duration-300  ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                    />
                  </figure>
                  <h4 className="text-center font-normal bg-light-blue p-1 px-3 rounded-full  mt-3 capitalize text-white">
                    {item?.name}
                  </h4>
                </Link>
              );
            })}
          </section>
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Latest Articles 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {PostMokeData.slice(0, 6).map((post, idx) => {
              return <PostDesign post={post} idx={idx} key={idx} rounded={true}/>;
            })}
          </section>
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
          🎬 The Videos
          </h2>
          <section className="mt-20 p-4 md:p-10 bg-light-gray rounded-[40px]">
            <VideosGallery/>
          </section>
          
        </Layout>
      </div>
    </>
  );
};

export default Home2;
