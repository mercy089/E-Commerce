import React from "react";
// import Hero from '../Components/Hero'
import {
  BestSeller,
  Hero,
  LatestCollection,
  OurPolicy,
  NewsLetterBox,
} from "../Components/Components";

const Home = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      {/* Hero Section */}
      <Hero />

      {/* Latest Collection Section */}
      <LatestCollection />

      {/* Our Policy Section */}
      <OurPolicy />

      {/* Best Seller Section */}
      <BestSeller />

      {/* Newsletter Subscription Section */}
      <NewsLetterBox />
    </div>
  );
};

export default Home;
