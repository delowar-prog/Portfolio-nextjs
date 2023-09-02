'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

const Banner = () => {
  const position = ['Frontend Developer', 'MERN Stack Developer', 'Fullstack Developer']
  return (
    <div id='home' className='max-w-contentContainer py-8 md:py-24 mx-auto px-8 md:px-28'>
      <div className='w-full md:w-[80%] my-5'>
        <motion.h4 initial={{y:-2, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.1, delay:0.1}} className='text-lg text-textGreen'>Hi, my name is </motion.h4>
        <motion.h1 initial={{y:-2, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2, delay:0.2}} className='text-3xl uppercase font-bold my-2'>Md. Delowar Hossain Milton</motion.h1>
        <motion.h2 initial={{y:-2, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.3, delay:0.3}} className='text-xl mb-5'>I am a <span className='text-green-600'><Typewriter words={position} loop /></span></motion.h2>
        <motion.p initial={{y:-2, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.4, delay:0.4}} className='text-textLight text-md mb-3'>A dedicated MERN Stack developer with a passion for creating dynamic and user friendly web application. I have completed few projects from design to deployment using MERN stack technologies with 1 years learning experience. Already I possess basic knowledge in this field. Now I try to get a job or internship to implement my coding skills.</motion.p>
        <motion.a initial={{y:-2, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:0.5}} href=''>
          <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn More
          <span className='w-full bg-textGreen absolute bottom-1 h-[1px] left-0 -translate-x-[110%] group-hover:translate-x-0 transition-all duration-300'></span>
          </span>
        </motion.a>
      </div>
      <a href="#project">
          <motion.button initial={{opacity:0}} animate={{opacity:1}}
          transition={{duration:0.5, delay:0.8}}
          className="border border-textGreen hover:bg-hoverColor px-2 py-1 text-[13px] rounded duration-300">Checkout My Projects</motion.button>
      </a>
    </div>
  )
}

export default Banner