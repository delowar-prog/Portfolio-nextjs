'use client'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";
import { profile } from "../../public/assets";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section  id="about" className='max-w-contentContainer mx-auto px-8 md:px-28 my-10 md:py-32'>
        <SectionTitle title={'About Me'}/>
        <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5, delay:0.8}} className="flex flex-col md:flex-row gap-14">
            <div className="md:w-2/3 space-y-3">
              <p>Hi, I am Delowar Hossain Milton. Home town Dinajpur, Bangladesh & lives in Dhaka, Bangladesh. I have completed BSc in CSE from World University of Bangladesh in 2018. Then I have worked in an Insurance company as Junior Officer (IT). In there I worked on Photoshop, Illustrator, MS Office & Hardware maintenance related work.</p>
              <p>But from my university live I am very interested to programming. Beside my job I have completed few corses on PHP & Laravel Development.</p>
              <p>In October 2022, I have resigned the job to change my job field & admitted to complete web development course with Jhankar Mahbub. In there I have completed more then 10 projects using my skills. I always try to explore new technologies & implement to my projects. In future, I want to be a fullstack Developer.</p>
              <p>At present I am trying to get an opportunity of work with a team in an organization.</p>
              <p>Here are a few technologies I have been working recently-</p>
              <ul className="w-[250px] md:w-[350px] grid grid-cols-2">
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>React js</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Javascript (ES6)</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Tailwind</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Bootstrap</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Express js</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>MongoDB</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Next js</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Redux</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Typescript</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Node js</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Mysql</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>PHP</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Laravel</li>
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt>Git & Github</li>
              </ul>
            </div>
            <div className="w-full h-full md:h-96 md:w-1/3 flex flex-col md:flex-row justify-between relative group cursor-pointer">
             <div className="relative md:absolute w-full md:h-96 rounded-lg">
              <div className="relative flex w-full h-full z-20  pl-6 md:pl-0">
                  <Image src={profile} className="w-2/3 md:w-full md:h-full object-cover rounded-lg" alt=""></Image>
                  <div className="hidden md:inline-block absolute w-full md:h-96 bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-500"></div>
              </div>
              <div className="hidden absolute top-6 left-6 md:inline-flex w-full h-96 border-2 border-textGreen rounded-lg group-hover:top-4 group-hover:left-4 duration-300">

              </div>
             </div>
            </div>
        </motion.div>
    </section>
  )
}

export default About