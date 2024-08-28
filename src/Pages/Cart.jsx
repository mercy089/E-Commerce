import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CartTotal, Title } from "../Components/Components";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  // Extract necessary values and functions from ShopContext
  const { products, cartItem, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Effect to update cartData when cartItem changes
  useEffect(() => {
    const tempData = [];
    // Iterate over cartItem to build a list of cart items with their details
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        if (cartItem[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItem[itemId][size],
          });
        }
      }
    }
    setCartData(tempData); // Update state with new cart data
  }, [cartItem]);

  return (
    <div className="border-t pt-14">
      {/* Cart Title */}
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} text3={"ITEMS"} />
      </div>

      {/* Cart Items List */}
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return productData ? (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                {/* Product Image and Details */}
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 py-1 border bg-slate-100">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Quantity Input */}
                <input
                  className="border max-w-5 sm:max-w-10 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item._id,
                      item.size,
                      parseInt(e.target.value)
                    )
                  }
                />
                
                {/* Remove Item Button */}
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Remove item"
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            ) : null;
          })
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      
      {/* Cart Total and Checkout Button */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          {cartData.length > 0 && <CartTotal />}
          {cartData.length > 0 && (
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
