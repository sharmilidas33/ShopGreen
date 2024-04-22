import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import cartIcon from '../images/cartIcon.png'
import { SlLocationPin } from 'react-icons/sl'
import { HiOutlineSearch } from 'react-icons/hi'
import Link from 'next/link'

const Header = () => {
  return (
  <div className='w-full h-20 bg-green-100 text-black sticky top-0 z-50'>
    <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
    {/* logo */}
    <Link 
    href={'/'}
    className='px-2 border border-transparent hover:border-black cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
        <Image className='w-28 object-cover' src={logo} alt='logoImg'/>
    </Link>
    {/* delivery */}
    <div className='px-2 border border-transparent hover:border-black cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
        <SlLocationPin/>
        <div className='text-xs'>
            <p>Deliver To</p>
            <p className='font-bold uppercase'>Kolkata, India</p>
        </div>
    </div>
    {/* search */}
    <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
        <input type="text" placeholder='Search the plant you need!' className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[4px] border-transparent outline-none'/>
        <span className='w-12 h-full bg-slate-300 text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
            <HiOutlineSearch/>
        </span>
    </div>
    {/* signin */}
    <div className="flex items-center px-2 border border-transparent hover:border-black cursor-pointer duration-300 h-[70%] gap-1">
        <div className='text-xs'>
            <p>Hello,</p>
            <p className='font-bold uppercase'>Sign In</p>
        </div>
    </div>
    {/* wishlist */}
    <div className="flex items-center px-2 border border-transparent hover:border-black cursor-pointer duration-300 h-[70%] gap-1">
        <div className='text-xs'>
            <p>Marked</p>
            <p className='font-bold uppercase'>& Wishlist</p>
        </div>
    </div>
    {/* cart */}
    <Link
    href={"/cart"}
    className='flex items-center px-2 border border-transparent hover:border-black cursor-pointer duration-300 h-[70%] gap-1'>
        <Image className='w-auto object-cover h-8' src={cartIcon} alt="cartImg"/>
        <span className='absolute top-[10px] right-[10px] bg-white text-black text-xs px-1 rounded-full font-semibold'>0</span>
    </Link>

    </div>
  </div>
  );
}

export default Header
