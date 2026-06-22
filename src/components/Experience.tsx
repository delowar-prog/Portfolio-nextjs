'use client'
import React from 'react'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";
import { profile } from "../../public/assets";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <section id="experience" className='max-w-contentContainer mx-auto px-8 md:px-28 my-10 md:py-32'>
            <SectionTitle title={'Job Experiences'} />
            <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-col md:flex-row gap-14">
                <div className="space-y-3">
                    <ul className="grid">

                        <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen text-xl"></AiFillThunderbolt><span className='text-xl text-textGreen'>Junior Fullstack Developer (1.5 Years)</span></li>
                        <li className="ms-6">Organization: Worltechsoft, Nurjahan Road, Mohammadpur, Dhaka. </li>

                        <li className="flex gap-2 items-center ms-6">Duration: August 20, 2023 to March, 2025</li>
                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 1 :</span> Smart Cane Procurement & Payment System for all Sugar Mills under Bangladesh Sugar & Food Industries Corporation (BSFIC). Technologies use: PHP, Laravel, Bootstrap, Livewire. Details are given bellow-</li>
                        <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> Live Link: https://cane.e-purjee.info.bd/login</li>


                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 2 :</span> Bangabondhu Sports Federation Students Scholarship Project. Technologies use: PHP, Laravel, Bootstrap, Livewire.</li>
                        <li className="flex gap-2 items-center ms-12"><AiFillThunderbolt className="text-textGreen"></AiFillThunderbolt> Live Link: https://sports-edu.online.info.bd/rules</li>
                    </ul>
                    <ul className="grid">
                        <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen text-xl"></AiFillThunderbolt><span className='text-xl text-textGreen'>Fullstack Developer (8 Months)</span></li>
                        <li className="ms-6">Organization: Aleena Tech, Chankhar Pool, Dhaka. </li>

                        <li className="flex gap-2 items-center ms-6">Duration: April, 2025 to December, 2025</li>
                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 1 :</span> University Management System. Technologies use: PHP, Laravel, React & Tailwind CSS. Details are given bellow-</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> API Create & Integration with front-end</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Student Registration & Profile Management</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Course Enrollment & Management</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Result, Marksheets Generation, Transcript Creation</li>
                    </ul>
                    <ul className="grid">
                        <li className="flex gap-2 items-center"><AiFillThunderbolt className="text-textGreen text-xl"></AiFillThunderbolt><span className='text-xl text-textGreen'>Fullstack Developer (6 Months)</span></li>
                        <li className="ms-6">Organization: Banglasoft, Farmgate, Dhaka. </li>

                        <li className="flex gap-2 items-center ms-6">Duration: January, 2026 to present</li>
                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 1 :</span> E-Commerce Project. Technologies use: PHP, Laravel, React & Tailwind CSS.</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Live Link: https://moshalbazar.com</li>
                        
                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 2 :</span> Car Rental Project. Technologies use: PHP, Laravel, API Integration & Bootstrap CSS.</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Live Link:https://clinic.bdstringart.com</li>
                        
                        <li className="ms-6 my-3"><span className='text-textGreen'>Project 3 :</span> Riksha Garage Project. Technologies use: PHP, Laravel & Bootstrap CSS.</li>
                        <li className="flex gap-2 ms-12"><AiFillThunderbolt className="text-textGreen mt-1"></AiFillThunderbolt> Live Link: https://riksha.ladiesfashionworldbd.com</li>
                        
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