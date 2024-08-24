import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/frontend_assets/assets";
import Banner from "./Components/Banner";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set to true if you want navigation arrows
  };

  return (
    <div>
      <Slider {...settings}>
        <Banner
          title="Latest Arrivals"
          subtitle="OUR BESTSELLERS"
          ctaText="SHOP NOW"
          heroImage={assets.hero_img}
        />
        <Banner
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
        />
      </Slider>
    </div>
  );
};

export default Hero;
