/* eslint-disable react/prop-types */
import React from "react";

const Banner = ({ title, subtitle, ctaText, heroImage }) => {
  return (
    <div className="flex flex-wrap border border-gray-400 ">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center justify-end gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-base md:text-lg">{subtitle}</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-2 lg:text-5xl leading-relaxed">
            {title}
          </h1>
          <div className="flex items-center justify-start gap-2">
            <p className="font-medium text-base md:text-lg">{ctaText}</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right side */}
      <img src={heroImage} alt="Hero" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Banner;
