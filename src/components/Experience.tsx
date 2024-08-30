'use client'
import React from 'react'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";
import { profile } from "../../public/assets";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section  id="experience" className='max-w-contentContainer mx-auto px-8 md:px-28 my-10 md:py-32'>
        <SectionTitle title={'Job Experiences'}/>
        <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5, delay:0.8}} className="flex flex-col md:flex-row gap-14">
            <div className="space-y-3">
              <ul className="grid">
                  <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen text-xl"></AiFillThunderbolt><span className='text-xl text-textGreen'>Junior Fullstack Developer (1 Year)</span></li>
                  <li className="ms-6">Organization: Worltechsoft, Nurjahan Road, Mohammadpur, Dhaka. </li>
                  
                  <li className="flex gap-2 items-center ms-6">Duration: August 20, 2023 to till now</li>
                  <li className="ms-6 mt-3">Project Details : I have worked with 2 Government Project </li>
                  <li className="ms-6 my-3"><span className='text-textGreen'>Project 1 :</span> Smart Cane Procurement & Payment System for all Sugar Mills under Bangladesh Sugar & Food Industries Corporation (BSFIC). Technologies use: PHP, Laravel, Bootstrap, Livewire. Details are given bellow-</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Several user dashboard for 9 Sugar Mills & there permissions</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Farmer Upload & Download Excel files functionality with proper validation</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Gazette Create, Purjee generate (Cane procurement slip), Purjee sent, Cane receive against purjee & Payment functionality</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Report Create, View & Download report in excel</li>

                  <li className="ms-6 my-3"><span className='text-textGreen'>Project 2 :</span> Bangabondhu Sports Federation Students Scholarship Project. Technologies use: PHP, Laravel, Bootstrap, Livewire. Details are given bellow-</li>
                  <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> Several user dashboard for Normal User & Admin with permissions</li>
                  <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> User/Student can fill up application form for scholarship & See the application status</li>
                  <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> DC can Approve the application & send to the BKKF</li>
                  <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> Finally BKKF send Approval letter to the applicant</li>
                  <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> Report Create, View & Download report in excel</li>
              </ul>
              <ul className="grid">
                  <li className="flex gap-2 items-center mt-5"><AiFillThunderbolt className="text-textGreen text-xl "></AiFillThunderbolt><span className='text-xl text-textGreen'>Officer IT, Training Dept. (4 Years)</span></li>
                  <li className="ms-6">Organization: Prime Islami Life Insurance Limited, Motijheel, Dhaka. </li>
                  
                  <li className="flex gap-2 items-center ms-6">Duration: July 2018 to October 2022</li>
                  <li className="ms-6 my-3"><span className='text-textGreen'>Working Details:</span></li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Make Powerpoint Presentation & Multimedia (Projector, Laptop, Sound system) Operating</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Banner Design, Photo Editing (Photoshop, Illustrator)</li>
                  <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Microsoft Office (word, excel) related work</li>
              </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Experience