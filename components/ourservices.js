import React, { useEffect } from 'react';
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head';

const CairoFont = Cairo({
  subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
const SwiperComponent = () => {

  const Card = ({ service }) => (
    <div class="container3 noselect ">
      
      <div class="canvas">
        <div class="tracker tr-1"></div>
        <div class="tracker tr-2"></div>
        <div class="tracker tr-3"></div>
        <div class="tracker tr-4"></div>
        <div class="tracker tr-5"></div>
        <div class="tracker tr-6"></div>
        <div class="tracker tr-7"></div>
        <div class="tracker tr-8"></div>
        <div class="tracker tr-9"></div>
        <div class="tracker tr-10"></div>
        <div class="tracker tr-11"></div>
        <div class="tracker tr-12"></div>
        <div class="tracker tr-13"></div>
        <div class="tracker tr-14"></div>
        <div class="tracker tr-15"></div>
        <div class="tracker tr-16"></div>
        <div class="tracker tr-17"></div>
        <div class="tracker tr-18"></div>
        <div class="tracker tr-19"></div>
        <div class="tracker tr-20"></div>
        <div class="tracker tr-21"></div>
        <div class="tracker tr-22"></div>
        <div class="tracker tr-23"></div>
        <div class="tracker tr-24"></div>
        <div class="tracker tr-25"></div>
        <div id="card3">
          
          <div class="title3 text-center">{service}</div>
          

        </div>
      </div>
    </div>
  )
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div id='service' class="swiper bg-[#000437] h-[30rem] w-[100vw] mySwiper flex flex-cols gap-5">
      <Head>

      </Head>
      <div class="swiper-wrapper">
        <div class="swiper-slide flex justify-center items-center">
          <Card service={'website Backend'} ></Card>
        </div>
        <div class="swiper-slide flex justify-center items-center">
          <Card service={'website ui/ux'} ></Card>
        </div>
        <div class="swiper-slide flex justify-center items-center">
          <Card service={'website frontend'} ></Card>
        </div>

        <div class="swiper-slide flex justify-center items-center">
          <Card service={'Web Development'}></Card>
        </div>
        <div class="swiper-slide flex justify-center items-center">
          <Card service={'Android Development'}></Card>
        </div>

      </div>
      <div className='swiper-pagination'></div>
    </div>



  );
};

export default SwiperComponent;