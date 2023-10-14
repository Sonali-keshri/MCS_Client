import React from 'react'
import logo from "../assets/logo.svg"
import linkedin from "../assets/linkedin_logo.svg"
import whatsapp from "../assets/whatsapp.svg"
import facebook from "../assets/facebook.svg"
import insta from "../assets/insta.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='max-w-[1536px] h-2/4'>
      <div className=' text-white bg-blue-700 lg:px-20 p-6 py-10  '>
        <div>
          <div className=' grid md:grid-cols-7 gird-cols-1 border-b-2 border-white lg:gap-10 gap-4 footer pb-6'>
            <div className='col-span-2 '>
              <img src={logo} alt="logo" />
              <p className='lg:w-60'>India's first platform dedicated to simplifying partner search</p>
            </div>
            <div>
              <p className="font-bold">COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div>
              <p className="font-bold">SOLUTIONS</p>
              <p>Search</p>
              <p>Connect</p>
              <p>Research</p>
              <p>Academy</p>
            </div>
            <div>
              <p className="font-bold">RESOURCES</p>
              <p>Blogs</p>
              <p>Forms</p>
            </div>
            <div>
              <p className="font-bold">SUPPORT</p>
              <p>Help</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p className="font-bold">LEGAL</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Accessibilty</p>
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-between gap-4 mt-8'>
            <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className='flex lg:justify-between gap-4'>
              <Link to="https://www.facebook.com/" target="_blank">  <img src={facebook} alt="facebook" /> </Link>
              <Link to="https://www.instagram.com/mohitetax_/" target="_blank">  <img src={insta} alt="Instagram" /> </Link>
              <Link to="https://www.linkedin.com/" target="_blank">  <img src={linkedin} alt="linkedin" /> </Link>
              <Link to="https://web.whatsapp.com/" target="_blank">  <img src={whatsapp} alt="Social" /> </Link>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-black p-4 text-center h-16 text-white flex justify-center items-center'>
        <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer