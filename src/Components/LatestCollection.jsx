import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Title, ProductItem } from "./Components";

const LatestCollection = () => {
  // Accessing the products from ShopContext
  const { products } = useContext(ShopContext);
  
  // State to store the latest products to be displayed
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Update the latestProducts state with the first 10 products
    setLatestProducts(products.slice(0, 10));
  }, [products]); // Dependency array ensures this effect runs when products change

  return (
    <div className="my-10">
      {/* Title and description for the Latest Collection section */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the latest trends and timeless pieces from our newest
          collection. Elevate your style today.
        </p>
      </div>

      {/* Grid layout for displaying the latest products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((items, index) => (
          <ProductItem
            key={index} // Unique key for each product
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

export default LatestCollection;
