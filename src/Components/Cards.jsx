import React, { useEffect, useState } from 'react'
import CardBody from './CardBody'
import { Link } from 'react-router-dom';
import ShimmerCard from './Shimmer/ShimmerCard';
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';

const Cards = () => {

    const { data, loading } = useContext(MyContext)

    return (
        <div className='max-w-[1536px] md:p-20 p-10 joinPage '>
            <div className='' >
                <div className='flex flex-col md:gap-2 gap-6'>
                    <h1 className='text-center md:text-5xl text-4xl font-poppins font-bold'>Want to  <span className='gradient-text'>Join</span> Us?</h1>
                    <p className='text-center '>To remain with us, it is essential that you diligently follow the steps provided</p>
                </div>
                <div className=' z-20 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 mt-20'>
                    {loading ? (
                        <ShimmerCard />
                    ) : (
                        data?.map((item) => {
                            return (
                                <Link to={`/detail/${item.id}`} key={item.id}><CardBody item={item} /></Link>
                            )
                        })
                    )}

                </div>
                <p className='pt-10 '>
                    * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form
                </p>
            </div>

        </div>
    )
}

export default Cards