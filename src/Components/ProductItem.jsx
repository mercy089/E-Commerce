/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext); // Access currency from context
  
  return (
    <div>
      {/* Link to the product details page */}
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        {/* Image container with hover effect */}
        <div className="overflow-hidden">
          <img
            src={image[0]} // Display the first image from the image array
            alt={name} // Alt text for accessibility, using product name
            className="hover:scale-110 transition ease-in-out" // Scale image on hover
          />
        </div>
        {/* Product name */}
        <p className="pt-3 pb-1 text-sm">{name}</p>
        {/* Product price */}
        <p className="font-medium text-sm">
          {currency} {/* Currency symbol */}
          {price} {/* Product price */}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
