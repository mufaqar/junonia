import Link from 'next/link'
import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import SubMenu from './subMenu'

const Route = ({ children, to, subChild }: any) => {
  const [OpenSubChild, setOpenSubChild] = useState('')
  console.log("🚀 ~ file: route.tsx:8 ~ Route ~ OpenSubChild:", OpenSubChild)

  const HandleSubNav = (id:string) => {
    setOpenSubChild(id[0])
  }

  return (
    <li className='py-3 md:border relative md:border-border !border-b-0 px-4' onMouseEnter={()=>HandleSubNav(children)}>
      <RouteLink children={children} to={to} subChild={subChild}/>
      {
        OpenSubChild === children && subChild?.length > 1 && <SubMenu>
          {
            subChild?.map((item:any, idx:number)=>{
              return(
                <li key={idx} className='py-3 md:border relative md:border-border !border-b-0 px-4'>
                  <RouteLink children={item.name} to={item.link} />
                </li>
              )
            })
          }
        </SubMenu>
      }
    </li>
  )
}

export default Route


const RouteLink = ({children, to, subChild}:any) => {
  return(
    <Link href={to} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue">
        <span>{children}</span>
        { subChild?.length > 1 && <SlArrowRight size={11} /> }
      </Link>
  )
}