/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ imageSrc, label, onClick }) => {
  return (
    <div className="relative flex flex-col items-center cursor-pointer" onClick={onClick}>
      <img src={imageSrc} alt={label} className="w-24" />
      <p className="absolute text-1xl pt-7 flex justify-center items-center text-center">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
