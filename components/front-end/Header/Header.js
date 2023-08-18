'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { navVariants } from "@/utils/motion/motion";
import Link from "next/link";

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

  const menu = (
    <React.Fragment>
      <a href="/" className="flex HideForSm items-center gap-4 lg:ml-[80px] nav__brand">
         
          <span className="lato text-[white]">ClearTouch Design</span>
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
              ? "text-[#FF413D]  group  transition-all duration-300 ease-in-out "
              : "text-white md:text-[#636B8A]"
          } nav__link`}
        >
                    Case Studies

          <div className="bg-left-bottom bg-gradient-to-t from-[#FF413D] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>
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
              ? "text-[#FF413D]  group  transition-all duration-300 ease-in-out "
              : "text-white md:text-[#636B8A]"
          } nav__link`}
        >
          Experiments
          <div className="bg-left-bottom bg-gradient-to-t from-[#FF413D] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>
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
              ? "text-[#FF413D]  group  transition-all duration-300 ease-in-out "
              : "text-white md:text-[#636B8A]"
          } nav__link`}
        >
          Skills
          <div className="bg-left-bottom bg-gradient-to-t from-[#FF413D] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>
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
              ? "text-[#FF413D]  group  transition-all duration-300 ease-in-out "
              : "text-white md:text-[#636B8A]"
          } nav__link`}
        >
          Men
          <div className="bg-left-bottom bg-gradient-to-t from-[#FF413D] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>
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
              ? "text-[#FF413D]     group  transition-all duration-300 ease-in-out      "
              : "text-white md:text-[#636B8A]"
          } nav__link`}
        >
          Contact
          <div className="bg-left-bottom bg-gradient-to-t from-[#FF413D] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out"></div>
        </a>
      </li>
    </React.Fragment>
  );

  return (
  
    <motion.nav  variants={navVariants} initial="hidden" whileInView="show" className="overflow-hidden   w-full py-12  sectionsPadding nav">
      <div className="flex w-full 2xl:w-[auto] md:justify-between 2xl:justify-center">
        <a href="#" className="flex items-center  nav__brand">
        
          <span className="tuoches">ClearTouch Design</span>
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
