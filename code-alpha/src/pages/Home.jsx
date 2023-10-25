import React from 'react'
import Slider from '../components/slider/Slider'
import "./home.css"
import Highlight from '../components/highlights/Highlight'
import Pamplet from '../components/pamplet/Pamplet'
import PhotoInfo from '../components/photosinfo/PhotoInfo'




const Home = () => {
  return (
    <>
    <Slider/>
    <PhotoInfo/>
    <Highlight/>
   <Pamplet/>
    </>
  )
}

export default Home