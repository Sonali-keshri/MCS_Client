import React, { useEffect, useState } from 'react'
import { SlCalender } from "react-icons/sl"
import { AiFillStar } from "react-icons/ai"
import ProposalCardShimmer from '../Shimmer/ProposalCardShimmer'


const ProposalCard = ({ data, loading }) => {

    if (loading) {
        return <ProposalCardShimmer/>
    }
    const { name, intro, rating, reviewCount, price, taskComplexity, testimonial, deliveryTime } = data
    const { text, author } = testimonial


    return (

        <div className='md:w-2/5 w-full' >
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p className='text-xl py-4'>{intro}</p>
            <p className='flex items-center gap-2'><AiFillStar className='text-blue-700' /> {rating} ({reviewCount})</p>
            <div className='p-4 shadow-lg my-6'>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-600'>{taskComplexity}</p>
                    <p className='font-bold' >{price}</p>
                </div>
                <p className='flex gap-3 items-center pt-6'><SlCalender className='text-blue-700' /> {deliveryTime}</p>
                <div className='flex gap-6 mt-6'>
                    <button className='bg-[#0076CE] text-white w-1/2 rounded-lg'>Request Proposal</button>
                    <button className='border border-[#0076CE] text-[#0076CE] w-1/2 rounded-lg'>Chat with me</button>
                </div>
            </div>
            <div className='shadow-lg p-5 '>
                <h1 className='text-3xl font-bold pb-6'>What people say?</h1>
                <p>{text} - {author}</p>
            </div>
        </div>
    )
}

export default ProposalCard