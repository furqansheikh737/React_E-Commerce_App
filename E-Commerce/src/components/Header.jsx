import React from 'react'
import { useState } from 'react';
import { logoDark, cartImg } from '../assets'
import { BiLogIn, BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-full h-20 bg-white border-b border-b-gray-500 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img className="w-20" src={logoDark} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {['Home', 'Page', 'Shop', 'Element', 'Blog'].map((text, idx) => (
            <li
              key={idx}
              className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              {text}
            </li>
          ))}

          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cart" />
              <span className="absolute w-5 h-5 -top-2 -left-2 text-xs bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <li className="text-2xl text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              <BiLogIn />
            </li>
          </Link>
        </ul>

        {/* Hamburger Button - Mobile */}
        <div
          className="md:hidden text-3xl text-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX /> : <BiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t border-gray-300">
          <ul className="flex flex-col gap-4">
            {['Home', 'Page', 'Shop', 'Element', 'Blog'].map((text, idx) => (
              <li
                key={idx}
                className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300"
              >
                {text}
              </li>
            ))}

            <Link to="/cart">
              <div className="flex items-center gap-2">
                <img className="w-6" src={cartImg} alt="cart" />
                <span className="text-sm text-black">Cart ({productData.length})</span>
              </div>
            </Link>

            <Link to="/login" className="flex items-center gap-2 text-black font-semibold">
              <BiLogIn className="text-xl" />
              <span>Login</span>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header