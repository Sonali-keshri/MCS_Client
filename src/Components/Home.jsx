import React, { useState } from 'react'
import frame from "../assets/frame.svg"
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { api } from '../utils/Api'


const Home = () => {

  const [searchTerm, setSearchTerm] = useState("")

  // All Charted Accountants data stored in this variables 
  const { rawData, setData } = useContext(MyContext)

  // Handling input change
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  // Fetching data to perform search functionality 
  const fetchSearchedData = async (searchStr) => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const filteredData = data.filter((ca) =>
        ca.name.toLowerCase().includes(searchStr.toLowerCase())
      )


      if (filteredData.length != 0) {
        setData(filteredData)
      } else {
        setData(rawData)
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Adding a function to handle the search button click
  const handleSearchButtonClick = () => {
    fetchSearchedData(searchTerm);
  };



  return (
    <div className='max-w-[1536px] homePage'>

      <div className='flex flex-col lg:flex-row items-center justify-between  md:p-20 p-6 gap-10 '>
        <div className=' lg:w-1/2 w-full flex flex-col lg:gap-6 gap-10'>
          <h1 className='lg:text-5xl md:text-7xl text-4xl text-center lg:text-left font-poppins font-bold leading-tight'>Find <span className='gradient-text'>Partners</span> (CAs) available online</h1>
          <p className='lg:text-lg text-xl lg:text-left text-center'>CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
          <div className='flex lg:w-11/12 lg:mx-0 md:w-3/4 w-full mx-auto h-12 border border-gray-400 rounded-lg '>
            <input placeholder='Search' name="search" onChange={handleChange} className='rounded-lg w-full p-2 focus:outline-none' />
            <button className='bg-blue-700 px-6 rounded-lg text-white text-xl ' onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
        <div className='lg:w-1/2 w-full  border-red-600'>
          <img src={frame} alt='frame' />
        </div>
      </div>
    </div>
  )
}

export default Home