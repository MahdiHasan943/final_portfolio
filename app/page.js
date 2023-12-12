"use client";
import { useEffect, useState } from "react";
import { motion, easeOut, easeIn } from "framer-motion";
import { Triangle } from "react-loader-spinner";
import { useTheme } from "next-themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CaseStudies from "@/components/front-end/CaseStudies/CaseStudies";
import Experiments from "@/components/front-end/Experiments/Experiments";
import Contact from "@/components/front-end/Contact/Contact";
import PopupForm from "@/components/front-end/about/PopupForm ";
import { pathVariants, svgVariants } from "@/utils/motion/motion";
import WorkHero from "@/components/front-end/SmallComponet/WorkHero";
import ContactIcon from "@/components/front-end/SmallComponet/ContactIcon";
import HeroContent from "@/components/front-end/SmallComponet/HeroContent";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleAboutClick = () => {
      setIsOpen(!isOpen);
    };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  

 const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debouncedHandleClick = debounce(() => {
  const targetSection = document.querySelector("#case");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}, 300);

useEffect(() => {
  const link = document.querySelector('a[href="#case"]');
  if (link) {
    link.addEventListener("click", debouncedHandleClick);

    return () => {
      link.removeEventListener("click", debouncedHandleClick);
    };
  }
}, [debouncedHandleClick]);


  return (
    <>
        <div className="relative">
          <div className="">
            <PopupForm isOpen={isOpen} onClose={handleAboutClick} />
          </div>

          <SkeletonTheme baseColor={`#fff`} highlightColor={`#444`}>
            <div
              id="hero"
              className="relative mother sectionsPadding bg-[white] dark:bg-[#000]  z-[100000px]"
            >
                <HeroContent  currentTheme={currentTheme}  handleAboutClick={handleAboutClick} />
              <div className="absolute w-full h-[100vh] flex justify-center items-center">
                <motion.svg
                  variants={svgVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="w-[400px] z-[10 ml-[-0px] sm:ml-[-100px] lg:ml-[-200px] 2xl:ml-[-300px] sm:w-[700px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <motion.path
                    variants={pathVariants}
                    fill="none"
                    d="M20 60 L30 30 L40 60 L50 30 L60 60"
                    stroke={currentTheme === "dark" ? "#22376a" : "#7294c2"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <motion.path
                    variants={pathVariants}
                    fill="none"
                    d="M30 60 L40 30 L50 60 L60 30 L70 60"
                    stroke={currentTheme === "dark" ? "#22376a" : "#7294c2"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>
                {/* <ContactIcon currentTheme={currentTheme}/> */}
                <WorkHero currentTheme={currentTheme} handleClick={debouncedHandleClick} />
            </div>
          </SkeletonTheme>
          <CaseStudies />
          <Experiments />
          <Contact />
        </div>

    </>
  );
}
