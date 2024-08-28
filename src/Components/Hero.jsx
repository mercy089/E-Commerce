import React, { useState, useEffect } from "react";
import { banners } from "../assets/frontend_assets/banner";
import { Banner } from "./Components";

const Hero = () => {
  // State to track the currently active banner index
  const [activeIndex, setActiveIndex] = useState(0);
  
  // useEffect hook to handle automatic carousel
  useEffect(() => {
    // Set an interval to automatically change the active banner
    const intervalId = setInterval(() => {
      // Update the active index to the next banner or reset to the first banner
      setActiveIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change banner every 3 seconds

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container for sliding banners */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* Map through banners and render each as a Banner component */}
        {banners.map((banner, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Banner
              title={banner.title} // Title of the banner
              subtitle={banner.subtitle} // Subtitle of the banner
              ctaText={banner.ctaText} // Call-to-action text
              heroImage={banner.heroImage} // Image for the banner
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
