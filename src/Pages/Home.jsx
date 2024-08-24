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
    <div>
      <Hero />
      <LatestCollection />
      <OurPolicy />
      <BestSeller />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
