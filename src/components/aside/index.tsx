import Image from "next/image";
import React from "react";

interface ISidebar {
  aboutAuthor: boolean;
}

const Aside = ({ aboutAuthor }: ISidebar) => {
  return (
    <aside className="lg:w-1/4 bg-light-gray p-7 py-10">
      {aboutAuthor && <AboutAuthorSection />}
    </aside>
  );
};

export default Aside;

const AboutAuthorSection = () => {
  return (
    <>
      <SideBarHeading> About author</SideBarHeading>
      <Image src="/assets/images/author.jpeg" alt="author" width={100} height={100} className="w-full mt-4 object-cover h-[150px]"/>
      <p className="text-center text-sm text-text mt-3">Hi! i'm Marie dummy text of the printing and typesetting</p>
      <Image src="/assets/images/sig.png" alt="author" width={100} height={100} className="w-full mt-4 object-contain"/>
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
