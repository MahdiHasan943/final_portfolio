'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { navVariants } from "@/utils/motion/motion";
import Link from "next/link";
import { useTheme } from "next-themes";

function Header() {
  
  const router = useRouter();
  const navigateToSection =  (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth' });
    router.push(`/?section=${sectionId}`, undefined, { shallow: true });
  }  
  

  const [active, setActive] = useState("nav__menu");
  const [color, setColor] = useState(false);
  const [bg,setBg]=useState('nav_bg')
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (bg === "nav_bg") {
      setBg("nav_bg nav__activeb");
    } else setBg("nav_bg");


    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const menu = (
    <React.Fragment>
      <a href="/" className="flex HideForSm items-center gap-4 lg:ml-[80px] nav__brand">
         
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172" style={{ fill: "#26e07f" }}>
</svg>
        </a>
   
        <li className="  nav__item item">
        <Link
          href={''}
          onClick={() => {
            navToggle();
            setColor('Cse');
          }}
          className={`${
            color === 'Cse'
              ? "  group text-[#b0b2c3]  transition-all duration-300 ease-in-out "
              : "text-[#b0b2c3]"
          } nav__link`}
        >
                    Case Studies

          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </Link>
      </li>
      <li className="  nav__item item">
        <Link
          href={''}
          onClick={() => {
            navToggle();
            setColor('Experiments');
          }}
          className={`${
            color === 'Experiments'
              ? "  group text-[#b0b2c3] transition-all duration-300 ease-in-out "
              : "text-[#b0b2c3]"
          } nav__link`}
        >
          Experiments
          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </Link>
      </li>
      <li className="  nav__item item">
        <Link
          href={''}
          onClick={() => {
            navToggle();
            setColor('Skills');
          }}
          className={`${
            color === 'Skills'
              ? "  group text-[#b0b2c3] transition-all duration-300 ease-in-out "
              : "text-[#b0b2c3]"
          } nav__link`}
        >
          Skills
          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </Link>
      </li>
      <li className="  nav__item item">
        <Link
          href={''}
          onClick={() => {
            navToggle();
            setColor('Men');
          }}
          className={`${
            color === 'Men'
              ? "  group text-[#b0b2c3] transition-all duration-300 ease-in-out "
              : "text-[#b0b2c3]"
          } nav__link`}
        >
          Men
          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </Link>
      </li>
    
      <li className=" nav__item item">
        <a
          href="#Contact"
          onClick={() => {
            navToggle();
            setColor("people");
          }}
          className={`${
            color === "people"
              ? "    group text-[#b0b2c3] transition-all duration-300 ease-in-out      "
              : "text-[#b0b2c3]"
          } nav__link`}
        >
          Contact
          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </a>
      </li>
      <div className="flex justify-center px-6">
          {currentTheme === "dark" ? (
            <button className="" onClick={() => setTheme("light")}>
            
              <img
               
                className="origin-center  w-[30px] h-[30px]"
                src="/images/mon.png"
                alt=""
              />
            </button>
          ) : (
            <button className="" onClick={() => setTheme("dark")}>
<svg className="w-[40px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.919 285.919"><path d="M142.959 0C64.131 0 0 64.132 0 142.96s64.131 142.959 142.959 142.959 142.96-64.131 142.96-142.959S221.787 0 142.959 0zm0 260.919V25c65.043 0 117.96 52.917 117.96 117.96 0 65.043-52.917 117.959-117.96 117.959z"></path></svg>
            </button>
          )}
        </div>
    </React.Fragment>
  );

  return (
  
    <motion.nav  variants={navVariants} initial="hidden" whileInView="show" className="overflow-hidden mb-[-180px]   w-full py-12  sectionsPadding nav">
      <div className="flex w-full 2xl:w-[auto] md:justify-between 2xl:justify-center">
        <a href="#" className="flex items-center  nav__brand">
        
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="60" font-family="Arial" font-size="60" fill="none" stroke="white" stroke-width="4">m</text>
</svg>
        </a>
    
        
      </div>
      <div className="">
        <div  className={icon==='nav__toggler'?` ${bg}  delay-300 `:`  ${bg}`}>
         
        
         </div> 
              <ul className={icon === 'nav__toggler' ? `transition duration-[300ms]   ${active}` : `transition duration-[1000ms]   delay-400  ${active}`}>{menu}
        </ul>
</div>


      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
}

export default Header;
