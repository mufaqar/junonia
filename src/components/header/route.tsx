import Link from 'next/link'
import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import SubMenu from './subMenu'

const Route = ({ children, to, subChild }: any) => {
  const [OpenSubChild, setOpenSubChild] = useState('')

  const HandleSubNav = (id: string) => {
    setOpenSubChild(id[0])
  }

  return (
    <li className='py-3 md:border relative md:border-border !border-b-0 px-4' onMouseEnter={() => HandleSubNav(children)} onMouseLeave={() => setOpenSubChild('')}>
      <Link href={to} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue">
        {children}
        {subChild?.length > 1 && <SlArrowRight size={11} />}
      </Link>
      {
        OpenSubChild === children[0] && subChild?.length > 1 &&
        <div className='absolute right-[-100%] top-0 bg-light-gray md:w-[200px]'>
          {
            subChild?.map((item: any, idx: number) => {
              return (
                <li key={idx} className='py-3 md:border bg-light-gray relative md:border-border !border-b-0 px-4'>
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


const RouteLink = ({ children, to, subChild }: any) => {
  return (
    <Link href={to} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue">
      {children}
      {subChild?.length > 1 && <SlArrowRight size={11} />}
    </Link>
  )
}