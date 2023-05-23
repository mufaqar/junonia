import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import React from "react";
import { FiDivide } from "react-icons/fi";

const Page = () => {
  return (
    <>
     <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 my-24 gap-10">
        <div className="lg:mt-24">
          <span className="text-light-blue uppercase">Category</span>
          <h2 className="text-3xl md:text-5xl md:leading-[60px] max-w-[500px] font-poppins font-light mt-5 capitalize">Optimize everything you want</h2>
          <p className="mt-2 font-poppins text-lg text-gray-600 dark:text-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            autem. Quibusdam quas velit quaerat! Sed laborum accusamus maiores
            repudiandae, temporibus esse ex.
          </p>
          <div className="pt-1 w-32 mt-6 bg-light-gray"/>
        </div>
        <div className="flex flex-col">
          <figure><Image src="/assets/images/cars.jpg" alt="img" width={700} height={700} className="md:w-96 w-full object-cover float-right h-80 md:h-96"/></figure>
          <figure className="mt-[-180px] hidden lg:block"><Image src="/assets/images/cars.jpg" alt="img" width={700} height={700} className="w-96 h-60 xl:float-right xl:mr-[170px] md:h-96"/></figure>
        </div>
      </section>
      </Layout>
      <section className="bg-dark-gray dark:bg-light-gray py-16">
          <div className="grid sm:grid-cols-2 grid-cols-4 container px-4 md:px-10 mx-auto">
               <div>
                    <Image src="" alt="icon" width={200} height={200}/>
                    <h5>Lorem, ipsum.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quos libero commodi modi, velit ipsum ratione.</p>
                    <div className="pt-1 w-32 mt-6 bg-yellow"/>
               </div>
          </div>
      </section>
    </>
  );
};

export default Page;
