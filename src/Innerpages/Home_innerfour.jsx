// import React from 'react'
// import { MdOutlineMail } from "react-icons/md";
// import { IoIosPhonePortrait } from "react-icons/io";
// import { MdLocationPin } from "react-icons/md";
// import { motion } from 'framer-motion'
// import { zoomInVariants, slideUpVariants } from '../Utils/Motion'


// const Home_innerfour=()=> {
//   return (
//     <div id='contact' className='w-full bg-g'>
//       <motion.div
//       initial="hidden"
//       whileInView="visible"
//       variants={slideUpVariants}
//       className='lg:w-[60%] w-[50%] m-auto py-[60px] flex flex-col justify-between
//       items-center gap-[10px]'
//       >
//         <motion.h1 variants={slideUpVariants} className='text-yellow-500
//         text-2xl'>SPECIAL OFFER</motion.h1>
//         <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[30px]
//         font-bold text-center'>OUR SERVICE</motion.h1>
//         <motion.div
//         variants={slideUpVariants}
//         className='w-[120px] h-[6px] bg-yellow-500'
//         ></motion.div>
//         {/* make div for services mapping from export js file */}
//         <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={zoomInVariants}
//         className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
//         items-start gap-[20px] mt-[30px]'
//         >

// <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5 p-0'
//         >
//           <div className='rounded-lg bg-[white]  w-[320px] justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//             <h2 className='text-xl py-3 text-center'>Market services</h2>
//             <p className='text-center text-[#6c757d]'>Lorem ipsum dolor, sit amet consectetur  perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>

//         <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5 p-0'
//         >
//           <div className='rounded-lg bg-[white]  w-[320px] justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//             <h2 className='text-xl py-3 text-center'>Web evelopment</h2>
//             <p className='text-center text-[#6c757d]'>Lorem ipsum dolor, sit amet consectetur  perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>

//         <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5 p-0'
//         >
//           <div className='rounded-lg bg-[white]  w-[320px] justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//             <h2 className='text-xl py-3 text-center'>Call Services</h2>
//             <p className='text-center text-[#6c757d]'>Lorem ipsum dolor, sit amet consectetur  perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>


//         </motion.div>

//         <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={zoomInVariants}
//         className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
//         items-start gap-[20px] mt-[30px]'
//         >
//                   <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5 p-0'
//         >
//           <div className='rounded-lg bg-[white]  w-[320px] justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//             <h2 className='text-xl py-3 text-center'>Social media marketing</h2>
//             <p className='text-center text-[#6c757d]'>Lorem ipsum dolor, sit amet consectetur  perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>

//         <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5 p-0'
//         >
//           <div className='rounded-lg bg-[white]  w-[320px] justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//             <h2 className='text-xl py-3 text-center'>Corperate Buiness</h2>
//             <p className='text-center text-[#6c757d]'>Lorem ipsum dolor, sit amet consectetur  perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>

//         <motion.div
//         variants={zoomInVariants}
//         className='flex justify-center items-start gap-5  p-0'
//         >
//           <div className='rounded-lg bg-[white] w-[320px] hover:bg-red-500 justify-center p-[5px] h-[220px] py-10  drop-shadow-lg'>
//            <h2 className='text-xl py-3 text-center '>Creative Conultancy</h2>

//             <p className='text-center text-[#6c757d]'>Lorem ips Rerum ratione nihil, perspiciatis enim eius deleniti dignissimos sed veritatis rem tempora doloremque debitis suscipit molestias volu</p>
//           </div>
          


//         </motion.div>
          
//         </motion.div>
//       </motion.div>
//       </div>

























       

//     // <div className='w-full h-[100%] pt-[11vh] bg-[#f9f9f9]  justify-between'>
//     //  <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1240px] m-auto relative'>
//     //    <div className='rounded-lg bg-[white]  px-10 py-16 w-[800px] h-[450px] pt-[8vh]  drop-shadow-lg'>
//     //          <h4 className='text-xl font-bold py-4 align-middle'>GET IN TOUCH</h4>

//     //         <div className='flex py-4'> 
//     //           <div className='text-red-500 w-7 mr-4 flex'>
//     //           <MdOutlineMail size={25}/>
//     //           </div>
//     //           <div className='font-bold '>
//     //             <p>akanichiom10@nail.com</p>
//     //           </div>
//     //        </div>

//     //         <div className='flex py-4'>
//     //           <div className='text-red-500 w-7 mr-4'>
//     //           <IoIosPhonePortrait size={25}/>
//     //           </div>
//     //           <div className='font-bold'>
//     //             <p>08033099170</p>
//     //           </div>
//     //         </div>

//     //         <div className='flex py-4'>
//     //           <div className='text-red-500 w-7 mr-4'>
//     //             <MdLocationPin size={25}/>
//     //           </div>
//     //           <div className='font-bold'>
//     //             <p>13 c and c estate,Rumuodara, <br />Port Harcourt Nigeria.</p>
//     //           </div>

//     //         </div>
          
//     //           <button className='py-3 px-2 sm:w-[30%] my-4 bg-black text-white rounded-xl'>Learn more </button>
            
//     //         <div className='rounded-lg bg-[white]  px-10 py-16 w-[300px] h-[300px]  m-auto  border drop-shadow-2xl'>
//     //              <p>hi</p>
        
//     //         </div>  
//     //     </div>
           

//     //    </div>
//     // </div>
//   )
// }

// export default Home_innerfour
