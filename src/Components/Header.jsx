import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/logo_black.svg"
import { RiArrowDropDownLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className=' max-w-[1536px]  lg:px-20 lg:py-5 md:p-10 p-4 flex items-center justify-between navabr bg-white'>

            <div className='flex relative gap-6 lg:w-auto w-full'>
                <div className='logo flex justify-between w-full'>
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <div onClick={() => setOpen(!open)}>
                        {open ? < AiOutlineClose className='text-4xl lg:hidden' /> : <GiHamburgerMenu className='text-4xl lg:hidden' />}
                    </div>

                </div>
                <ul className='hidden gap-9 items-center text-xl font-bold cursor-pointer lg:flex' >
                    <li className='relative' id='solution' >
                        <div className='flex items-center'>Soulution
                            <span><RiArrowDropDownLine /></span>
                        </div>
                        <ul className='innerLinks hidden absolute top-10 left-0 bg-slate-300 w-24 p-2 text-lg font-semibold' id="solution-links">
                            <li className='p-2'>Link 1</li>
                            <li className='p-2'>Link 2</li>
                            <li className='p-2'>Link 3</li>
                        </ul>
                    </li>
                    <li className='relative' id='features'>
                        <div className='flex items-center'>Features
                            <span><RiArrowDropDownLine /></span>
                        </div>
                        <ul className='innerLinks hidden absolute top-10 left-0 bg-slate-300 w-24 p-2 text-lg font-semibold' id='features-links'>
                            <li className='p-2'>Link 1</li>
                            <li className='p-2'>Link 2</li>
                            <li className='p-2'>Link 3</li>
                        </ul>
                    </li>
                    <li>Blog</li>
                    <li className='relative' id='about'>
                        <div className='flex items-center'>About
                            <span><RiArrowDropDownLine /></span>
                        </div>
                        <ul className='innerLinks hidden absolute top-10 left-0 bg-slate-300 w-24 p-2 text-lg font-semibold' id='about-links'>
                            <li className='p-2'>Link 1</li>
                            <li className='p-2'>Link 2</li>
                            <li className='p-2'>Link 3</li>
                        </ul>
                    </li>
                </ul>


                {/* small device */}
                {
                    open &&
                    <ul className='sm-navbar bg-white absolute top-20 h-[700px] w-full lg:hidden  flex flex-col gap-10 p-10 text-2xl font-bold' >
                        <li className='relative delay-100' id='sm-solution' >
                            <div className='flex items-center'>Soulution
                                <span><RiArrowDropDownLine /></span>
                            </div>
                            <ul className='sm-innerLinks hidden w-1/2 absolute top-10 left-0  p-2 text-lg font-semibold' id="sm-solution-links">
                                <li className='my-4 bg-slate-200 p-2'>Link 1</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 2</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 3</li>
                            </ul>
                        </li>
                        <li className='relative delay-100' id='sm-features'>
                            <div className='flex items-center'>Features
                                <span><RiArrowDropDownLine /></span>
                            </div>
                            <ul className='sm-innerLinks hidden w-1/2 absolute top-10 left-0  p-2 text-lg font-semibold' id='sm-features-links'>
                                <li className='my-4 bg-slate-200 p-2'>Link 1</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 2</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 3</li>
                            </ul>
                        </li>
                        <li>Blog</li>
                        <li className='relative' id='sm-about'>
                            <div className='flex items-center'>About
                                <span><RiArrowDropDownLine /></span>
                            </div>
                            <ul className='innerLinks hidden w-1/2 absolute top-10 left-0  p-2 text-lg font-semibold' id='sm-about-links'>
                                <li className='my-4 bg-slate-200 p-2'>Link 1</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 2</li>
                                <li className='my-4 bg-slate-200 p-2'>Link 3</li>
                            </ul>
                        </li>
                        <div className="flex flex-col gap-3  items-center">
                            <button className='w-full text-[#0076CE] px-6 py-2 font-bold rounded-lg border border-[#0076CE] text-xl '>Login</button>
                            <button className='w-full bg-[#0076CE] px-6 py-2 font-bold rounded-lg text-white text-xl '>Register</button>
                        </div>
                    </ul>
                }
            </div>
            <div className="lg:flex gap-3  items-center hidden">
                <button className='text-[#0076CE] px-6 py-2 font-bold rounded-lg border border-[#0076CE] text-xl '>Login</button>
                <button className='bg-[#0076CE] px-6 py-2 font-bold rounded-lg text-white text-xl '>Register</button>
            </div>


        </nav>
    )
}

export default Header