import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); // Destructure context values
  const [visible, setVisible] = useState(false); // Local state to control visibility based on route
  const location = useLocation(); // Get current route location

  // Effect hook to control visibility based on the route
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true); // Show search bar if on the 'collection' route
    } else {
      setVisible(false); // Hide search bar for other routes
    }
  }, [location]); // Dependency on location to trigger effect when route changes

  // Handler to close the search bar
  const handleCloseSearch = () => {
    setSearch(""); // Clear the search input
    setShowSearch(false); // Close the search bar
  };

  // Conditionally render the search bar based on 'showSearch' and route visibility
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-100 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search input value
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="Search Icon" className="w-4" /> {/* Search icon */}
      </div>
      <img
        onClick={handleCloseSearch} // Close search bar on click
        src={assets.cross_icon} // Cross icon to close search bar
        alt="Close Search Bar"
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null; // Return null if not visible
};

export default SearchBar;
