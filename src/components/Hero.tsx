"use client"

import React from 'react'
import Slider from 'react-slick'
import Slide from '@/components/Slide'

const Hero = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const slideData = [
    {
        id: 0,
        img: "/banner1.jpg",
        title: "Sweetest Scoop",
        mainTitle: "INDULGE IN PREMIUM ICE CREAM & DESSERTS",
        price: "Starting at ₹99"
    },
    {
        id: 1,
        img: "/banner2.jpg",
        title: "Berry Blast",
        mainTitle: "EXPERIENCE FRESH FLAVOURS & CREAMY DELIGHTS",
        price: "From ₹89 Only"
    },
    {
        id: 2,
        img: "/banner3.jpg",
        title: "Deluxe Sundae",
        mainTitle: "TREAT YOURSELF TO LUXURY IN EVERY SCOOP",
        price: "₹149 Only"
    },
  ]

  return (
    <div>
        <div className='pt-6 lg:pt-0 px-4 md:px-6 lg:px-8'>
            <Slider {...settings}>
                {
                    slideData.map((item) => (
                        <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
                    ))
                }
            </Slider>
        </div>
    </div>
    
  )
}

export default Hero