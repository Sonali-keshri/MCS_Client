import React from 'react'

const ShimmerCard = () => {
    return (
        <div className='animate-pulse shadow-xl p-6 rounded-xl relative mb-8 bg-gray-200 h-60 z-20 '>
            <div className='animate-pulse absolute w-12 h-10 bg-gradient-to-r from-[#0076CE] to-[#9400D3]  -top-3 -left-3 rounded-xl flex justify-center items-center' >
                <h1 className='w-1/2 h-8'></h1>
            </div>
            <div className='text-center py-2 '>
                <h1 className='animate-pulse w-4/5 h-8 bg-gray-100'></h1>
            </div>
            <div className='flex gap-8 rounded-xl py-2 '>
                <h1 className='animate-pulse w-3/5 h-8 bg-gray-100'></h1>
            </div>
            <div className='flex gap-8 rounded-xl py-2 '>
                <h1 className='animate-pulse w-2/5 h-8 bg-gray-100'></h1>
            </div>
        </div>

    )
}

export default ShimmerCard