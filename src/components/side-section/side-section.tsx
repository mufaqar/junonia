import { SettingsContext } from '@/context/setting-context'
import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'

const SideSection = () => {
  const {openSide, setOpenSide} = useContext(SettingsContext)
  return (
    <div >
        <FaTimes className="text-white text-xl hover:rotate-90 transition-all cursor-pointer hover:text-yellow duration-300 ease-in-out"
        onClick={()=>{setOpenSide(!openSide)}}
        />

        
    </div>
  )
}

export default SideSection