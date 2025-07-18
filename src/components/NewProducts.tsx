import React from 'react'
import ProductCard from '@/components/ProductCard'

const productData = [
  {
    img: "/product1.png",
    title: "Rainbow Sundae",
    desc: "Colorful scoops of ice cream with sprinkles & syrup",
    rating: 4,
    price: "149",
  },
  {
    img: "/product2.png",
    title: "Belgian Choco Candies",
    desc: "Hand-crafted Belgian chocolate candies pack",
    rating: 3,
    price: "249",
  },
  {
    img: "/product3.png",
    title: "Mango Sorbet",
    desc: "Refreshing mango sorbet made with real fruit",
    rating: 3.5,
    price: "89",
  },
  {
    img: "/product4.png",
    title: "Strawberry Mousse",
    desc: "Fluffy and airy mousse made with fresh strawberries",
    rating: 4.5,
    price: "159",
  },
  {
    img: "/product5.png",
    title: "Fudge Brownie",
    desc: "Gooey chocolate brownie topped with crunchy nuts",
    rating: 4,
    price: "129",
  },
  {
    img: "/product6.png",
    title: "Hazelnut Truffles",
    desc: "Decadent chocolate truffles filled with hazelnut cream",
    rating: 3,
    price: "279",
  },
  {
    img: "/product7.png",
    title: "Red Velvet Cupcake",
    desc: "Moist red velvet cupcake with cream cheese frosting",
    rating: 4,
    price: "99",
  },
  {
    img: "/product8.jpeg",
    title: "Trio Choco Fruit Bars",
    desc: "A premium pack of 3 ice cream bars with raspberry, strawberry, and caramel centers coated in rich chocolate",
    rating: 5,
    price: "249",
  },
];

const NewProducts = () => {
  return (
    <div className='px-4 md:px-8 lg:px-20'>
        <div className="pt-16 md:pt-20 lg:pt-24 mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-4 mb-2 md:mb-4 lg:mb-6 xl:mb-8">New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {
                    productData.map((item, index) => (
                        <ProductCard key={index} img={item.img} title={item.title} desc={item.desc} rating={item.rating} price={item.price} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default NewProducts