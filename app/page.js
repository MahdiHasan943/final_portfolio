"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}

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
    }
  }
};

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

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

  

  return (
    <>
      <div className="relative mother sectionsPadding bg-[white] dark:bg-[#000]  z-[100000px]">
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

            <div className=" absolute w-full z-50 mt-[-150px] ">
              <div className="sm:pl-[100px]">
                <h1 className=" font-bold text-[80px] text-[#4c4f65] dark:text-white font-Arimo leading-[90px] ">
                  {" "}
                  Mahdi Hasan
                </h1>
                <p className="font-lato italic my-10 text-[#4c4f65] dark:text-white text-[24px] leading-[30px]">
                  {" "}
                  Interactive Front-end Developer
                </p>
                <button className="aboutBt font-Arimo font-extraboldbold text-[20px]">
                  About Me
                </button>
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
              animate="visible"
                        className="w-[280px] z-[10]  ml-[-400px] sm:w-[500px]"

      width="1000"
      height="803"
      viewBox="0 0 1000 803"
            xmlns="http://www.w3.org/2000/svg"
            
    >
      <g transform="matrix(1,0,0,1,0,0)">
        <svg
          viewBox="0 0 448 360"
          data-background-color="#ffffff"
          preserveAspectRatio="xMidYMid meet"
          height="803"
          width="1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="tight-bounds" transform="matrix(1,0,0,1,0,0)">
            <svg viewBox="0 0 448 360" height="360" width="448">
              <g>
                <svg></svg>
              </g>
              <g>
                <svg viewBox="0 0 448 360" height="360" width="448">
                  <g>
                          <motion.path
                               variants={pathVariants}
                      d="M193.855 44.683c1.378 0 2.494 1.116 2.495 2.494 0 1.378-1.116 2.494-2.495
                       2.495h-23.846l-17.167 17.167c-0.973 0.973-2.551 0.973-3.53 0-0.973-0.973-0.973-2.551
                        0-3.529l13.644-13.645h-40.378c-11.518 0-19.151 2.688-23.815 8.113-4.739 5.519-6.66 
                        14.056-6.66 25.63 0 0.069 0 0.137-0.006 0.206l0.212 36.692 14.692-14.692c0.973-0.973
                         2.551-0.973 3.53 0 0.973 0.973 0.973 2.551 0 3.53l-18.178 18.178c0.206 35.832 0.193 
                         71.358-0.013 107.19 25.486 25.2 50.617 50.312 75.811 75.791h25.38c1.378 0 2.494 1.116 
                         2.495 2.495 0 1.378-1.116 2.494-2.495 2.494h-20.448l25.942 26.241 0.006-0.006c8.188 
                         8.188 15.577 12.859 22.824 13.413 7.146 0.543 14.442-2.956 22.586-11.093l28.555-28.555h-20.722c-1.378 
                         0-2.494-1.116-2.495-2.494 0-1.378 1.116-2.494 2.495-2.495h25.711l16.625-16.625c0.973-0.973 2.551-0.973 
                         3.529 0 0.973 0.973 0.973 2.551 0 3.53l-13.101 13.102h40.377c11.518 0 19.151-2.688 23.815-8.113 
                         4.739-5.519 6.66-14.056 6.66-25.63h0.013l-0.212-36.898-16.014 16.014c-0.973 0.973-2.551 0.973-3.53
                          0-0.973-0.973-0.973-2.551 0-3.53l19.5-19.5c-0.206-35.832-0.193-71.358 0.013-107.19-25.486-25.2-50.617-50.312-75.811-75.791h-26.147c-1.378 0-2.494-1.116-2.495-2.495 
                          0-1.378 1.116-2.494 2.495-2.494h21.215l-25.824-26.123c-0.044-0.037-0.081-0.075-0.124-0.112-8.188-8.188-15.577-12.859-22.824-13.413-7.146-0.543-14.442 2.956-22.586 11.093l-28.555 28.555h18.858zM122.578 44.683h45.367l32.078-32.078c9.248-9.248 17.81-13.195 26.484-12.534 8.568 0.649 16.956 5.824 25.985 14.854 0.05 0.05 0.094 0.094 0.137 0.143l29.278 29.615h43.508c13.071 0 21.919 3.268 27.594 9.871 5.6 6.517 7.864 16.101 7.864 28.867 0 0.081-0.006 0.156-0.012 0.23l-0.225 39.742 28.43 28.112 0.006-0.006c9.03 9.03 14.206 17.411 14.854 25.985 0.661 8.674-3.293 17.236-12.534 26.484l-30.768 30.768 0.237 41.843h0.012c0 12.765-2.27 22.35-7.864 28.867-5.675 6.604-14.524 9.872-27.594 9.871h-45.366l-32.078 32.078c-9.248 9.248-17.81 13.195-26.484 12.534-8.568-0.649-16.956-5.824-25.985-14.854l0.006-0.006-29.421-29.758h-43.509c-13.071 0-21.919-3.268-27.594-9.872-5.6-6.517-7.864-16.101-7.863-28.866h0.012l0.231-39.972-28.293-27.969c-0.05-0.044-0.1-0.087-0.143-0.137-9.03-9.03-14.206-17.411-14.854-25.985-0.661-8.674 3.293-17.236 12.534-26.484l30.768-30.768-0.237-41.607c-0.006-0.075-0.012-0.156-0.012-0.23 0-12.765 2.27-22.35 7.864-28.867 5.675-6.604 14.524-9.872 27.594-9.871zM87.682 179.997l-0.274-47.724-27.276 27.276c-8.138 8.138-11.636 15.44-11.094 22.587 0.549 7.246 5.226 14.642 13.413 22.823 0.037 0.037 0.081 0.081 0.113 0.125l24.837 24.551 0.281-49.644zM92.303 241.483l-0.2 35.09h0.013c0 11.58 1.921 20.117 6.66 25.63 4.664 5.432 12.297 8.113 23.815 8.113h38.576l-33.55-33.936-35.308-34.903zM325.415 49.672h-38.575l33.549 33.936 35.308 34.902 0.2-34.884c-0.006-0.069-0.006-0.137-0.007-0.205 0-11.58-1.921-20.117-6.66-25.63-4.664-5.432-12.297-8.113-23.815-8.113zM360.599 130.352l-0.281 49.645 0.274 47.724 27.276-27.276c-8.138-8.138-11.636-15.44-11.094-22.587-0.549-7.252-5.226-14.642-13.413-22.824l0.006-0.006-24.956-24.669z"
                            
                          fill="#22376a"


                            
                    ></motion.path>
                  </g>
                  <g transform="matrix(1,0,0,1,112,92.20604703247481)">
                    <svg
                      viewBox="0 0 224 175.58790593505037"
                      height="175.58790593505037"
                      width="224"
                    >
                      <g>
                        <svg
                          viewBox="0 0 224 175.58790593505037"
                          height="175.58790593505037"
                          width="224"
                        >
                          <g>
                            <svg
                              viewBox="0 0 224 175.58790593505037"
                              height="175.58790593505037"
                              width="224"
                            >
                              <g id="textblocktransform">
                                <svg
                                  viewBox="0 0 224 175.58790593505037"
                                  height="175.58790593505037"
                                  width="224"
                                  id="textblock"
                                >
                                  <g>
                                    <svg
                                      viewBox="0 0 224 175.58790593505037"
                                      height="175.58790593505037"
                                      width="224"
                                    >
                                      <g transform="matrix(1,0,0,1,0,0)">
                                              <motion.svg
                                                
                                          width="224"
                                          viewBox="1.75 -35 44.65 35"
                                          height="175.58790593505037"
                                          data-palette-color="#22376a"
                                        >
                                                <motion.path
                                                     variants={pathVariants}
                                            d="M1.75 0L10.8 0 10.8-1.05 6.7-1.05 6.7-31.35Q6.7-31.9 6.68-32.45 6.65-33 6.65-33.55L6.65-33.55Q6.95-33.1 7.1-32.9 7.25-32.7 7.55-32.25L7.55-32.25 23.95-10.9 40-31.8Q40.4-32.35 40.63-32.68 40.85-33 41.25-33.55L41.25-33.55Q41.25-32.85 41.23-32.48 41.2-32.1 41.2-31.35L41.2-31.35 41.2-1.05 37.35-1.05 37.35 0 46.4 0 46.4-1.05 42.25-1.05 42.25-33.95 46.15-33.95 46.15-35 41.1-35Q36.8-29.45 32.52-23.83 28.25-18.2 23.95-12.65L23.95-12.65Q20.55-17.05 15.93-23.13 11.3-29.2 6.8-35L6.8-35 1.75-35 1.75-33.95 5.65-33.95 5.65-1.05 1.75-1.05 1.75 0Z"
                                            opacity="1"
                                            transform="matrix(1,0,0,1,0,0)"
                                            fill="#22376a"
                                          ></motion.path>
                                        </motion.svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                          <g></g>
                        </svg>
                      </g>
                    </svg>
                  </g>
                </svg>
              </g>
              <defs></defs>
            </svg>
            <rect
              width="448"
              height="360"
              fill="none"
              stroke="none"
              visibility="hidden"
            ></rect>
          </g>
        </svg>
      </g>
    </motion.svg>
        </div>
      </div>
    
      
    </>
  );
}
