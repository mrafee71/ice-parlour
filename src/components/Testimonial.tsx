import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='px-4 md:px-8 lg:px-20'>
        <div className="pt-16 md:pt-20 lg:pt-24 mx-auto">
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-4 mb-2 md:mb-4 lg:mb-6 xl:mb-8'>Testimonials</h2>
            <div className="grid lg:grid-cols-[300px_1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                    <div className="text-center flex flex-col items-center gap-1">
                        <Image 
                            className='rounded-full inline-block'
                            src='/user.jpeg'
                            alt='user' 
                            width={80}
                            height={80}
                        />
                        <h2 className='text-gray-500 font-black text-[20px]'>User Name</h2>
                        <p>CEO & Founder</p>
                        <Image
                            className='inline-block py-2'
                            src='/user.jpeg'
                            alt='quote' 
                            width={30}
                            height={30}
                        />
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatibus, quos.
                        </p>
                    </div>
                </div>
                <div className="bg-red-600 bg-[url(/cta.png)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                        <button className='bg-black text-white p-2 rounded-md'>
                            20% Discount
                        </button>
                        <h2 className='font-extrabold text-2xl text-[#272727]'>
                            Cool Cravings
                        </h2>
                        <p className='text-gray-500 text-[20px]'>
                            starting @ ₹60 <b>Shop Now</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial