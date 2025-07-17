import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block px-4 md:px-6 lg:px-8'>
		<div className="container py-3">
			<div className="flex justify-between items-center">
				<div className="hidden lg:flex gap-1">
					<div className="header_top_icon_wrapper text-facebook hover:text-white hover:bg-facebook">
						<FaFacebook />
					</div>
					<div className="header_top_icon_wrapper text-instagram-red hover:text-white hover:bg-gradient-to-br from-instagram-purple via-instagram-red to-instagram-orange">
						<FaInstagram />
					</div>
					<div className="header_top_icon_wrapper hover:text-white hover:bg-black">
						<FaSquareXTwitter  />
					</div>
					<div className="header_top_icon_wrapper text-linkedin hover:text-white hover:bg-linkedin">
						<FaLinkedin />
					</div>
				</div>

				<div className="text-gray-500 text-[12px]">
					<b className='text-red-800'>Free Shipping</b> on orders over $75
				</div>

				<div className="flex gap-4">
					<select 
						name="currency" 
						id="currency" 
						className='text-gray-500 text-[12px] w-[60px]'>
							<option value="USD $">USD $</option>
							<option value="EUR €">EUR €</option>
							<option value="INR ₹">INR ₹</option>
					</select>
					<select 
						name="language" 
						id="language"
						className='text-gray-500 text-[12px] w-[60px]'>
							<option value="English">English</option>
							<option value="French">French</option>
							<option value="Spanish">Spanish</option>
					</select>
				</div>
			</div>
		</div>
    </div>
  )
}

export default HeaderTop