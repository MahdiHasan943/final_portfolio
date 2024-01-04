"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { textVariant2 } from "@/utils/motion/motion";
import Link from "next/link";
import Image from "next/image";
const CaseStudies = () => {
  const [works, setWorks] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/works");
    const data = await response.json();

    setWorks(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log(works);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section className="py-[150px] bg-[#f3f3f3]" id="case">
      <motion.h3
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-center text-[#b29487] text-[18px] sm:text-[24px] font-popping font-semibold tracking-widest	 leading-[30px]"
      >
        {" "}
        CASE STUDIES
      </motion.h3>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-center text-[40px] sm:text-[50px] font-extrabold font-sofia py-3  text-[#4a4a4a]"
      >
        Latest Works
      </motion.h2>

      <div className="w-full relative grid grid-cols-1 px-4 sm:px-8 gap-16 mx-auto   py-4 justify-center">
        <div className="absolute left-0 top-0 w-full h-full px-8 ">
          <div className="flex justify-between h-full w-full ">
            <div className="flex flex-col justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <circle
                  fill="none"
                  stroke="#6107EF"
                  strokeWidth="9"
                  strokeMiterlimit="10"
                  cx="35"
                  cy="35.1"
                  r="28.5"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#A79FFF"
                  d="M88 12v76H12V12h76m9-9H3v94h94V3z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path
                  fill="none"
                  stroke="#0FE851"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M12.6 56l22.8-39.5L58.2 56z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="26 -26 180 180"
              >
                <path
                  fill="#ffda77"
                  d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"
                ></path>
                <path
                  fill="#ffda77"
                  d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <circle
                  fill="none"
                  stroke="#6107EF"
                  strokeWidth="9"
                  strokeMiterlimit="10"
                  cx="35"
                  cy="35.1"
                  r="28.5"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#A79FFF"
                  d="M88 12v76H12V12h76m9-9H3v94h94V3z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path
                  fill="none"
                  stroke="#0FE851"
                  strokeWidth="8"
                  strokeMiterlimit="10"
                  d="M12.6 56l22.8-39.5L58.2 56z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="26 -26 180 180"
              >
                <path
                  fill="#ffda77"
                  d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"
                ></path>
                <path
                  fill="#ffda77"
                  d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#A79FFF"
                  d="M88 12v76H12V12h76m9-9H3v94h94V3z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <circle
                  fill="none"
                  stroke="#6107EF"
                  strokeWidth="9"
                  strokeMiterlimit="10"
                  cx="35"
                  cy="35.1"
                  r="28.5"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="26 -26 180 180"
              >
                <path
                  fill="#ffda77"
                  d="M183.208 103.01l-28.143 28.144L49 25.09 77.143-3.055z"
                ></path>
                <path
                  fill="#ffda77"
                  d="M183.208 25.09L77.143 131.153 49 103.01 155.065-3.053z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {works.map((p) => (
          <motion.div
            key={p._id}
            className="w-full shadow-gipShadow  lg:w-[700px] xl:w-[800px] 2xl:w-[980px] mx-auto mainBgC rounded-sm overflow-hidden nanas relative  group bg-cover bg-center h-[290px] sm:h-[480px]"
            // style={{ backgroundImage: `url(${p.image})` }}
          >
         <Image className="absolute max-w-[100%] max-h-[100%]  "   src={p?.image} width={1000} height={480}/>
            <div className="bg-[#204373] absolute  opacity-[0.5]  h-[480px] w-full"></div>
            <div className="bgC  h-[480px] w-full"></div>

            {p.id === 1 || p.id === 3 ? (
              <div className="absolute top-0 h-full left-0 z-50 w-full">
                <div className="flex h-full  items-center">
                  <div className="px-4 group-hover:translate-x-4 group-hover:translate-y-4  ease-in-out  duration-300  sm:px-20 ">
                    <h2 className="text-[30px] sm:text-[60px]  font-sofia font-bold text-white">
                      {p.title}
                    </h2>
                    <h2 className="text-[15px] sm:text-[24px] font-popping tracking-widest  text-white">
                      {p.details}
                    </h2>
                    <div className="py-4">
                      <Link href={`/works/${p._id}`}>
                        {" "}
                        <div className="relative  main-about inline ">
                          <button className="aboutBt font-Arimo font-extraboldbold text-[15px] sm:text-[20px]">
                            Case Study
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
                                fill="#ffffff"
                              ></path>{" "}
                            </g>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute  top-0 h-full right-0 z-50 w-full">
                <div className="flex h-full justify-end items-center">
                  <div className="px-4 group-hover:translate-x-4 group-hover:translate-y-4  ease-in-out  duration-300  sm:px-20 ">
                    <h2 className="text-[30px] sm:text-[60px]  font-sofia font-bold text-white">
                      {p.title}
                    </h2>
                    <h2 className="text-[15px] sm:text-[24px] font-popping tracking-widest  text-white">
                      {p.details}
                    </h2>
                    <div className="py-4">
                      <Link href={`/works/${p._id}`}>
                        {" "}
                        <div className="relative  main-about inline ">
                          <button className="aboutBt font-Arimo font-extraboldbold text-[15px] sm:text-[20px]">
                            Case Study
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
                                fill="#ffffff"
                              ></path>{" "}
                            </g>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {p.id === 1 || p.id === 3 ? (
              <div className="h-[280px]  hidden sm:block  overflow-hidden relative mt-[-80px] justify-end w-full">
                <p
                  className=" right-0 text-[150px] bottom-[-180px] group-hover:-bottom-[0] ease-in-out duration-300  text-end greek"
                  data-text={`${p.number}`}
                >
                  {p.number}
                </p>
              </div>
            ) : (
              <div className="h-[280px] hidden sm:block   overflow-hidden relative mt-[-80px] justify-end w-full">
                <p
                  className=" text-[150px] left-0 bottom-[-180px] group-hover:-bottom-[0] ease-in-out duration-300  text-end greek"
                  data-text={`${p.number}`}
                >
                  {p.number}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
