"use client"

import Layout from '@/components/Layout/Layout'
import Slider from '@/components/Slider/Slider'
import { SideBarHeading } from '@/components/aside'
import Footer1 from '@/components/footer'
import Header1 from '@/components/header/header1'
import PostDesign from '@/components/post-design/post-design'
import { PostMokeData } from '@/const/post'
import Link from 'next/link'
import React from 'react'
import {AiOutlinePlusCircle, AiOutlineClockCircle, AiOutlineEye} from 'react-icons/ai'


const Blog = () => {
  return (
    <>
    <Header1/>
    <Slider data={PostMokeData.slice(0,4)}/>
    <Layout>
        <section className='my-24'>
          <SideBarHeading className="max-w-[18rem] mx-auto mb-12">Latest Post</SideBarHeading>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
              {
                PostMokeData.slice(1,5).map((item, idx)=>{
                  return(
                    <div>
                        <figure className='relative group overflow-hidden'>
                          <img src={item?.img} alt="image" className="h-40 sm:h-60 group-hover:scale-110 xl:h-80 w-full object-cover transition-all duration-200 ease-in-out"/>
                          <div className='absolute inset-0 bg-black/40 hidden group-hover:block'>
                            <div className='flex flex-col justify-center items-center h-full text-yellow'>
                              <AiOutlinePlusCircle size={30} className='group-hover:scale-110 transition-all duration ease-in-out'/>
                              <span className='text-sm md:text-base'>View More</span>
                            </div>
                            <Link href={item?.title} className='text-white flex gap-5 text-sm md:text-base justify-center item-center absolute bottom-2 pt-2 md:bottom-4 w-full border-t-[1px] border-gray-300 md:pt-4'>
                              <span className='flex items-center gap-1'>
                                <i><AiOutlineClockCircle /></i> 2 .
                              </span>
                              <span className='flex items-center gap-1'>
                                <i><AiOutlineEye className='text-lg'/></i> 1.3k
                              </span>
                            </Link>
                          </div>
                        </figure>
                        <p className='mt-3 text-center font-poppins uppercase font-light text-gray-400'>{item?.categories}</p>
                        <Link href={item?.title}><h2 className='text-center font-poppins text-lg'>{item?.title}</h2></Link>
                    </div>
                  )
                })
              }
          </div>
        </section>
        <div className='pt-[1px] bg-border'/>
        <section className='my-24'>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {PostMokeData.slice(5).map((post, idx) => {
              if(idx === 3) {
                return <AddSection/>
              }else{
                return  <PostDesign post={post} idx={idx} layout={3} key={idx} />
              }
            })}
          </div>

        </section>
    </Layout>
    <Footer1/>
    </>
  )
}

export default Blog


const AddSection =()=>{
  return(
    <div className='bg-light-gray'>
      add
    </div>
  )
}