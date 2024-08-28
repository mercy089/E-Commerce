/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

// Create a Context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹"; // Default currency symbol
  const delivery_fee = 50; // Default delivery fee
  const [search, setSearch] = useState(""); // Search input state
  const [showSearch, setShowSearch] = useState(false); // Search visibility state
  const [cartItem, setCartItem] = useState({}); // Cart items state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to add or remove items from the cart
  const addToCart = (itemId, size, remove = false) => {
    let cartData = JSON.parse(JSON.stringify(cartItem)); // Deep copy of cart items

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
    setCartItem(cartData); // Update the cart item state
  };

  // Function to get the total number of items in the cart
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

  // Function to update the quantity of a specific item in the cart
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = JSON.parse(JSON.stringify(cartItem)); // Deep copy of cart items

    if (quantity === 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItem(cartData); // Update the cart item state
  };

  // Function to calculate the total amount of items in the cart
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

  // Function to log in the user
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to log out the user
  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Navigate to login page after logout
  };

  // Context value that will be provided to other components
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
    isLoggedIn,
    login,
    logout,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
