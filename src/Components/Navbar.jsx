import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { IoClose, IoLinkOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
// import logo from '../assets/logo.png'


const Navbar = () =>{
    const [nav, setNav] = useState(false)

  const handleClick = () =>{
    setNav(!nav)
  };

  const handleClose = () =>{
    setNav(!nav)
  }

  return (
    <div className='fixed top-0 left-0 w-full bg-red-600 z-50 h-[80px] drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
     <div  className='flex items-center '>
        <Link to= {'/'}>
        {/* <img src={logo} className='w-[100%] mr-6 '   alt="img logo" /> */}
        <div className='flex text-white text-3xl font-bold ml-20 w-[100%]'>
           <h1 className='italic'>AKQUIP</h1>
           <h1>INC..</h1>
        </div>
        </Link>

        <ul className='hidden md:flex gap-7  font-bold  px-40'>
          <Link to={'/'}> <button className='border-none bg-[white] text-[red] hover:-translate-y-1 transition rounded-xl px-5 py-1 mr-4 hover:bg-[white]'>Home</button></Link> 
          <Link to={'/about'}> <button className='border-none bg-[white] text-[red] hover:-translate-y-1 transition rounded-xl px-5 py-1 mr-4 hover:bg-[white]'>About</button></Link>
          <Link to={'/services'}> <button className='border-none bg-[white] text-[red] hover:-translate-y-1 transition rounded-xl px-5 py-1 mr-4 hover:bg-[white]'>Services</button></Link>  
          <Link to={'/contact'}> <button className='border-none bg-[white] text-[red] hover:-translate-y-1 transition rounded-xl px-5 py-1 mr-4 hover:bg-[white]'>Contact</button></Link>
          </ul>
          
          
     </div>
     <div className='md:hidden mr-4 text-white' onClick={handleClick}>
          {!nav ? <IoMenuSharp size={25}/> : <IoClose size={25} />}
     </div>
  </div>
     <ul className={!nav ? 'hidden' : 'absolute bg-[#F9F9F9] w-[100%] px-8'} onClick={handleClose}>
      <Link to={'/'}><li className='border-b-2 py-3 border-black-300 w-full text-red-600 '>Home</li></Link>
      <Link to={'/about'}><li className='border-b-2 py-3 border-black-300 w-full text-red-600'>About</li></Link>
      <Link to={'/services'}><li className='border-b-2 py-3 border-black-300 w-full text-red-600'>Services</li></Link> 
      <Link to={'/contact'}><li className='border-b-2 py-3 border-black-300 w-full text-red-600'>Contact </li></Link>
      
    </ul>
    </div>
  )
}

export default Navbar



