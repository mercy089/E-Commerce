/* eslint-disable react/prop-types */
import React from "react";

const Title = ({ text1, text2, text3 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      {/* Title text with styling */}
      <p className="text-gray-500">
        {text1} {/* First part of the title */}
        <span className="text-gray-700 font-medium">{text2}</span> {/* Second part of the title with medium font weight */}
        <span className="text-gray-900 font-semibold underline">{text3}</span> {/* Third part with bold font and underline */}
      </p>
      
      {/* Horizontal line */}
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
