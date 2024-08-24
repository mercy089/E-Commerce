import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch,getCartCount,isLoggedIn } = useContext(ShopContext);

  // Get the current location
  const location = useLocation();

  return (
    <div className="flex items-center justify-between px-4 py-5 font-medium bg-white shadow-xl">
      {/* Logo Section */}
      <Link to="/">
        <img src={assets.logo} className="w-44" alt="Logo" />{" "}
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        {/* Only show the search icon when on the /collection route */}
        {location.pathname === "/collection" ? (
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search Icon"
          />
        ) : (
          <div className="w-5 h-5 bg-transparent border border-transparent" />
        )}

        {/* Profile Icon with Dropdown Menu */}
        <div className="group relative">
      <Link to={isLoggedIn ? '/profile' : '/login'}>
        <img
          src={assets.profile_icon}
          className="w-5 cursor-pointer"
          alt="Profile Icon"
        />
      </Link>
      {isLoggedIn && (
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <Link to="/profile" className="cursor-pointer hover:text-black">Profile</Link>
            <Link to="/orders" className="cursor-pointer hover:text-black">Orders</Link>
            <Link to="/logout" className="cursor-pointer hover:text-black">Logout</Link>
          </div>
        </div>
      )}
    </div>

        {/* Cart Icon with Item Count Badge */}
        <NavLink to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 h-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()} {/* Call as a function */}
          </p>
        </NavLink>

        {/* Mobile Menu Icon (Hamburger Icon) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } z-50`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button for Sidebar */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 px-3 py-8 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Close Sidebar"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          {/* Sidebar Navigation Links */}
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;