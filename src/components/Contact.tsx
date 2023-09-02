'use client'
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <section id='contact' className='max-w-containerXs flex flex-col items-center justify-center mx-auto px-8 md:px-28 my-10 md:py-32'>
        <motion.p initial={{y:-3, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.3, delay:0.5}} className='text-textGreen text-lg my-2'>What's Next?</motion.p>
        <motion.h1 initial={{y:-3, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.4, delay:0.6}} className='text-2xl my-2 font-bold uppercase'>Get In Touch with me</motion.h1>
        <motion.p initial={{y:-3, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.7}} className='text-center mb-5'>I am currently looking for a new opportunity & my inbox is always open. If you have a question just say hello, I will try my best to get back to you</motion.p>
        <a href="mailto:delowarmilton@gmail.com" target="_blank">
          <motion.button initial={{opacity:0}} whileInView={{opacity:1}}
          viewport={{once:true}} transition={{duration:0.5, delay:0.8}}
          className="border border-textGreen hover:bg-hoverColor px-2 py-1 text-[14px] text-textGreen rounded duration-300 uppercase">Just say hello</motion.button>
      </a>
    </section>
  )
}

export default Contact