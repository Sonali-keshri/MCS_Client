import React,{useState} from 'react'
import Home from './Home'
import Cards from './Cards'
import Features from './Features'
import { MyContext } from "../context/MyContext"
import {api } from "../utils/Api"
import useFetch from "../utils/useFetch"

const HeroPage = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const {rawData, data,setData, loading} = useFetch(api)
  console.log("data   :::" ,data)

  return (
    <div className='max-w-[1536px] '>
      <MyContext.Provider value={{ searchTerm, setSearchTerm ,rawData,data,setData,loading}}>
        <Home />
        <Cards />
        <Features />
      </MyContext.Provider>
    </div>
  )
}

export default HeroPage