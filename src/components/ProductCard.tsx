import React from 'react'
import Image from 'next/image'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";



interface ProductCardProps {
  img: string
  title: string
  desc: string
  rating: number
  price: string
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price }) => {

    const generateRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </div>
                );
            case 1.5:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </div>
                );
            case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </div>
                );
            case 2.5:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                    </div>
                );
            case 3.5:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline />
                    </div>
                );
            case 4:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarOutline />
                    </div>
                );
            case 4.5:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                    </div>
                );
            case 5:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-400">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                );
            default:
                return null
        }
    }

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px] h-[100%]'>
        <div>
            <Image 
                className='w-full h-auto'
                src={img} 
                alt={title} 
                width={200}
                height={200}
            />
        </div>

        <div className="space-y-2 py-2 md:py-3 lg:py-4">
            <h2 className='text-red-400 font-medium uppercase'>{title}</h2>
            <p className='text-gray-500'>{desc}</p>
            <div>{generateRating(rating)}</div>
            <div className="font-bold flex gap-4">
                ₹{price}
                <del className='text-gray-500 font-normal'>₹{parseInt(price) + 50}.00</del>
            </div>
        </div>
    </div>
  )
}

export default ProductCard