import Link from 'next/link'
import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import SubMenu from './subMenu'

const Route = ({ children, to, subChild }: any) => {
  const [OpenSubChild, setOpenSubChild] = useState('')

  const HandleSubNav = (id:string) => {
    setOpenSubChild(id[0])
  }

  return (
    <li className='py-3 md:border relative md:border-border !border-b-0 px-4' onMouseEnter={()=>HandleSubNav(children)} onMouseLeave={()=>setOpenSubChild('')}>
      <RouteLink children={children} to={to} subChild={subChild}/>
      {
        OpenSubChild === children[0] && subChild?.length > 1 && 
        <div className='absolute right-0 -top-[41px]'>
        <SubMenu>
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
        </div>
      }
    </li>
  )
}

export default Route


const RouteLink = ({children, to, subChild}:any) => {
  return(
    <Link href={to} className="capitalize text-black dark:text-white flex items-center justify-between hover:!text-light-blue">
        {children}
        { subChild?.length > 1 && <SlArrowRight size={11} /> }
      </Link>
  )
}