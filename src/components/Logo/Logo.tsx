import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src="/assets/svg/logoipsumsvg.svg" alt="logo" className='w-36 md:w-52' width={200} height={100}/>
  )
}

export default Logo