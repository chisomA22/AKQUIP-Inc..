import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from '../Utils/Motion';

function Home_innerthree() {
  return (

    <body className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <section className="bg-red-600 text-white text-center py-10 sm:py-20">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="mt-2 text-lg sm:text-xl lg:text-2xl"
        >
          Best Offer
        </motion.p>
      </section>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] lg:w-[70%] mx-auto py-8 sm:py-12 flex flex-col items-center gap-6 sm:gap-10"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service Items */}
          {[
            {
              title: 'Equipment Leasing',
              description:
                'We offer flexible leasing options for a wide range of equipment, ensuring that you have access to the tools you need without the burden of ownership.',
            },
            {
              title: 'Outsourcing',
              description:
                'Focus on what you do best while we handle the rest. Our outsourcing services cover a variety of functions, allowing you to streamline operations and increase productivity.',
            },
            {
              title: 'Stockists',
              description:
                'As trusted stockists, we provide reliable access to high-quality products and materials, ensuring your projects stay on track and within budget.',
            },
            {
              title: 'Alternative Energy',
              description:
                'We are passionate about sustainability and innovation, committed to developing alternative energy solutions that contribute to a greener future.',
            },
            {
              title: 'Corporate Business',
              description:
                'We assist large organizations in creating value and driving economic growth across industries, leveraging resources and expertise for success.',
            },
            {
              title: 'Creative Consultancy',
              description:
                'We develop creative strategies to integrate renewable energy solutions, helping companies lead in sustainability and marketing innovation.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={slideUpVariants}
              className="flex justify-center items-start"
            >
              <div className="rounded-lg bg-gradient-to-r from-red-600 to-red-500 w-full sm:w-[320px] p-6 drop-shadow-lg">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-center text-white font-semibold">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-center text-white mt-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </body>
  );
}
export default Home_innerthree;
