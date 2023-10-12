import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaHome} from "react-icons/Fa";
import { BsFillPersonFill, BsPaypal  } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { logoDark, payment } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className='w-32' src={logoDark} alt='logoDark' />
          <p className='text-white text-sm tracking-wide'>© ReactBD.com</p>
          <img className='w-56' src={payment} alt='paymentLogo' />
          <div className='flex text-lg gap-5 text-gray-500'>
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>location us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Gulshan-e-Iqbal, Karachi</p>
            <p>Phone: +923062128292</p>
            <p>E-mail: baraar@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
          <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsFillPersonFill /></span>my account</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>checkout</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>order tracking</p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>help & support</p>
          </div>
        </div>
        <div className='flex flex-col '>
           <input type='text' placeholder='Email' className='bg-transparent border rounded px-4 py-3 my-4 text-sm'/>
          <button className='text-sm border rounded py-1 text-white hover:bg-gray-900 active:bg-white active:text-black'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer