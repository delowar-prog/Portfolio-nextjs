'use client'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import {motion} from 'framer-motion'
const LeftSide = () => {
  return (
    <div className='flex flex-col w-full h-full justify-end items-center'>
       <div className='flex flex-col justify-center items-center gap-4'>
            <a href='https://github.com/delowar-prog' target='_blank'>
                <motion.span initial={{y:-10, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.1, delay:0.2}} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                    <FaGithub className="text-xl"></FaGithub>
                </motion.span>
            </a>
            <a href='https://www.facebook.com/delowar.milton' target='_blank'>
            <motion.span initial={{y:-10, opacity:0}} animate={{y:0,opacity:4}} transition={{duration:0.1, delay:0.1}} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                    <FaFacebook className="text-xl"></FaFacebook>
                </motion.span>
            </a>
            <a href='https://www.linkedin.com/in/delowarmilton/' target='_blank'>
            <motion.span initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.1, delay:0.6}} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                    <FaLinkedin className="text-xl"></FaLinkedin>
                </motion.span>
            </a>
       </div>
    </div>
  )
}

export default LeftSide