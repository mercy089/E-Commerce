/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Title, ProductItem } from "../Components/Components";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext); // Access products from context
  const [related, setRelated] = useState([]); // State to store related products

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice(); // Create a copy of products array

      // Filter products by the selected category
      productCopy = productCopy.filter((item) => item.category === category);

      // Further filter products by the selected subCategory
      productCopy = productCopy.filter(
        (item) => item.subCategory === subCategory
      );

      // Update the state with the filtered products, limiting to 5 items
      setRelated(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // Dependencies to trigger useEffect when products, category, or subCategory change

  return (
    <div className="my-24">
      {/* Title section */}
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      {/* Grid of related products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((items, index) => (
          <ProductItem
            key={index} // Unique key for each ProductItem
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

export default RelatedProducts;
