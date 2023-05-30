import Link from 'next/link'
import React from 'react'

const Route = ({children, to}:any) => {
  return (
     <li className='mb-2'> <Link href={to} className="uppercase text-black dark:text-white hover:text-light-blue"> {children} </Link> </li>
  )
}

export default Route