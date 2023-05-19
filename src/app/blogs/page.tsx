"use client"

import Footer1 from '@/components/footer'
import Header1 from '@/components/header/header1'
import PageBanner from '@/components/page-banner/banner'
import React from 'react'

const Blog = () => {
  return (
    <>
    <Header1/>
    <section>
    <PageBanner
        title="Blogs"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        image="/assets/images/img2.png"
      />
    </section>
    <Footer1/>
    </>
  )
}

export default Blog