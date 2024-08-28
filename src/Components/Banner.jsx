/* eslint-disable react/prop-types */
import React from "react";

// Banner component to display a section with a title, subtitle, CTA text, and an image
const Banner = ({ title, subtitle, ctaText, heroImage }) => {
  return (
    <div className="flex flex-wrap border border-gray-400 ">
      {/* Hero left side: Contains subtitle, title, and CTA text */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          {/* Subtitle with a decorative line */}
          <div className="flex items-center justify-end gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-base md:text-lg">{subtitle}</p>
          </div>
          {/* Main title */}
          <h1 className="prata-regular text-3xl sm:py-2 lg:text-5xl leading-relaxed">
            {title}
          </h1>
          {/* CTA text with a decorative line */}
          <div className="flex items-center justify-start gap-2">
            <p className="font-medium text-base md:text-lg">{ctaText}</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side: Displays the image */}
      <img src={heroImage} alt="Hero" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Banner;
