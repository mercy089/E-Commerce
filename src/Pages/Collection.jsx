import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../Context/ShopContext";
import { CategoryCard, Title, ProductItem } from "../Components/Components";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState({});
  const [sortOption, setSortOption] = useState("relevant");

  useEffect(() => {
    let filteredProducts;
  
    // Filter products based on selected category
    if (selectedCategory === "ALL") {
      filteredProducts = [...products];
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
  
    // Group products by subcategory
    const groupedProducts = filteredProducts.reduce((acc, product) => {
      const subCategory = product.subCategory || "Others";
      if (!acc[subCategory]) {
        acc[subCategory] = [];
      }
      acc[subCategory].push(product);
      return acc;
    }, {});
  
    // Sort products within each subcategory based on the selected option
    Object.keys(groupedProducts).forEach((subCategory) => {
      switch (sortOption) {
        case "low-high":
          groupedProducts[subCategory].sort((a, b) => a.price - b.price);
          break;
        case "high-low":
          groupedProducts[subCategory].sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    });
  
    setSortedProducts(groupedProducts);
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
    <div className="text-2xl text-center pt-8 border-t">
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
        <div className="flex justify-between text-base sm:text-4xl mb-4">
          <Title text1={selectedCategory+"'s"} text2="COLLECTION" />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={handleSortChange}
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>
        {/* Map Products by Subcategory */}
        {Object.keys(sortedProducts).length > 0 ? (
          Object.keys(sortedProducts).map((subCategory, index) => (
            <div key={index}>
              <h3 className="text-base sm:text-3xl font-medium mb-2 text-left underline"><Title text3={subCategory}/></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mb-6">
                {sortedProducts[subCategory].map((item, idx) => (
                  <ProductItem
                    key={idx}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Collection;
