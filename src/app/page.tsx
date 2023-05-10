"use client";

import Aside from "@/components/aside";
import Header1 from "@/components/header/header1";
import Main1 from "@/components/main/main1";
import PostDesign from "@/components/post-design/post-design";
import { PostMokeData } from "@/const/post";

export default function Home() {
  return (
    <>
      <Header1 />
      <Main1 />
      <section className="lg:flex gap-10 px-4 lg:px-0 container mx-auto my-20">
        <section className="lg:w-3/4">
          <div className="grid gap-6 md:grid-cols-2">
            {PostMokeData.slice(0, 4).map((post, idx) => {
              return <PostDesign post={post} idx={idx} />;
            })}
          </div>
          <div className="pt-[1px] bg-border my-16" />
          <div className="flex gap-6 flex-col">
            {PostMokeData.slice(0, 2).map((post, idx) => {
              return <PostDesign post={post} idx={idx} layout={2} />;
            })}
          </div>
          <div className="pt-[1px] bg-border my-16" />
          <div className="grid gap-6 md:grid-cols-3">
            {PostMokeData.slice(0, 3).map((post, idx) => {
              return <PostDesign post={post} idx={idx} layout={3} />;
            })}
          </div>
        </section>

        <Aside
          aboutAuthor={true}
        />
      </section>
    </>
  );
}
