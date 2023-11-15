import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import SecondHero from '../components/SecondHero'
import Thirdhero from '../components/thirdhero'
import Slider from '../components/slider'
import Footer from '../components/footer'

import Title from '../components/title'
import OurServiceTitle from '../components/OurServiceTitle'
import Ourservices from '../components/ourservices'
export default function index() {
  return (
    <main id='main' className='gap-3 overflow-x-hidden  bg-[#000437]  w-screen h-screen grid lg:grid-rows-[5rem_minmax(30rem,_1fr)_2rem_minmax(30rem,_1fr)_repeat(1,minmax(30rem,_1fr))_minmax(25rem,_1fr)_2rem_minmax(30rem,_1fr)_8rem] '>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurServiceTitle></OurServiceTitle>
      <Ourservices ></Ourservices>
      <SecondHero></SecondHero>
      <Thirdhero ></Thirdhero>
      <Title></Title>
      <Slider ></Slider>
     

      <Footer></Footer>
      
    </main>
  )
}
