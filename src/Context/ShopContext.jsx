/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate()


  const addToCart = (itemId, size, remove = false) => {
    let cartData = JSON.parse(JSON.stringify(cartItem));

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        if (remove) {
          delete cartData[itemId][size];
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        } else {
          cartData[itemId][size] += 1;
        }
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let count = 0;

    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        try {
          count += cartItem[itemId][size];
        } catch (error) {
          console.error(`Error accessing cart item size: ${error.message}`);
        }
      }
    }

    return count;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = JSON.parse(JSON.stringify(cartItem));

    if (quantity === 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItem(cartData);
  };

  const getCartAmount = async () => {
    let totalAmount = 0;

    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.error(`Error calculating cart amount: ${error.message}`);
        }
      }
    }
    return totalAmount;
  };

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
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
