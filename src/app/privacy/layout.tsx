import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'About us | Junonia',
  description: '',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
        <Header1 />
        <PageBanner
          title="Privacy Policy"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contat.jpg"
         
        />
        {children}
        <Footer1/>
</>
  );
}
