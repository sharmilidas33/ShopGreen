import React from 'react'
import { LuMenu } from 'react-icons/lu'

const BottomHeader = () => {
  return (
    <div className='w-full h-10 text-sm text-black px-4 bg-slate-100 flex items-center'>
      <p className='flex items-center gap-1 h-8 border border-transparent hover:border-black duration-300 cursor-pointer px-2'>
        <LuMenu className='text-xl'/> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-black cursor-pointer duration-300">
        Latest Plants
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-black cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-black cursor-pointer duration-300">
        My Plants
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-black cursor-pointer duration-300">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-black cursor-pointer duration-300">
        Sell
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 cursor-pointer duration-300 text-red-700 font-bold">
        Sign Out
      </p>
    </div>
  )
}

export default BottomHeader
