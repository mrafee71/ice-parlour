import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";



const Hello = () => {
  return (
    <div className='border-b border-gray-200 py-6 px-4 md:px-6 lg:px-8'>
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-red-900">
                IceParlour
            </div>

            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input 
                    className='border border-gray-200 p-2 px-4 rounded-lg w-full outline-none focus:ring-1 focus:ring-red-200' 
                    type="text" 
                    placeholder='Enter any product name...' 
                />
                <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
            </div>

            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                <BiUser className='cursor-pointer'/>
                <div className="relative cursor-pointer">
                    <FiHeart />
                    <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                        1
                    </div>
                </div>
                <div className="relative cursor-pointer">
                    <HiOutlineShoppingBag />
                    <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                        4
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default 
Hello