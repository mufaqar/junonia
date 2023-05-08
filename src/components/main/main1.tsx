import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const Main1 = () => {
  return (
     <main className='h-[520px] grid grid-cols-2'>
          <div className=''>
          <MainPost/>
          </div>
          <div>
               <div className='flex flex-wrap h-1/2'>
                    <div className='flex-1 bg-blue-200'>2</div> 
                    <div className='flex-1 bg-black'>3</div> 
               </div>
               <div className='flex flex-wrap h-1/2'>
                    <div className='flex-1 bg-green-200'>2</div> 
                    <div className='flex-1 bg-gray-400'>3</div> 
               </div>
          </div>
          
     </main>
  )
}

export default Main1



const MainPost = ()=>{
     return(
          <div className="relative h-[520px] bg-cover bg-no-repeat" style={{backgroundImage: `url("/assets/images/Cars.jpg")`}}>
               <div className='absolute top-0 right-0 p-10 flex flex-col justify-end left-0 bottom-0 bg-black/30'>
                    <span className="text-yellow uppercase">Extreme</span>
                    <h2 className='text-2xl md:text-3xl uppercase mt-2 max-w-[480px] text-white'>Lorem Ipsum is simply dummy text of the printing. </h2>
                    <Link href="#" className='hover:text-yellow mt-3 text-white'><AiOutlinePlusCircle size={32}/></Link>
               </div>
          </div>
     )
}