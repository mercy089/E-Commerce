/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ imageSrc, label, onClick }) => {
  return (
    // Wrapper div for the category card, setting up layout and click handler
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      {/* Image representing the category */}
      <img src={imageSrc} alt={label} className="w-24" />
      
      {/* Label displayed on top of the image */}
      <p className="absolute text-sm sm:text-base pt-8 sm:pt-7 flex justify-center items-center text-center">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
