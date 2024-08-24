import React, { useContext, useState, useEffect } from "react";
import { Title, ProductItem } from "./Components";
import { ShopContext } from "../Context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestseller(bestProducts.slice(0, 5));
  }, [products]); // Ensure to include products as a dependency if it's changing

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our top-selling products, handpicked for quality and style.
          Elevate your everyday essentials with our bestsellers.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.map((items, index) => (
          <ProductItem
            key={index}
            id={items._id}
            image={items.image}
            name={items.name}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
