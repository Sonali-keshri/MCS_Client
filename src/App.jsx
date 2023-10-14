import { useState } from 'react'
import './App.css'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import HeroPage from './Components/HeroPage'
import Footer from './Components/Footer'
import DetailsPage from './Components/Details/DetailsPage'
import Error from './Components/Error'
function App() {
 

  return (
    <div className='max-w-[1536px] mx-auto'>
      <Header/>
      {/* <HeroPage/>
      <DetailsPage/> */}
      <Outlet/>
      <Footer/>
    </div>
    
  )
}

export const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children: [
     {
      path: "/",
      element:<HeroPage/>
     },
     {
      path:"/detail/:id",
      element: <DetailsPage/>
     }
    ],
    errorElement: <Error/>
  },
])
export default App
