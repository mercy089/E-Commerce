import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CategoryCard from "../Components/CategoryCard";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filterProduct, setFilterProduct] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  useEffect(() => {
    let filteredProducts;

    // Filter products based on selected category
    if (selectedCategory === "ALL") {
      filteredProducts = [...products]; // Use spread operator to create a new array
    } else {
      filteredProducts = products.filter(
        (product) => product.category.toUpperCase() === selectedCategory
      );
    }

    // Filter products based on search term if search is enabled
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort products based on the selected option
    switch (sortOption) {
      case "low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // Handle the relevant sorting or any other default behavior here
        break;
    }

    setFilterProduct(filteredProducts);
  }, [products, selectedCategory, sortOption, search, showSearch]);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle sorting option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-8 place-items-center">
          <CategoryCard
            imageSrc={assets.frame}
            label="ALL"
            onClick={() => handleCategoryClick("ALL")}
          />
          <CategoryCard
            imageSrc={assets.frame}
            label="MEN"
            onClick={() => handleCategoryClick("MEN")}
          />
          <CategoryCard
            imageSrc={assets.frame}
            label="WOMEN"
            onClick={() => handleCategoryClick("WOMEN")}
          />
          <CategoryCard
            imageSrc={assets.frame}
            label="KIDS"
            onClick={() => handleCategoryClick("KIDS")}
          />
        </div>
      </div>
      <hr className="my-2 border-t border-gray-700 w-full" />
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={selectedCategory} text2="COLLECTIONS" />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={handleSortChange}
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <div className="col-span-full text-center">No products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
