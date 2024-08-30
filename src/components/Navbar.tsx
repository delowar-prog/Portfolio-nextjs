'use client'
import Image from "next/image"
import { logo } from "../../public/assets"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';
const Navbar = () => {
  const ref = useRef<string | any>('')
  const [showMenu, setShowMenu] = useState(false)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })
    //active link enable
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
      link.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }
  return (
    <div className="w-full h-20 shadow-navShadow sticky top-0 z-50 bg-bodyColor px-10">
      <div className="max-w-container h-full mx-auto px-5 py-1 font-titleFont flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
          <Image className="w-14" src={logo} alt="logo"></Image>
        </motion.div>
        <div className="hidden md:inline-flex gap-10 items-center">
          <ul className="flex gap-8 text-[13px]">
            <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#home'}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >Home</motion.li>
            </Link>
            <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#about'}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >About</motion.li>
            </Link>
            <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#experience'}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >Experiences</motion.li>
            </Link>
            <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#project'}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >Projects</motion.li>
            </Link>
            <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#contact'}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >Contact</motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.6 }}
              className="border border-textGreen hover:bg-hoverColor px-2 py-1 text-[13px] rounded duration-300">Resume</motion.button>
          </a>
        </div>
        {/* responsive btn */}
        <div className="w-6 h-5 overflow-hidden md:hidden flex flex-col justify-between text-textGreen text-4xl cursor-pointer group items-center"
          onClick={() => setShowMenu(true)}>
          <span className="w-full bg-textGreen h-[2px] transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full bg-textGreen h-[2px] transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full bg-textGreen h-[2px] transform  translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div ref={(node) => (ref.current = node)} className="absolute md:hidden top-0 right-0 bg-black/75 w-full h-screen flex flex-col items-end">
              <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="w-[80%] h-full bg-[#0F2940] flex flex-col overflow-y-scroll items-center px-4 py-10 relative">
                <AiOutlineClose className="text-3xl absolute top-5 right-5 text-textGreen hover:text-red-500 cursor-pointer" onClick={() => setShowMenu(false)}></AiOutlineClose>
                <div className="flex flex-col items-center gap-8">
                  <ul className="flex flex-col gap-8 text-[16px]">
                    <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#home'}>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                      >Home</motion.li>
                    </Link>
                    <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#about'}>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                      >About</motion.li>
                    </Link>
                    <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#project'}>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >Projects</motion.li>
                    </Link>
                    <Link className="text-textDark hover:text-textGreen duration-300 cursor-pointer nav-link" onClick={handleScroll} href={'#contact'}>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >Contact</motion.li>
                    </Link>
                  </ul>
                  <a href="/assets/resume.pdf" target="_blank">
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="border border-textGreen hover:bg-hoverColor px-2 py-1 text-[13px] rounded duration-300">Resume</motion.button>
                  </a>
                  <div className='flex justify-center items-center gap-4'>
                    <a href='https://poetic-puffpuff-233de7.netlify.app/' target='_blank'>
                      <motion.span initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                        <FaGithub className="text-xl"></FaGithub>
                      </motion.span>
                    </a>
                    <a href='' target='_blank'>
                      <motion.span initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 4 }} transition={{ duration: 0.7, delay: 0.7 }} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                        <FaFacebook className="text-xl"></FaFacebook>
                      </motion.span>
                    </a>
                    <a href='' target='_blank'>
                      <motion.span initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className='bg-hoverColor w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:text-textGreen'>
                        <FaLinkedin className="text-xl"></FaLinkedin>
                      </motion.span>
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <motion.a initial={{ y: -10, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.9 }} href="mailto:delowarmilton@gmail.com">
                      <p className="text-sm text-textGreen">delowarmilton@gmail.com</p>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar