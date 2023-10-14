import React from 'react'
import DetailsPageIMG from "../../assets/detailPageImg.svg"
import { AiFillStar } from "react-icons/ai"


const RecommendedCard = () => {
    return (
        <div className='md:p-20 p-10'>
            <h1 className='text-3xl font-bold'>Recommended for you</h1>

            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10'>

            {/* Recommended Card */}
            
                <div className='shadow-lg my-6 rounded-xl'>
                    <div className='pb-2'>
                        <img src={DetailsPageIMG} alt="detail" />
                    </div>
                    <div className='p-5'>
                        <div className='flex justify-between items-center'>
                            <p className=' font-bold'>Michael Jackson</p>
                            <p className='font-bold' >₹4,370</p>
                        </div>
                        <p className='pt-2'>I will do business evaluation and corporate services</p>
                        <p className='flex items-center gap-2'><AiFillStar className='text-blue-700'/> 4.8 (89)</p>
                        <button className='bg-[#0076CE] text-white p-2 w-full rounded-lg mt-6'>View services</button>
                    </div>
                </div>

                <div className='shadow-lg my-6 rounded-xl'>
                    <div className='pb-2'>
                        <img src={DetailsPageIMG} alt="detail" />
                    </div>
                    <div className='p-5'>
                        <div className='flex justify-between items-center'>
                            <p className=' font-bold'>Michael Jackson</p>
                            <p className='font-bold' >₹4,370</p>
                        </div>
                        <p className='pt-2'>I will do business evaluation and corporate services</p>
                        <p className='flex items-center gap-2'><AiFillStar className='text-blue-700'/> 4.8 (89)</p>
                        <button className='bg-[#0076CE] text-white p-2 w-full rounded-lg mt-6'>View services</button>
                    </div>
                </div>


                <div className='shadow-lg my-6 rounded-xl'>
                    <div className='pb-2'>
                        <img src={DetailsPageIMG} alt="detail" />
                    </div>
                    <div className='p-5'>
                        <div className='flex justify-between items-center'>
                            <p className=' font-bold'>Michael Jackson</p>
                            <p className='font-bold' >₹4,370</p>
                        </div>
                        <p className='pt-2'>I will do business evaluation and corporate services</p>
                        <p className='flex items-center gap-2'><AiFillStar className='text-blue-700'/> 4.8 (89)</p>
                        <button className='bg-[#0076CE] text-white p-2 w-full rounded-lg mt-6'>View services</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecommendedCard