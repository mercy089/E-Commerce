import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const [visible,setVisible]=useState(false)
  return (
    <div className="flex items-center justify-between py-6 font-medium">
      <img src={assets.logo} alt="" className=" w-44 sm:w-56 md:w-64 lg:w-72" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-lg">HOME</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-lg">COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-lg">ABOUT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-lg">CONTACT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
        <img src={assets.cart_icon} alt="" className="w-5 w-min-5"/>
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">0</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden"/>
      </div>

        {/* sideBar Menu For small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-5 bg-gray-100">
                <img src={assets.dropdown_icon} alt="" className="h-6 rotate-180"/>
                <p className="text-lg">Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-lg' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-lg' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-lg' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-lg' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
