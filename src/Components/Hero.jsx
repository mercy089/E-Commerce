import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Banner } from "./Components";

const Hero = () => {
  return (
    <div className="">
      <Banner
        title="Latest Arrivals"
        subtitle="OUR BESTSELLERS"
        ctaText="SHOP NOW"
        heroImage={assets.hero_img}
      />
      {/* <Banner
        title="New Collection"
        subtitle="SUMMER 2024"
        ctaText="EXPLORE"
        heroImage={assets.hero_img}
      />
      <Banner
        title="Exclusive Deals"
        subtitle="LIMITED TIME OFFER"
        ctaText="GRAB NOW"
        heroImage={assets.hero_img}
      />
      <Banner
        title="Trending Now"
        subtitle="HOT PICKS"
        ctaText="CHECK IT OUT"
        heroImage={assets.hero_img}
      />
      <Banner
        title="Winter Essentials"
        subtitle="WARM AND COZY"
        ctaText="DISCOVER"
        heroImage={assets.hero_img}
      /> */}
    </div>
  );
};

export default Hero;
