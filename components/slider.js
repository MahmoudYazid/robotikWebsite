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

    const Card = ({ title, hreflink, subtitle }) => (
        <div class="card ">
            <div class="card-border-top">
            </div>
            <img class="img" src='/website icon.png'>
            </img>
            <span>{title}</span>
            <p class="job"> {subtitle}</p>
            <a href={hreflink}>
            <button> Demo
            </button>
            </a>
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
        <div id='pastwork' class="swiper bg-[#000437] h-[30rem] w-[100vw] mySwiper flex flex-cols gap-5">
            <Head>
               
            </Head>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <Card title={'SocialHub HomePage'} hreflink={'https://social-hub-ui.vercel.app/'} subtitle={'Software House'} ></Card>
                </div>
                <div class="swiper-slide">
                    <Card title={'online restaurent Softwares'} hreflink={'https://online-resturant-program.vercel.app/'} subtitle={'business Software'} ></Card>
                </div>

                <div class="swiper-slide">
                    <Card title={'Ecommerce  Softwares'} hreflink={'https://fe-ecommerce-eight.vercel.app/'} subtitle={'business Software'} ></Card>
                </div>

                <div class="swiper-slide">
                    <Card title={'pharmacy Management  '} hreflink={'https://play.google.com/store/apps/details?id=com.pharmaclonetrailer&hl=en_US'} subtitle={'business Software'} ></Card>
                </div>
              
                
            </div>
            <div className='swiper-pagination'></div>
        </div>
        


    );
};

export default SwiperComponent;