import Image from 'next/image'
import React from 'react'

interface propsType {
    img: string,
    title: string,
    mainTitle: string,
    price: string
}

const Slide:React.FC<propsType> = ({img, title, mainTitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className="absolute left-[20px] md:left-[70px] max-w-[250px] sm:max-w-[350px] lg:max-w-[500px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-red-200/20 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <h3 className='text-red-300 text-[24px] lg:text-[28px]'>{title}</h3>
            <h2 className='text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>
              {mainTitle}
            </h2>
            <h3 className='text-[24px] text-gray-300 font-bold'>
              {price}
            </h3>
            <div className="bg-red-300 text-white text-[14px] md:text-[16px] rounded-lg inline-block cursor-pointer hover:bg-black p-2 px-4">
              Order Now
            </div>
        </div>
        <Image 
              className='w-[100%] h-[300px] md:h-[600px] rounded-xl object-cover object-center lg:object-left-bottom'
              src={img}
              alt={mainTitle}
              width={2000}
              height={2000}
            />
    </div>
  )
}

export default Slide