import React, { useState, useEffect } from "react";
import { banners } from "../assets/frontend_assets/banner";
import { Banner } from "./Components";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // useEffect hook to handle automatic carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Banner
              title={banner.title}
              subtitle={banner.subtitle}
              ctaText={banner.ctaText}
              heroImage={banner.heroImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;


