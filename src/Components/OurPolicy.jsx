import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {/* Policy Section: Easy Exchange Policy */}
      <div>
        <img
          src={assets.exchange_icon} // Image for exchange policy
          alt="Easy Exchange Policy Icon" // Alt text for accessibility
          className="w-12 m-auto mb-5" // Styling for icon
        />
        <p className="font-semibold">Easy Exchange Policy</p> {/* Title for the policy */}
        <p className="text-gray-400">We offer hassle free exchange policy</p> {/* Description */}
      </div>
      
      {/* Policy Section: 7 Days Return Policy */}
      <div>
        <img
          src={assets.quality_icon} // Image for return policy
          alt="7 Days Return Policy Icon" // Alt text for accessibility
          className="w-12 m-auto mb-5" // Styling for icon
        />
        <p className="font-semibold">7 Days Return Policy</p> {/* Title for the policy */}
        <p className="text-gray-400">We provide 7 days free return policy</p> {/* Description */}
      </div>

      {/* Policy Section: Best Customer Support */}
      <div>
        <img
          src={assets.support_img} // Image for customer support
          alt="Best Customer Support Icon" // Alt text for accessibility
          className="w-12 m-auto mb-5" // Styling for icon
        />
        <p className="font-semibold">Best Customer Support</p> {/* Title for the policy */}
        <p className="text-gray-400">We provide 24/7 Customer Support</p> {/* Description */}
      </div>
    </div>
  );
};

export default OurPolicy;
