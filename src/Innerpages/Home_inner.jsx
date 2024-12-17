
import React from 'react'
import { zoomInVariants, slideUpVariants } from '../Utils/Motion'
// import background from '../assets/background.jpg'
import { motion } from 'framer-motion'
// import hero from '../assets/hero.png'
import {Link} from 'react-router-dom'
import plan from '../assets/plan.jpg'



const Home_inner =()=> {
  return (
    <div id='home'
  className=" w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex 
  justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center relative" 
  style={{ backgroundImage: `url(${plan})` }}
>
  {/* Blurred Background Overlay */}
  <div className="absolute inset-0 bg-black opacity-40 z-0 backdrop-blur-lg"></div>

  <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={slideUpVariants}
    className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4 relative z-10"
  >


    <motion.h1
      variants={slideUpVariants}
      className="text-white uppercase text-[40px] font-bold"
    >
      We will build your dream
    </motion.h1>

    <div className="w-[120px] h-[6px] bg-red-600"></div>

    <p className="text-white text-[18px]">
    we specialize in providing comprehensive solutions in equipment leasing, outsourcing,
     and stockist services. We offer flexible leasing options for a wide range of equipment, 
     ensuring that you have access to the tools you need without the burden of ownership.
    </p>

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className="flex justify-center items-center gap-5"
    >
      <Link to={'/about'}><motion.button
        variants={zoomInVariants}
        className="bg-white hover:bg-red-600 hover:text-white px-10 py-3 rounded-lg text-red-600 font-bold"
      >
        READ MORE
      </motion.button></Link>

      <Link to={'/contact'}><motion.button
        variants={zoomInVariants}
        className="border-white hover:border-red-600 hover:text-red-600 border-2 
        px-10 py-3 rounded-lg text-white font-bold"
      >
        Reach us
      </motion.button></Link>
    </motion.div>
  </motion.div>

  {/* <div className="w-[40%] flex flex-col justify-end items-end">
    <motion.img
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      src={hero} 
      alt="hero image"
      className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
    />
  </div> */}
</div>


    // <div className='w-full h-[100%] pt-[35vh] bg-[white] flex flex-col justify-between'>
    //     <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

    //         <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 '>
    //             <h1 className='pt-3 text-4xl md:text-5xl font-bold text-[#fa2929]'>Alternative energy,</h1>
    //             <h1 className='text-4xl font-bold md:text-4xl'>provion $ services</h1>
    //             <p className='pt-3 text-2xl'>we specialize in providing comprehensive solutions in equipment leasing, outsourcing, and stockist services.</p>
    //          <button className='py-3 px-2 sm:w-[40%] my-4 bg-[black] text-white rounded-xl hover:-translate-y-1 transition'>Read more</button>
    //         </div>

    //         {/* <div>
    //             <img src={world} alt="gif-image" className='w-[100%]' />
    //         </div> */}

        // </div>
      
    // </div>
  )
}

export default Home_inner
