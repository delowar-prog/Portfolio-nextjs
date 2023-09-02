'use client'
import { motion } from "framer-motion";
const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center">
        <motion.a initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2, delay:0.8}} href="mailto:delowarmilton@gmail.com">
            <p className="rotate-90 text-sm tracking-wide w-72 text-textGreen">delowarmilton@gmail.com</p>
        </motion.a>
    </div>
  )
}

export default RightSide