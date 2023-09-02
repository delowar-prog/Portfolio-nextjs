import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full font-bodyFont bg-bodyColor text-textLight">
      <Navbar/>
      <div className="w-full flex justify-between items-center gap-20">
          <div className="hidden lg:inline-flex fixed w-32 h-full left-0 bottom-36">
            <LeftSide></LeftSide>
          </div>
          <div className="w-full ">
            <Banner/>
            {/**skills slider */}
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
          <div className="hidden lg:inline-flex fixed w-32 h-full right-0 bottom-36">
            <RightSide></RightSide>
          </div>
      </div>
    </main>
  )
}
