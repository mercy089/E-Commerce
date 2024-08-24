/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId, size, remove = false) => {
    let cartData = structuredClone(cartItem);

    // Check if the item is already in the cart
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        if (remove) {
          delete cartData[itemId][size]; // Remove the size from the cart

          // If the item has no more sizes in the cart, remove the item entirely
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        } else {
          cartData[itemId][size] += 1; // Add another item of the same size
        }
      } else {
        cartData[itemId][size] = 1; // Add a different size of the same item
      }
    } else {
      // If the item is not in the cart, add it
      cartData[itemId] = { [size]: 1 };
    }

    setCartItem(cartData);
  };

  const getCartCount = () => {
    let count = 0;

    // Loop through each item in the cart
    for (const itemId in cartItem) {
      // Loop through each size for the current item
      for (const size in cartItem[itemId]) {
        try {
          // Add the count of items of the current size to the total count
          count += cartItem[itemId][size];
        } catch (error) {
          console.error(`Error accessing cart item size: ${error.message}`);
        }
      }
    }

    return count;
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
