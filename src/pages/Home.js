import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import Cards from '../utils/Cards'

const Home = () => {
  return (
    <div>
        <ImageCarousel/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default Home