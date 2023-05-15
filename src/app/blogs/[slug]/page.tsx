"use client";

import Aside from "@/components/aside";
import PageBanner from "@/components/page-banner/banner";
import { PostMokeData } from "@/const/post";
import Image from "next/image";
import React from "react";

const Slug = () => {
  return (
    <>
      <PageBanner
        title="Lorem ipsum dolor sit amet consectetur"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        image="/assets/images/Cars.jpg"
      />
      <section className="lg:flex gap-10 px-4 lg:px-0 container mx-auto my-10 md:my-20">
        <section className="lg:w-[73%]">
          <p className="text-text">Technology</p>
          <h2 className="text-xl md:text-2xl capitalize mt-3 font-bold">{`Lorem ipsum dolor sit amet consectetur`}</h2>
          <figure>
            <Image
              src="/assets/images/Cars.jpg"
              alt="image"
              width={100}
              height={100}
              className="w-full mt-6"
            />
          </figure>
          <p className="mt-8 text-text leading-8 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repudiandae aliquid, atque veritatis, dolor, cumque dolores quo
            obcaecati harum laudantium reprehenderit temporibus numquam
            perspiciatis doloremque! Ratione reiciendis necessitatibus cumque
            ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis non sit, minus inventore nostrum, sapiente, corporis
            assumenda delectus ipsum repellat facilis omnis voluptatibus nam
            provident nihil culpa laborum alias illo.
          </p>
          <p className="mt-6 text-text leading-8 tracking-wide">
            Ratione reiciendis necessitatibus cumque ducimus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Blanditiis non sit, minus
            inventore nostrum, sapiente, corporis assumenda delectus ipsum
            repellat facilis omnis voluptatibus nam provident nihil culpa
            laborum alias illo.
          </p>
          <p className="mt-6 text-text leading-8 tracking-wide">
            Corporis assumenda delectus ipsum repellat facilis omnis
            voluptatibus nam provident nihil culpa laborum alias illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            debitis, fuga corrupti autem similique reiciendis placeat, inventore
            dolorem nemo distinctio dignissimos. Quae, aut? Distinctio numquam
            hic fuga ut, blanditiis doloremque? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tempore doloremque officia voluptates
            id dolore aspernatur! Temporibus ad id, non perferendis labore earum
            expedita sunt consequatur reiciendis, et corporis officia! Minus.
          </p>
        </section>

        <Aside
          aboutAuthor={true}
          social={true}
          newsletter={true}
          latestPost={PostMokeData}
          latestCategories={PostMokeData}
          advertisement={true}
        />
      </section>
    </>
  );
};

export default Slug;
