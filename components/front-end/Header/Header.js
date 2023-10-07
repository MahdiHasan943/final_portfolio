"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  textVariant2,
  textVariant,
  navVariants,
  staggerContainer,
} from "@/utils/motion/motion";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useTheme } from "next-themes";
import PopupForm from "../about/PopupForm ";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleAboutClick = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const [active, setActive] = useState("nav__menu");
  const [color, setColor] = useState(false);
  const [bg, setBg] = useState("nav_bg");
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
  const currentTheme = theme === "system" ? systemTheme : theme;
  const navLink = [
    {
      title: "CaseStudies",
      ref: "#case",
      activeColor: "Cse",
    },
    {
      title: "          Experiments      ",
      ref: "#exp",
      activeColor: "Experiments",
    },
    {
      title: "Skills",
      ref: "#skill",
      activeColor: "Skills",
    },
  ];
  const handleClick = (targetHref) => {
    setTimeout(() => {
      const targetSection = document.querySelector(targetHref);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay for 0.3 seconds (300 milliseconds) before scrolling
  };

  useEffect(() => {
    setMounted(true);

    // Add a common class to all the links that should trigger scrolling
    const links = document.querySelectorAll(".scroll-trigger");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const targetHref = link.getAttribute("href"); // Get the href attribute
        // Check if the targetHref is valid and starts with '#'
        if (targetHref && targetHref.startsWith("#")) {
          handleClick(targetHref); // Call handleClick with the targetHref
        }
      });
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);
  if (!mounted) return null;
  const menu = (
    <React.Fragment>
      {navLink.map((nav) => (
        <motion.li
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="  nav__item item"
        >
          <a
            onClick={() => {
              navToggle();
              setColor(nav?.activeColor);
              handleClick(nav.ref); // Call handleClick with nav.ref as the argument
            }}
            className={`${
              color === nav?.activeColor
                ? "  group1 text-[#333335] dark:text-white transition-all duration-300 ease-in-out "
                : "text-[#333335] dark:text-white "
            } nav__link  group`}
          >
            {nav.title}
            <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px]  duration-500 ease-out"></div>
          </a>
        </motion.li>
      ))}
      <a
        onClick={() => {
          navToggle();
          handleClick("#hero");
          handleAboutClick();
        }}
        className="text-[#333335] group nav__link mt-[-5px] dark:text-white "
      >
        Contact
        <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2 mt-1     bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
      </a>
      {currentTheme === "dark" ? (
        <button
          className="w-[50px] h-[50px]"
          onClick={() => {
            setTheme("light");
            navToggle();
          }}
        >
          <img
            className="origin-center  w-[30px] h-[30px]"
            src="/images/LIGHT.png"
            alt=""
          />
        </button>
      ) : (
        <button
          className="w-[50px] h-[50px]"
          onClick={() => {
            setTheme("dark");
            navToggle();
          }}
        >
          <img
            className="origin-center  w-[30px] h-[30px]"
            src="/images/icons8-dark-mode-30.png"
            alt=""
          />
        </button>
      )}
    </React.Fragment>
  );
  return (
    <>
      <PopupForm
        className="  z-[100000] "
        isOpen={isOpen}
        onClose={handleAboutClick}
      />
      <motion.nav className="overflow-hidden mb-[-180px]  px-4  w-full sm:py-4  nav">
        <div className="flex w-full 2xl:w-[auto] md:justify-between 2xl:justify-center">
        <Link href="/" className="flex   nav__brand">
            <svg
              width="200"
              className="pt-3 md:pt-0"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="20"
                y="60"
                font-family="Arial"
                font-size="60"
                fill="#4c4f65"
                stroke="white"
                stroke-width="4"
              >
                m
              </text>
            </svg>
          </Link>
        </div>
        <div className="">
          <div
            className={
              icon === "nav__toggler" ? ` ${bg}  delay-300 ` : `  ${bg}`
            }
          ></div>
          <motion.ul
            variants={staggerContainer}
            className={
              icon === "nav__toggler"
                ? `transition duration-[300ms]   ${active}`
                : `transition duration-[1000ms]   delay-400  ${active}`
            }
          >
            {menu}
          </motion.ul>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </motion.nav>
    </>
  );
}
export default Header;

// const navigateToSection =  (sectionId) => {
//   const sectionElement = document.getElementById(sectionId);
//   sectionElement.scrollIntoView({ behavior: 'smooth' });
//   router.push(`/?section=${sectionId}`, undefined, { shallow: true });
// }
