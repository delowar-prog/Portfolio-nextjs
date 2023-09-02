'use client'
interface props{
title:string
}
import { motion } from "framer-motion";
const SectionTitle = ({title}:props) => {
  return (
    
        <motion.h1 initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.2, delay:0.3}} className="font-titleFont text-textGreen text-2xl flex items-center font-bold mb-5">
            {title}
            <span className="hidden md:inline-flex md:w-48 h-[1px] bg-gray-700 ml-3"></span>
        </motion.h1>
    
  )
}

export default SectionTitle