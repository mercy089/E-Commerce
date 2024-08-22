import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import Banner from './Banner'

const Hero = () => {
  return (
    <div>
    <Banner
    title="Latest Arrivals"
    subtitle="OUR BESTSELLERS"
    ctaText="SHOP NOW"
    heroImage={assets.hero_img}
    />
    </div>
  )
}

export default Hero
