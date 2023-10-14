import React from 'react'
import featureImg from "../assets/featureImg.svg"

import hat from "../assets/hat.png"
import report from "../assets/report.png"
import search from "../assets/search.png"
import connect from "../assets/connect.png"

const Features = () => {
    return (
        <div className='max-w-[1536px] '>
            <div className='md:p-20 p-10 flex lg:flex-row flex-col gap-12'>
                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                    <div>
                        <h1 className='text-5xl font-poppins font-bold leading-snug'><span className='gradient-text'>All-in-One</span> platform that Makes Easier</h1>
                        <p className='text-2xl md:mt-0 mt-4'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                    </div>
                    <div className='flex flex-col md:gap-12 gap-6 mt-6'>
                        <div className='flex md:flex-row flex-col lg:gap-2 md:gap-12 gap-6'>
                            <div className='flex gap-6 text-lg md:w-60'>
                                <img src={search} alt="search" className='w-16 object-contain ' />
                                <p><span className='font-bold'>SEARCH</span> for vital company information </p>
                            </div>
                            <div className='flex gap-6 text-lg md:w-60 '>
                                <img src={connect} alt='connect' className='w-16 object-contain ' />
                                <p><span className='font-bold'>CONNECT</span>  with the resources to meet your business needs</p>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col lg:gap-2 md:gap-12 gap-6'>
                            <div className='flex gap-6 text-lg md:w-60 '>
                                <img src={report} alt='report' className='w-16  object-contain' />
                                <p><span className='font-bold'>RESEARCH</span> and generate reports that drive growth  </p>
                            </div>

                            <div className='flex gap-6 text-lg md:w-60 '>
                                <img src={hat} alt='hat' className='w-16 object-contain ' />
                                <p><span className='font-bold'>ACADEMY</span> to give you the skills for success in your career </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex justify-center items-center'>
                    <div>
                        <img src={featureImg} alt="featureImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features