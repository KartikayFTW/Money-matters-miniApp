import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-16 bg-slate-300 flex justify-between items-center sticky top-0 z-50">
    <h2 className="font-semibold font-quickSand font-2xl pl-5 cursor-pointer" onClick={()=>navigate('/')}>
      Money Matters
    </h2>
    <div onClick={()=>navigate('/profile')} className="cursor-pointer font-bold font-quickSand text-gray-700 rounded-full bg-white flex items-center justify-center mr-5 h-10 w-10">
      KK
    </div>
  </div>
  )
}

export default Header
