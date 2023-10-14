import React from 'react'
import { useParams } from 'react-router-dom';

const CardBody = ({item}) => {

    const {id,name,image,intro,rating,about,price,taskComplexity,testimonial} = item
    const { text,author} = testimonial

  return (
    <div className='shadow-xl p-6 rounded-xl relative mb-8 bg-white z-20 '>
        <div className='absolute w-12 h-10 bg-gradient-to-r from-[#0076CE] to-[#9400D3]  -top-3 -left-3 rounded-xl flex justify-center items-center' >
            <h1 className='font-bold text-2xl text-white'>{id}<sup>{id == 1 ? "st" : ((id == 2 ? "nd": (id == 3 ? "rd":"th") ))}</sup></h1>
        </div>
        <div className='text-center mb-5'>
            <h1 className='text-xl font-bold'>{name} </h1>
            <p className='text-base '> {intro} </p>
        </div>
        <div className='flex gap-8 bg-[#F4F4F4] rounded-xl py-4 '>
            <div className='w-2/6 pl-4'>
                <h2 className='text-blue-600  font-semibold '>Dues date</h2>
                <p className='text-sm '>Within 180 days</p>
            </div>
            <div className='w-2/3 ' >
                <h2 className='text-red-600 font-semibold '>Penalty fees</h2>
                <p className='text-sm'>₹50,000 for the company</p>
                <p className='text-sm'>₹1,000 /day for directors</p>
            </div>
        </div>

    </div>
  )
}

export default CardBody