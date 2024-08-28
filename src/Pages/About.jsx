import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Title, NewsLetterBox } from "../Components/Components";

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      
      {/* About Us Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image Section */}
        <img
          src={assets.about_img}
          alt="About Us"
          className="w-full md:max-w-[450px]"
        />
        
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          {/* Title for Fashion Fusion */}
          <Title
            text1={"FASHION"}
            text2={"FUSION:"}
            text3={"Where Style Meets Innovation"}
          />
          
          <p>
            Fashion-Fusion was created from a passion for blending tradition
            with modernity, redefining the fashion landscape. Our journey
            started with a bold vision: to create a platform where customers can
            effortlessly find and experience the perfect mix of timeless fashion
            and cutting-edge trends, all from the comfort of their own homes.
          </p>
          <p>
            From the beginning, we&apos;ve been committed to curating a wide
            selection of high-quality fashion pieces that reflect the diverse
            and evolving tastes of our customers. Whether you&apos;re looking for
            classic elegance or the latest in contemporary style, our collection
            is thoughtfully sourced from trusted designers and brands around the
            globe.
          </p>
          
          {/* Title for Mission Statement */}
          <Title text1={'OUR'} text2={'MISSION'} />
          
          <p>
            At Fashion-Fusion, our mission is to empower individuals with the freedom to express themselves through fashion. We&apos;re dedicated to providing a shopping experience that combines convenience, style, and innovation, ensuring every step—from browsing to delivery—exceeds your expectations.
          </p>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE"} text3={"FASHION-FUSION"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        {/* Quality Assurance */}
        <div className="border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        
        {/* Convenience */}
        <div className="border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        
        {/* Exceptional Customer Service */}
        <div className="border px-10 md:px-6 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      
      {/* Newsletter Subscription */}
      <NewsLetterBox />
    </div>
  );
};

export default About;
