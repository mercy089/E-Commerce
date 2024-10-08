import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { RelatedProducts } from "../Components/Components";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, cartItem } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Fetch product data based on the productId from the URL
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    } else {
      toast.error("Product not found");
    }
  }, [productId, products]);

  useEffect(() => {
    // Check if the product and size are in the cart to update the "isAdded" state
    if (productData && size) {
      const isInCart = cartItem[productData._id]?.[size] > 0;
      setIsAdded(isInCart);
    }
  }, [productData, size, cartItem]);

  const handleSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleButtonClick = () => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (isAdded) {
      // Remove from cart
      addToCart(productData._id, size, true);
      setIsAdded(false);
      toast.info("Removed from cart");
    } else {
      // Add to cart
      addToCart(productData._id, size);
      setIsAdded(true);
      toast.success("Added to cart");
    }
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data Section */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt={`Product image ${index + 1}`}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Selected product" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="Star rating"
                className="w-3.5"
              />
            ))}
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => handleSizeSelection(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 rounded-xl ${
                    item === size ? "border-black" : ""
                  }`}
                  aria-pressed={item === size}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleButtonClick}
            className={`px-8 py-3 text-sm rounded-xl ${
              isAdded ? "bg-red-500" : "bg-black"
            } text-white active:bg-gray-700`}
          >
            {isAdded ? "REMOVE" : "ADD TO CART"}
          </button>

          <hr className="sm:w-4/5 mt-8" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and Exchange policy within 7 Days</p>
          </div>
        </div>
      </div>
      {/* Product Reviews Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* Related Products Section */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
