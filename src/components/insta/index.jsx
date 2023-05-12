import Image from "next/image";
import React from "react";

const Insta = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl uppercase text-center">I'm on Instagram</h2>
      <p className="text-center text-text">@instaid</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <div className="relative">
              <Image
                src="/assets/images/Cars.jpg"
                alt="image"
                width={100}
                height={100}
                className="w-full object-cover h-[200px]"
              />
              <div className="absolute top-0 right-0 cursor-pointer left-0 bottom-0 bg-black/40" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insta;
