import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
                <Link className='navbar_link relative' href='#'>
                    HOME
                </Link>
                <Link className='navbar_link relative' href='#'>
                    MENU
                </Link>
                <Link className='navbar_link relative' href='#'>
                    ICE CREAMS
                </Link>
                <Link className='navbar_link relative' href='#'>
                    CAKES
                </Link>
                <Link className='navbar_link relative' href='#'>
                    DESSERTS
                </Link>
                <Link className='navbar_link relative' href='#'>
                    COMBOS
                </Link>
                <Link className='navbar_link relative' href='#'>
                    BLOG
                </Link>
                <Link className='navbar_link relative' href='#'>
                    SPECIAL OFFERS
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar