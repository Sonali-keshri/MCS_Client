import React from 'react'

const ProposalCardShimmer = () => {
    return (
        <div className='w-full'>
            <div className='w-full p-6'>
                <div className='animate-pulse w-full h-1/4 bg-gray-300 p-8 flex gap-5 flex-col'>
                    <h1 className='animate-pulse w-1/2 h-8 bg-slate-400'></h1>
                    <p className='animate-pulse w-1/4 h-8 bg-slate-400'></p>
                </div>
                <div className='w-full h-28 py-2' >
                    <div className='animate-pulse h-full w-3/4 bg-gray-300'></div>
                </div>
            </div>
            <div className='w-full p-6 '>
                <div className='animate-pulse w-full h-1/4 bg-gray-300 p-8 flex gap-5 flex-col'>
                    <h1 className='animate-pulse w-1/2 h-8 bg-slate-400'></h1>
                    <p className='animate-pulse w-1/4 h-8 bg-slate-400'></p>
                </div>
                <div className='w-full h-28 py-2' >
                    <div className='animate-pulse h-full w-3/4 bg-gray-300'></div>
                </div>
            </div>
        </div>
    )
}

export default ProposalCardShimmer