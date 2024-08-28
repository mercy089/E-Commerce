import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      {/* Main footer section with three columns */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* Company logo and description */}
        <div>
          <img
            src={assets.logo}
            alt=""
            className="w-44 mb-5"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Where Fashion Meets Fusion: Discover a world where cutting-edge
            style meets timeless elegance. Our curated collection blends classic
            chic with modern trends, creating a fashion experience that&apos;s
            uniquely yours.
          </p>
        </div>
        
        {/* Company section with links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact information section */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 999*******</li>
            <li>contact@fashionfusion.com</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section with copyright notice */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ fashionfusion.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
