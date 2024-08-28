import React from "react";
import { Title, NewsLetterBox } from "../Components/Components";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Information Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="Contact Us"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Store Information */}
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Fashion-Fusion Headquarters <br />
            123 Fusion Avenue, Style District <br />
            Mumbai, Maharashtra 400001, India
          </p>
          <p className="text-gray-500">
            Tel: (+91) 999******* <br />
            Email: contact@fashionfusion.com
          </p>

          {/* Careers Section */}
          <p className="font-semibold text-xl text-gray-600">
            Careers at Fashion Fusion
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-6 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-full">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
