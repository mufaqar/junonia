import Layout from "@/components/Layout/Layout";
import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Caterories | Junonia",
  description: "",
};

export default function CateroriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
        <Header1 />
        <PageBanner
          title="Author"
          image="/assets/images/author.jpg"
        />
        <Layout>{children}</Layout>
        <Footer1/>
        </>
  );
}
