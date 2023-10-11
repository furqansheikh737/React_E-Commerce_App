import React from 'react'
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { logoDark } from '../assets'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-500'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <img className='w-20' src={logoDark} />
        </div>
        <div>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Page</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
          <span className='text-3xl'><HiOutlineShoppingBag/></span>
          <span className='text-3xl'><HiOutlineShoppingCart/></span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header