import Image from "next/image";
import React from "react";
import { GetWordStr } from "../../utils";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from "next/link";

const PostDesign = ({ post, layout, home, rounded }: any) => {
  return (
    <div
      className={`group overflow-hidden bg-light-gray shadow-md dark:shadow-lg
      ${rounded && 'rounded-3xl overflow-hidden'} 
      ${layout === 2 && "md:flex"}
      ${layout === 3 && "bg-transparent !shadow-none"}
      `}
    >
      <Link href={`/blogs/${post.title}`}>
        <figure
          className={`overflow-hidden relative ${layout === 2 && "md:w-full"}`}
        >
          <Image
            src={post?.img}
            alt=""
            width={700}
            height={700}
            className={`w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover ${layout === 2 ? "h-[240px] w-full md:w-[370px]" : "h-[250px] sm:h-[300px]"}
            ${layout === 3 && home ? 'sm:h-[240px]' : "sm:h-[340px]"}
          `}
          />
          {layout !== 3 && (
            <div className={`absolute top-8 left-0 bg-yellow p-1.5 cursor-pointer px-4 text-sm uppercase text-dark-gray flex items-center ${rounded && 'rounded-full shadow-xl left-4'}`}>
              <AiOutlineShareAlt size={22} /> Share
            </div>
          )}
        </figure>
      </Link>
      <div
        className={`bg-light-gray flex flex-col justify-center ${layout === 2 && "md:w-1/2"} ${layout === 3 ? "p-0 bg-transparent" : 'p-6'
          }
        ${layout === 3 && "p-0 pt-6"}`}
      >
        <div>
          <p className="capitalize text-light-blue text-sm mb-3">
            <span className="shadow-md p-1 px-3 mr-2 bg-yellow text-black rounded-full">{post.categories}</span> By Mufaqar- <span className="uppercase">16 July</span>
          </p>
          <h2
            className={`text-[18px] font-medium capitalize font-poppins ${layout === 3
              ? " mb-3 leading-6"
              : " text-pure leading-7 mt-2"
              }`}
          >
            <Link href={`/blogs/${post?.title}`}>{post.title}</Link>
          </h2>
        </div>
        {layout !== 3 && (
          <p className="mt-3 text-text font-normal">{GetWordStr(post?.body, layout === 2 ? 40 : 16)}</p>
        )}
      </div>
    </div>
  );
};

export default PostDesign;
