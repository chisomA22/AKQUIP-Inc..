// import React from 'react'
// import { zoomInVariants, slideUpVariants } from '../Utils/Motion'
// import background from '../assets/background.jpg'
// import { motion } from 'framer-motion'
// import hero from '../assets/hero.png'


// const Hero = () => {
//   return (
//     <div id='hero'
//   className=" bg-red-600 w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex 
//   justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center relative" 
//   style={{ backgroundImage: `url(${background})` }}
// >
//   {/* Blurred Background Overlay */}
//   <div className="absolute inset-0 bg-black opacity-40 z-0 backdrop-blur-lg"></div>

//   <motion.div 
//     initial="hidden"
//     whileInView="visible"
//     variants={slideUpVariants}
//     className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4 relative z-10"
//   >


//     <motion.h1
//       variants={slideUpVariants}
//       className="text-white uppercase text-[40px] font-bold"
//     >
//       We will build your dream
//     </motion.h1>

//     <div className="w-[120px] h-[6px] bg-red-600"></div>

//     <p className="text-white text-[18px]">
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius necessitatibus tempora, 
//       repellendus dolorem nam magnam, harum id accusamus, veritatis omnis ratione officia ullam ipsam veniam eum odit ab in et!
//     </p>

//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       variants={zoomInVariants}
//       className="flex justify-center items-center gap-5"
//     >
//       <motion.button
//         variants={zoomInVariants}
//         className="bg-white hover:bg-red-600 hover:text-white px-10 py-3 rounded-lg text-red-600 font-bold"
//       >
//         READ MORE
//       </motion.button>

//       <motion.button
//         variants={zoomInVariants}
//         className="border-white hover:border-red-600 hover:text-red-600 border-2 
//         px-10 py-3 rounded-lg text-white font-bold"
//       >
//         Reach us
//       </motion.button>
//     </motion.div>
//   </motion.div>

//   <div className="w-[40%] flex flex-col justify-end items-end">
//     <motion.img
//       initial="hidden"
//       whileInView="visible"
//       variants={zoomInVariants}
//       src={hero} 
//       alt="hero image"
//       className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
//     />
//   </div>
// </div>















//     // <div 
//     //   id="hero" 
//     //   className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex 
//     //   justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center" 
//     //   style={{ backgroundImage: `url(${background})` }}
//     // >
//     //   <motion.div 
//     //     initial="hidden"
//     //     whileInView="visible"
//     //     variants={slideUpVariants}
//     //     className="lg:w-[60%] w-full flex flex-col justify-center items-start 
//     //     lg:gap-8 gap-4"
//     //   >
//     //     <motion.h1 
//     //       variants={slideUpVariants}
//     //       className="text-yellow-500 text-2xl"
//     //     >We are builders</motion.h1>
          
//     //     <motion.h1
//     //       variants={slideUpVariants}
//     //       className="text-white uppercase text-[40px] font-bold"
//     //     >
//     //       We will build your dream
//     //     </motion.h1>
//     //     <div className="w-[120px] h-[6px] bg-yellow-500"></div>
//     //     <p className="text-white text-[18px]">
//     //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius necessitatibus tempora, 
//     //       repellendus dolorem nam magnam, harum id accusamus, veritatis omnis ratione officia ullam ipsam veniam eum odit ab in et!
//     //     </p>
//     //     <motion.div
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       variants={zoomInVariants}
//     //       className="flex justify-center items-center gap-5"
//     //     >
//     //       <motion.button
//     //         variants={zoomInVariants}
//     //         className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg
//     //          text-black font-bold"
//     //       >
//     //         READ MORE
//     //       </motion.button>
//     //       <motion.button
//     //         variants={zoomInVariants}
//     //         className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 
//     //         px-10 py-3 rounded-lg text-white font-bold"
//     //       >
//     //         Reach us
//     //       </motion.button>
//     //     </motion.div>
//     //   </motion.div>
      
//     //   <div className="w-[40%] flex flex-col justify-end items-end">
//     //     <motion.img
//     //       initial="hidden"
//     //       whileInView="visible"
//     //       variants={zoomInVariants}
//     //       src={hero} 
//     //       alt="hero image"
//     //       className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
//     //     />
//     //   </div>
//     // </div>
//   );
// };

// export default Hero;
