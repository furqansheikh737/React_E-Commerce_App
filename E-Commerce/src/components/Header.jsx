import React from 'react'
import { BiLogIn } from "react-icons/bi";
import { logoDark, cartImg } from '../assets'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-500 sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <div>
            <img className='w-20' src={logoDark} />
          </div>
        </Link>
        <div>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Page</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            <Link to="/cart">
              <div className="relative">
                <img className="w-6" src={cartImg} alt="cartImg" />
                <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login"><li className='text-3xl text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><BiLogIn /></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header