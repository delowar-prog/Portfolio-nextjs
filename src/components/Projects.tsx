'use client'
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8} from "../../public/assets"
import { TfiWorld } from "react-icons/tfi";
import { BsCodeSlash } from "react-icons/bs";
import './projects.css'
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
const Projects = () => {
    // const [projects, setProjects] = useState([])
    // useEffect(() => {
    //     fetch('assets/data/projects.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data > 0) {
    //                 setProjects(data)
    //             }
    //         })
    // }, [])
    return (
        <section id="project" className='max-w-contentContainer mx-auto px-8 md:px-28 my-10 md:py-32'>
            <SectionTitle title={'My Projects'} />
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 py-5 md:gap-10">
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.1, delay: 0.2 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Design Dreamers Schools</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro1} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                            Developed a dynamic dashboard allowing users to register as students, select and enroll in classes with Stripe payment integration.Empowered admins to manage users, roles, and class approvals, while instructors could add and update classes.
                        </p>
                        <div className="technologies p-2 bg-[#1E293B] rounded-e-3xl">HTML, Tailwind CSS, React, React Router, React query, stripe, React Hook Form, jsonwebtoken, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://fashion-design-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl" /></a>
                        <a href="https://github.com/delowar-prog/design-dreamers-school-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Kalabhuna Reastuarent</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro2} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                            Implemented user registration and login functionality, allowing registered users to add and manage toy details. Implemented dynamic fetching, query routing, sorting, and indexing of toy information on the backend using Express.js and MongoDB technologies.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">Tailwind CSS, React, React Router, React Hook Form, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://kalabhuna-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl" /></a>
                        <a href="https://github.com/delowar-prog/kalabhuna-restaurant-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Online Store BD</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro5} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        It is a PHP & laravel based E-commerce project. An user can add product to cart, order the product after login, see the previous purses history. Admin can add and manage product, add product category, product brand etc
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">HTML, CSS, PHP, Laravel & Mysql</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://myshop.dhmilton.xyz/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><TfiWorld className="text-2xl hover:text-textGreen" /></a>
                        <a href="https://github.com/delowar-prog/my_shop" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Online Exam System</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro6} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        It is a raw PHP based Exam system project. An user can register & login & then can give exam. Admin can add question, edit question & manage.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">HTML, CSS, PHP & Mysql</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://github.com/delowar-prog/Exam-System-Using-PHP-Ajax" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Care-Link-Hospital</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro8} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                        Implemented user registration and login functionality using Next-Auth. An user can visit the Doctors profile & can get appointment using next js.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">Next js, Next-Auth, Tailwind & MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://care-link.netlify.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><TfiWorld className="text-2xl hover:text-textGreen" /></a>
                        <a href="https://github.com/delowar-prog/Care-link-central-hospital" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">News Dragon Website</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro7} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                            Implemented user registration and login functionality. An user can see the new by category, mainly focus on api, how to create an api using express js.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">Tailwind CSS, React, React Router, React Hook Form, Firebase, Express.js</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://dragon-news-dfd74.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><TfiWorld className="text-2xl hover:text-textGreen" /></a>
                        <a href="https://github.com/delowar-prog/sportsvillage-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Sports Village</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro3} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                            Implemented user registration and login functionality, allowing registered users to add and manage toy details. Implemented dynamic fetching, query routing, sorting, and indexing of toy information on the backend using Express.js and MongoDB technologies.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">Tailwind CSS, React, React Router, React Hook Form, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://sports-village-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><TfiWorld className="text-2xl hover:text-textGreen" /></a>
                        <a href="https://github.com/delowar-prog/sportsvillage-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} className="project-card border border-white rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Work Opportunity</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <Image src={pro4} alt="" className="group-hover:opacity-5 h-full group-hover:transition-all duration-1000"></Image>
                        <p className="pro_details w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-[#1E293B] rounded-e-3xl">
                            Implemented Good UI design, on homepage applied job info card from local api, each job details can generated job details, applied job store on local storage and can fetch it from api.
                        </p>
                        <div className="technologies p-5 bg-[#1E293B] rounded-e-3xl">HTML, Tailwind CSS, React, React Router, Hero icon, Google font, Chart.js</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://fantastic-mochi-0f6fca.netlify.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><TfiWorld className="text-2xl" /></a>
                        <a href="https://github.com/delowar-prog/work-opportunity" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border hover:text-textGreen"><BsCodeSlash className="text-2xl" /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects