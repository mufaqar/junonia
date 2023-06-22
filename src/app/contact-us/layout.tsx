import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Contact us | Junonia",
  description: "",
};


export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="Contact Us"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contactus.jpg"
          buttontext="By this time"
          buttonLink="#"
        />
        {children}
        <Footer1/>
        </>
  );
}
