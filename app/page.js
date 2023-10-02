"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CaseStudies from "@/components/front-end/CaseStudies/CaseStudies";
import Experiments from "@/components/front-end/Experiments/Experiments";
import Skills from "@/components/front-end/Skills/Skills";
import Contact from "@/components/front-end/Contact/Contact";
import PopupForm from "@/components/front-end/about/PopupForm ";
import Footer from "@/components/front-end/Footer/Footer";
const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 500ms delay
    }, 1500);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed"));
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  const handleClick = () => {
    setTimeout(() => {
      const targetSection = document.querySelector('#case');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay for 0.3 seconds (300 milliseconds) before scrolling
  };
  

  useEffect(() => {
    const link = document.querySelector('a[href="#case"]');
    if (link) {
      link.addEventListener('click', handleClick);

      return () => {
        link.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <>
      <div className="relative">
        
        <div className="">
        <PopupForm className="  z-[100000] " isOpen={isOpen} onClose={handleAboutClick} />

        </div>

      <SkeletonTheme baseColor={`#fff`} highlightColor={`#444`}>
        <div id="hero" className="relative mother sectionsPadding bg-[white] dark:bg-[#000]  z-[100000px]">
      
          <div className="grid grid-cols-4 h-[200px]   absolute top-0 ">
            <img
              src="/images/1.png"
              data-speed="15"
              className="layer Img"
              alt="icon"
            />
            <img
              src="/images/2.png"
              data-speed="5"
              className="layer Img"
              alt="icon"
            />
            <img
              src="/images/3.png"
              data-speed="2"
              className="layer Img"
              alt="icon"
            />
            <img
              src="/images/4.png"
              data-speed="6"
              className="layer Img"
              alt="icon"
            />
          </div>
          <div className="grid grid-cols-4 h-[200px]   absolute top-[40%]">
            <div className="col-span-2 ">
              <img
                src="/images/5.png"
                data-speed="30"
                className="layer mt-[-30px] w-[300px]"
                alt="icon"
              />

              <div className=" absolute w-full z-50 mt-[-50px] sm:mt-[-150px] ">
                <div className="sm:pl-[100px]">
                  <h1 className=" font-bold text-[50px] inline  sm:text-[80px] text-[#4c4f65]  dark:text-white font-Arimo leading-[90px] ">
                    {loading ? (
                      <div className="w-[full] px-8 sm:w-[600px]">
                        <Skeleton inline={true} w={300} />
                      </div>
                    ) : (
                      "Mahdi Hasan"
                    )}
                  </h1>

                  <p className="font-lato italic pb-5 sm:pb-0  sm:my-10 text-[#5b5e73] dark:text-white text-[24px] leading-[30px]">
                    {" "}
                    Interactive Front-end Developer
                  </p>
                  <div className="">
                    <div onClick={handleAboutClick} className="relative main-about inline ">
                      <button  className="aboutBt font-Arimo font-extraboldbold text-[20px]">
                        About Me
                        </button>
                    
                         <svg
                        className="absolute aboutArrow right-[-45px] h-[40px] w-[80px] top-0"
                        viewBox="-0 5 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(0)"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M23.0681 11.9928L18.8183 7.75732L17.4065 9.17392L19.2419 11.0031L0.932836 11.0011L0.932617 13.0011L19.2373 13.0031L17.4158 14.8308L18.8324 16.2426L23.0681 11.9928Z"
                            fill={
                              currentTheme === "dark" ? "#ffffff" : "#53566c"
                            }
                          ></path>{" "}
                        </g>
                      </svg> 
                       
                    
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/images/7.png"
              data-speed="4"
              className="layer"
              alt="icon"
            />
            <img
              src="/images/8.png"
              data-speed="-9"
              className="layer"
              alt="icon"
            />
          </div>

          <div className="grid grid-cols-4 h-[200px]   absolute bottom-0  ">
            <img
              src="/images/9.png"
              data-speed="-16"
              className="ml-[-100px] layer"
              alt="icon"
            />
            <img
              src="/images/10.png"
              data-speed="-7"
              className="layer"
              alt="icon"
            />
            <img
              src="/images/6.png"
              data-speed="-2"
              className="layer"
              alt="icon"
            />

            <img
              src="/images/12.png"
              data-speed="5"
              className="layer"
              alt="icon"
            />
          </div>
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
                stroke-width="2"
                stroke-linecap="round"
              />
              <motion.path
                variants={pathVariants}
                fill="none"
                d="M30 60 L40 30 L50 60 L60 30 L70 60"
                stroke={currentTheme === "dark" ? "#22376a" : "#7294c2"}
                stroke-width="2"
                stroke-linecap="round"
              />
            </motion.svg>
          </div>
          <div className="absolute hidden sm:flex flex-col gap-5  top-[40%] right-8">
            <svg
              className="w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 612 612"
            >
              <path
                d="M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772 25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87 163.525 595.21 141.42 612 116.257z"
                fill={currentTheme === "dark" ? "#b0b2c3" : "#010002"}
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="430.117"
              className="w-[30px] h-[30px]"
              height="430.117"
              fill={currentTheme === "dark" ? "#b0b2c3" : "#010002"}
              viewBox="0 0 430.117 430.117"
            >
              <path d="M430.117 261.543V420.56H337.93V272.193c0-37.27-13.335-62.707-46.704-62.707-25.473 0-40.632 17.142-47.3 33.724-2.433 5.928-3.06 14.18-3.06 22.477V420.56H148.65s1.242-251.285 0-277.32h92.21v39.31c-.187.293-.43.61-.606.895h.606v-.896c12.25-18.87 34.13-45.825 83.102-45.825 60.673 0 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.25 0 57.463c0 26.62 20.038 47.94 50.96 47.94h.615c32.16 0 52.16-21.317 52.16-47.94-.607-27.212-20-47.905-51.552-47.905zM5.477 420.56H97.66V143.24H5.478v277.32z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="438.549"
              height="438.549"
              className="w-[30px] h-[30px]"
              viewBox="0 0 438.549 438.549"
              fill={currentTheme === "dark" ? "#b0b2c3" : "#010002"}
            >
              <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="w-[30px] h-[30px]"
              fill={currentTheme === "dark" ? "#b0b2c3" : "#010002"}
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className="w-[30px] h-[30px]"
              fill={currentTheme === "dark" ? "#b0b2c3" : "#010002"}
            >
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
            </svg>
          </div>
          <div className="w-full absolute left-0  bottom-[10px] flex justify-center items-end ">
            <div className="group relative overflow-hidden  h-[230px] mb-[-100px] ">
              <p className="text-center  font-lato italic pb-5 sm:pb-0 font-bold  sm:my-3 text-[#5b5e73] dark:text-white text-[24px] leading-[30px]">
                Works
                </p>
                <a  onClick={handleClick} className="bg-[red] h-[100px]">
              {currentTheme === "light" ?                <img className="absolute top-[105px] group-hover:top-[70px]  ease-in-out duration-200" src="/images/downArrow.svg" alt="" />
:                <img className="absolute h-[60px] top-[105px] group-hover:top-[70px]  ease-in-out duration-200" src="/images/icons8-arrow-30.png" alt="" />

              }</a>
              
            </div>
          </div>
        </div>
      </SkeletonTheme>
        <CaseStudies />
      <Experiments />
      {/* <Skills /> */}
          <Contact />
          <Footer/>
     
      </div>

      </>
  );
}
