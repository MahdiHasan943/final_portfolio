'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HeroContent = ({currentTheme,handleAboutClick }) => {
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
     <div className="flex justify-between items-center  w-full h-[200px]   absolute top-0 ">
        <Image
          width={300}
   height={300}
                  src="/images/1.png"
                  data-speed="15"
                  className="layer Img"
                  alt="icon"
                />
        <Image
           width={300}
   height={400}
                  src="/images/2.png"
                  data-speed="5"
                  className="layer Img"
                  alt="icon"
                />
        <Image
           width={300}
   height={400}
                  src="/images/3.png"
                  data-speed="2"
                  className="layer Img"
                  alt="icon"
                />
        <Image
           width={300}
   height={400}
                  src="/images/4.png"
                  data-speed="6"
                  className="layer Img"
                  alt="icon"
                />
              </div> 
              <div className="grid grid-cols-4 h-[200px]   absolute top-[40%]">
                <div className="col-span-2 ">
          <Image
                    width={300}
                    height={400}
                    src="/images/5.png"
                    data-speed="30"
                    className="layer mt-[-30px] w-[300px]"
                    alt="icon"
                  />

                  <div className=" absolute w-full z-50 mt-[-50px] sm:mt-[-150px] ">
                    <div className="sm:pl-[100px]">
                      <h1 className=" font-bold text-[50px] inline  sm:text-[80px] text-[#4c4f65]  dark:text-white font-Arimo leading-[90px] ">
                        {/* {loading ? (
                          <div className="w-[full] px-8 sm:w-[600px]">
                            <Skeleton inline={true} w={300} />
                          </div>
                        ) : ( */}
                          Mahdi Hasan
                        {/* )} */}
                      </h1>

                      <p className="font-lato italic pb-5 sm:pb-0  sm:my-10 text-[#5b5e73] dark:text-white text-[24px] leading-[30px]">
                        Interactive Front-end Developer
                      </p>
                      <div className="">
                        <div
                          onClick={handleAboutClick}
                          className="relative main-about inline "
                        >
                          <button className="aboutBt font-Arimo font-extraboldbold text-[20px]">
                            About Me
                          </button>

                          <svg
                            className="absolute aboutArrow right-[-45px] h-[40px] w-[80px] top-0"
                            viewBox="-0 5 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(0)"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M23.0681 11.9928L18.8183 7.75732L17.4065 9.17392L19.2419 11.0031L0.932836 11.0011L0.932617 13.0011L19.2373 13.0031L17.4158 14.8308L18.8324 16.2426L23.0681 11.9928Z"
                                fill={
                                  currentTheme === "dark"
                                    ? "#ffffff"
                                    : "#53566c"
                                }
                              ></path>{" "}
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        <Image
                  width={300}
                  height={400}
                  src="/images/7.png"
                  data-speed="4"
                  className="layer"
                  alt="icon"
                />
        <Image
                  width={300}
                  height={400}
                  src="/images/8.png"
                  data-speed="-9"
                  className="layer"
                  alt="icon"
                />
              </div> 

         <div className="flex justify-between items-center  w-full h-[200px]   absolute bottom-0  ">
        <Image
                  width={300}
                  height={400}
                  src="/images/9.png"
                  data-speed="-16"
                  className="ml-[-100px] layer"
                  alt="icon"
                />
        <Image
                  width={300}
                  height={400}
                  src="/images/10.png"
                  data-speed="-7"
                  className="layer"
                  alt="icon"
                />
        <Image
                  width={300}
                  height={400}
                  src="/images/6.png"
                  data-speed="-2"
                  className="layer"
                  alt="icon"
                />

        <Image
                  width={300}
                  height={400}
                  src="/images/12.png"
                  data-speed="5"
                  className="layer"
                  alt="icon"
                />
                </div>
                
      </>
  )
}

export default HeroContent