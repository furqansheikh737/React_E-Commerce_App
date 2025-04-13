import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaHome,
} from "react-icons/fa";
import { BsFillPersonFill, BsPaypal } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { logoDark, payment } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-16 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <img className="w-32" src={logoDark} alt="logoDark" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img className="w-56" src={payment} alt="paymentLogo" />
          <div className="flex text-xl gap-4 text-gray-500">
            <FaGithub className="hover:text-white cursor-pointer duration-300" />
            <FaFacebookF className="hover:text-white cursor-pointer duration-300" />
            <FaInstagram className="hover:text-white cursor-pointer duration-300" />
            <FaTwitter className="hover:text-white cursor-pointer duration-300" />
            <FaYoutube className="hover:text-white cursor-pointer duration-300" />
          </div>
        </div>

        {/* Column 2: Location */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Location</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Gulshan-e-Iqbal, Karachi</p>
            <p>Phone: +92 306 2128292</p>
            <p>Email: baraar@gmail.com</p>
          </div>
        </div>

        {/* Column 3: Profile */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white cursor-pointer duration-300">
              <BsFillPersonFill /> My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white cursor-pointer duration-300">
              <BsPaypal /> Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white cursor-pointer duration-300">
              <FaHome /> Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white cursor-pointer duration-300">
              <MdLocationOn /> Help & Support
            </p>
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent border rounded px-4 py-3 my-4 text-sm text-white placeholder-gray-400"
          />
          <button className="text-sm border rounded py-2 text-white hover:bg-gray-900 active:bg-white active:text-black transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
