
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Services from './Page/Services'
import React from 'react'
import './App.css'
// import { useState,useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Readmore from './Page/Readmore'
// import Hero from './Components/Hero'




const App =() =>{
  const location = useLocation();

  // Define pages where the Navbar should be hidden
  const hideNavbarPages = ['/readmore'];

    

  return (

    <div>

         {/* Conditionally render Navbar */}
   {!hideNavbarPages.includes(location.pathname) && <Navbar />}


    
        {/* <ToastContainer/> */}
          <Navbar/>
          {/* <Hero/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/readmore' element={<Readmore/>}/>
            {/* <Route path='/birth_detail/:id' element={<Birth_details isAuth={isAuth} />} /> */}
          </Routes>
          {/* <Footer/> */}
       
      
    </div>
  )
}

export default App
