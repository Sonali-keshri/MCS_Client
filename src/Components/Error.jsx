import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  return (
    <div className='max-w-[1536px] h-screen flex  justify-center items-center bg-gray-400 text-black text-xl'>
      <div className='text-center font-poppins flex flex-col gap-5 font-bold '>
        <h1 className='text-6xl'>Oops🤪 </h1>
        <h3 className='text-3xl'>Something went wrong</h3>
        <h5>{error.status} {error.data}</h5>
      </div>
    </div>
  )
}

export default Error;