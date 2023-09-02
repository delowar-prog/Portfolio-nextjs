'use client'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { pro1, pro2, pro3, pro4 } from "../../public/assets"
import { TfiWorld } from "react-icons/tfi";
import { BsCodeSlash } from "react-icons/bs";
import './projects.css'
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section  id="project" className='max-w-contentContainer mx-auto px-8 md:px-28 my-10 md:py-32'>
        <SectionTitle title={'My Projects'}/>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 py-5 md:gap-10">
                <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.1, delay:0.2}} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Design Dreamers Schools</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro1} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        Developed a dynamic dashboard allowing users to register as students, select and enroll in classes with Stripe payment integration.Empowered admins to manage users, roles, and class approvals, while instructors could add and update classes.
                        </p>
                        <div className="technologies p-2 bg-[#1E293B] rounded-e-3xl">HTML, Tailwind CSS, React, React Router, React query, stripe, React Hook Form, jsonwebtoken, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://fashion-design-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl"/></a>
                        <a href="https://github.com/delowar-prog/design-dreamers-school-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl"/></a>
                    </div>
                </motion.div>
                <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.3, delay:0.5}} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Sports Village</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro2} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        Implemented user registration and login functionality, allowing registered users to add and manage toy details. Implemented dynamic fetching, query routing, sorting, and indexing of toy information on the backend using Express.js and MongoDB technologies.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">Tailwind CSS, React, React Router, React Hook Form, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="#" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl"/></a>
                        <a href="#" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl"/></a>
                    </div>
                </motion.div>
                <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.4, delay:0.6}} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Dhaka Catering Service</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro3} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        Incorporated Firebase authentication for registration and login, supporting email/password and social login options.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">HTML, Tailwind CSS, React, React Router, Firebase</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://dhaka-catering.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><TfiWorld className="text-2xl hover:text-textGreen"/></a>
                        <a href="https://github.com/delowar-prog/Dhaka-catering-server" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen"/></a>
                    </div>
                </motion.div>
                <motion.div initial={{y:-2,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5, delay:0.7}} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Work Opportunity</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro4} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        Implemented Good UI design, on homepage applied job info card from local api, each job details can generated job details, applied job store on local storage and can fetch it from api.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">HTML, Tailwind CSS, React, React Router, Hero icon, Google font, Chart.js</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://fantastic-mochi-0f6fca.netlify.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl"/></a>
                        <a href="https://github.com/delowar-prog/work-opportunity" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl"/></a>
                    </div>
                </motion.div>
        </div>
    </section>
  )
}

export default Projects