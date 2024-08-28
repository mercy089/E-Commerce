import React, { useContext, useState, useEffect } from "react";
import { Title, ProductItem } from "./Components";
import { ShopContext } from "../Context/ShopContext";

const BestSeller = () => {
  // Accessing products from the ShopContext
  const { products } = useContext(ShopContext);

  // State to hold the list of bestseller products
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    // Filter products to get only the ones marked as bestsellers
    const bestProducts = products.filter((item) => item.bestseller);
    
    // Set the first 5 products from the filtered list as bestsellers
    setBestseller(bestProducts.slice(0, 5));
  }, [products]); // Effect dependency to run when products change

  return (
    <div className="my-10">
      {/* Section title and description */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our top-selling products, handpicked for quality and style.
          Elevate your everyday essentials with our bestsellers.
        </p>
      </div>

      {/* Grid layout to display bestseller products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.map((items, index) => (
          <ProductItem
            key={index} // Unique key for each product item
            id={items._id} // Product ID
            image={items.image} // Product image
            name={items.name} // Product name
            price={items.price} // Product price
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
