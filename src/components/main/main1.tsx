"use client"

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SettingsContext } from "@/context/setting-context";
import { PostMokeData } from '../../const/post'
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


const Main1 = () => {
  const { windowSize } = useContext(SettingsContext)
  const [post, setPost] = useState<any>([])

  useEffect(() => {
    windowSize[0] <= 1080 ? setPost(Slide_BG.slice(0, 2)) : setPost(Slide_BG.slice(0, 4))
  }, [windowSize, post])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  const slider = React.useRef<Slider>(null);

  return (
    <>
      <main className="h-[580px] md:grid grid-cols-2 gap-2 mt-[67px] px-2">
        
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-2 _grid h-full">
            {
              post.map((item: any, idx: number) => {
                return (
                  <MainPost post={item} className="text-sm md:text-lg font-ahle" key={idx} />
                )
              })
            }
          </div>
        </div>
        <div className="relative">
          <Slider ref={slider} {...settings}>
            {
              Slide_BG.slice(4).map((item: any, idx: number) => {
                return (
                  <img src={item.img} alt="img" key={idx} className="h-[580px] object-cover" />
                )
              })
            }

          </Slider>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
      </main>

    </>
  );
};

export default Main1;

const MainPost = ({ className, post }: any) => {
  //console.log("🚀 ~ file: main1.tsx:43 ~ MainPost ~ post:", post)
  return (
    <div
      className="relative h-[300px] md:h-full group bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${post?.img})` }}
    >
    </div>
  );
};

export const Slide_BG = [
  {
    img: "/assets/images/p1.jpg",
  },
  {
    img: "/assets/images/p2.jpg",
  },
  {
    img: "/assets/images/p3.jpg",
  },
  {
    img: "/assets/images/p4.jpg",
  },
  {
    img: "/assets/images/p5.jpg",
  },
  {
    img: "/assets/images/p6.jpg",
  },
  {
    img: "/assets/images/p7.jpg",
  },
  {
    img: "/assets/images/p8.jpg",
  },
];