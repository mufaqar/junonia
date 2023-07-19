import Link from 'next/link'
import React, { useState } from 'react'
import { SlArrowDown, SlArrowRight } from 'react-icons/sl'


const Route = ({ children, to, subChild }: any) => {
  const [OpenSubChild, setOpenSubChild] = useState('')

  const HandleSubNav = (id: string) => {
    setOpenSubChild(id[0])
  }

  return (
    <li className='relative ' onMouseEnter={() => HandleSubNav(children)} onMouseLeave={() => setOpenSubChild('')}>
      <Link href={to} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue md:py-3 md:border  border-border border-b-[1px] px-10 py-5 md:border-b-0 md:px-4">
        {children}
        {subChild?.length > 1 && <><SlArrowDown size={12}  className={`transition md:hidden duration-200 ease-in-out ${OpenSubChild === children[0] && '!transform !rotate-180'}`}/> <SlArrowRight size={11} className="hidden md:block" /></>}
      </Link>
      {
        OpenSubChild === children[0] && subChild?.length > 1 &&
        <div className='md:absolute right-[-100%] top-0 bg-light-gray md:w-[200px]'>
          {
            subChild?.map((item: any, idx: number) => {
              return (
                <li key={idx} className='md:py-3 md:border border-border py-5 md:border-b-0 md:px-4 border-b-[1px] px-10'>
                  <Link href={item.link} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue">
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </div>
      }
    </li>
  )
}

export default Route
