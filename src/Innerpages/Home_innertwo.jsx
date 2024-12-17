import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from '../Utils/Motion';
import { Link } from 'react-router-dom';

const Home_innertwo = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control "Read More" toggle

  // Function to handle toggle between "Read More" and "Show Less"
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='lg:w-[100%] m-auto py-[60px] bg-white flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
          variants={slideUpVariants} 
          className='text-red-600 text-2xl'
        >
          Welcome To
        </motion.h1>

        <motion.h2
          variants={slideUpVariants}
          className='text-red-600 uppercase text-[40px] font-bold'
        >
          OUR WEBSITE
        </motion.h2>

        <div className='w-[120px] h-[6px] bg-red-600'></div>

        <p className='text-3xl italic text-red-400 mt-[60px]'>
          We specialize in providing comprehensive solutions in equipment leasing, outsourcing, and stockist services. Our commitment to excellence drives us to support 
          businesses across various industries with tailored strategies that enhance operational efficiency and drive growth.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-red-400 text-lg text-justify'>
          Why Choose Us?
          As global energy demands rise, the need for sustainable and alternative energy sources has never been greater.
          Our commitment to sustainability includes providing cutting-edge alternative energy solutions designed to reduce carbon footprints,
          increase efficiency, and foster a cleaner, greener future.

          {/* Conditionally render more content */}
          {isExpanded && (
            <span>
              In addition to providing energy solutions, we work with a wide range of industries, offering tailored solutions to optimize their energy usage and reduce operational costs. 
              Our team of experts works tirelessly to stay at the forefront of sustainable energy innovation, ensuring our clients benefit from the latest technologies and solutions available.
              
              <br /><br />
              
              Our equipment leasing services are designed to ensure that businesses can maintain flexibility in their operations while avoiding the high costs of purchasing expensive machinery. 
              We provide a wide variety of equipment for lease, and each package is designed to meet the specific needs of the client, whether it be short-term or long-term use.
              
              <br /><br />
              
              For outsourcing, we focus on optimizing your internal operations. By allowing us to handle certain business functions, you can focus on your core competencies, ensuring that your company remains competitive in the market. We offer outsourced services in various sectors, including administrative support, customer service, and IT solutions.
              
              <br /><br />
              
              We are also proud to be one of the leading stockists in the industry, ensuring that our clients always have access to high-quality materials and products when they need them. Our reliable delivery system guarantees that you receive the right products at the right time, helping you maintain the pace of your projects without delay.
              
              <br /><br />
              
              At the heart of our company is a dedication to providing innovative solutions that meet the evolving needs of businesses worldwide. Whether you’re looking for sustainable energy solutions, reliable equipment, or cost-effective outsourcing options, we are committed to driving your business forward.
            </span>
          )}
        </p>

        <motion.button
          onClick={toggleReadMore}
          variants={zoomInVariants}
          className='bg-red-600 hover:bg-white hover:text-red-600 px-10 py-3 rounded-lg font-bold text-white border-2 border-red-600 '
        >
          {/* Change button text based on expanded state */}
          {isExpanded ? 'SHOW LESS' : 'READ MORE'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home_innertwo;
