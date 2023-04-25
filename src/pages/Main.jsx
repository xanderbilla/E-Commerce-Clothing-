import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import FeaturedProduct from '../components/FeaturedProduct'
import Newsletter from '../components/Newsletter'

const Homepage = () => {
  return (
      <div>
      <Slider />
      <Categories />
      <FeaturedProduct />
      <Newsletter />
    </div>
  )
}

export default Homepage