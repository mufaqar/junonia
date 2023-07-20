import React from 'react'
import { PostMokeData } from "@/const/post";
import { FiCalendar } from 'react-icons/fi';
import { Tags, categoriesDate } from '../../const/categories'
import Image from 'next/image';

const MegaMenu = () => {
     return (
          <section className='fixed top-[58px] hidden md:block left-0 z-[1] w-full px-4'>
               <div className='flex p-6 container mx-auto bg-light-gray shadow-lg'>
                    <div className="w-[100%] lg:flex lg:space-x-10">
                         <div className='lg:border-r-[1px] lg:w-[65%] lg:pr-10 border-border'>
                              <h2 className='text-xl uppercase mb-4 font-oswald underline'>Latest Article</h2>
                              <div className='grid grid-cols-2 gap-5'>
                                   {
                                        PostMokeData.slice(0, 6).map((p, idx) => (
                                             <div className="flex gap-4 items-center group " key={idx}>
                                                  <figure className="h-24 min-w-[6rem] overflow-hidden">
                                                       <Image
                                                            src={p?.img}
                                                            alt="feature"
                                                            width={96}
                                                            height={96}
                                                            className="h-24 _img object-cover group-hover:scale-110 transition-all duration-200"
                                                       />
                                                  </figure>
                                                  <div>
                                                       <div className="flex items-center gap-2">
                                                       <span className='capitalize text-sm py-[2px] px-2 bg-yellow text-black rounded-full'>{p?.categories}</span>  <span className="text-light-blue flex item-center gap-1  text-sm"> <FiCalendar size={17} /> <span className="-mt-[2px]">{idx+1} DECEMBER</span></span>
                                                       </div>
                                                       <h2 className="uppercase pt-1 text-sm text-pure cursor-pointer group-hover:underline">
                                                            {p.title}
                                                       </h2>
                                                       
                                                  </div>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='lg:w-[35%] pt-5 lg:pt-0'>
                              <div>
                                   <h2 className='text-xl uppercase mb-4 font-oswald underline'>Tags</h2>
                                   <ul className='flex flex-wrap gap-3'>
                                        {Tags?.map((tag, id) => (
                                             <li key={id} className='border-border border-[1px] text-gray-400 capitalize hover:border-transparent hover:bg-yellow hover:text-black cursor-pointer p-2 px-4 rounded-xl'>#{tag.name}</li>
                                        ))}
                                   </ul>
                              </div>
                              <div>
                                   <h2 className='text-xl uppercase mb-4 font-oswald mt-5 underline'>Categories</h2>
                                   <ul className='flex flex-wrap gap-3'>
                                        {categoriesDate.slice(0,9)?.map((cat, id) => (
                                             <li key={id} className='border-border border-[1px] text-gray-400 capitalize hover:border-transparent hover:bg-yellow hover:text-black cursor-pointer p-2 px-4 rounded-xl'>{cat.name}</li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default MegaMenu