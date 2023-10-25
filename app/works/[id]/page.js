"use client";
import { motion, easeOut, easeIn } from "framer-motion";
import { Triangle } from "react-loader-spinner";

import {
  textVariant2,
  textVariant3,
  fadeIn,
  staggerContainer,
} from "@/utils/motion/motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const page = ({ params }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 500ms delay
    }, 1500);
  }, []);
  const [workId, setWorkId] = useState();
  const [workDetails, setWorkDetails] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/works/${params?.id}`);
      const data = await response.json();
      setWorkId(data);
    };
    fetchPosts();
  }, [params?.id]);
  console.log(workId?._id);

  // fetch workdetails
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/worksdetails");
      const data = await response.json();
      setWorkDetails(data);
    };
    fetchPosts();
  }, []);
  // console.log(workDetails);
  const filter = workDetails?.filter((wd) => wd?.title === workId?.title);
  console.log(filter);

  const [works, setWorks] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/works");
    const data = await response.json();

    setWorks(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="relative flex justify-center items-center py-20 bg-[#252a60]  h-[100vh] w-full]">
          <Triangle
            height="200"
            width="200"
            color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <motion.div
            className="h-[100%] w-[100%] absolute top-0 left-0  bg-[#1c1d25]  "
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1, ease: easeOut }}
          ></motion.div>
        </div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=""
        >
          <div
            className=" w-full relative h-[500px] sm:h-[100vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${workId?.image})` }}
          >
            <div className="bg-[#000] absolute top-0 left-0 px-4 sm:px-16 opacity-[0.7] w-full h-full"></div>
            <div className="z-[100!important] flex flex-col justify-center items-center absolute top-0 left-0 px-4 sm:px-16  w-full h-full">
              <div className="pt-8 sm:pt-0">
                <motion.h1
                  variants={textVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="text-white text-center text-[30px]  capitalize sm:text-[80px] font-bold font-Arimo"
                >
                  {filter[0]?.title}
                </motion.h1>
                <motion.p
                  variants={textVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#f6f5f5] text-center capitalize text-[16px] sm:text-[24px] font-semibold tracking-wide font-popping"
                >
                  {workId?.details}
                </motion.p>
              </div>
            </div>
            <div className="absolute px-4 top-0 left-0 w-full h-full flex justify-center items-end">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 w-full text-center py-10">
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[15px] text-[#37a5eb] font-bold font-popping"
                >
                  {" "}
                  ROLE{" "}
                  <span className="px-2 text-white">
                    FRONT-END DEVELOPER
                  </span>{" "}
                </motion.p>
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[15px] text-[#37a5eb] font-bold font-popping"
                >
                  {" "}
                  CONTEXT{" "}
                  <span className="px-2 text-white">WEBSITE REDESIGN</span>{" "}
                </motion.p>
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[15px] text-[#37a5eb] font-bold font-popping"
                >
                  {" "}
                  PERIOD <span className="px-2 text-white">
                    MIDDLE 2020
                  </span>{" "}
                </motion.p>
              </div>
            </div>
          </div>
          {/* after hero */}
          <div className="px-4  bg-[#060c10] py-14 sm:px-16">
            <div className="">
              <h1 className="text-white text-center text-[25px]  capitalize sm:text-[60px] font-extrabold font-sofia">
                The Project
              </h1>
              <div className="mx-auto sm:w-[650px]">
                <p className="text-[#f6f5f5]  capitalize text-center sm:text-start text-[14px] sm:text-[18px]  tracking-wide font-popping">
                  {filter[0]?.details}
                </p>
                <div className="py-8 text-center">
                  <a target="_blank" href={filter[0]?.ref}>
                    <div className="relative group main-about inline ">
                      <button className="border border-[white] py-3 px-8  capitalize font-sofia text-[#f6f5f5] group-border-none ease-linear delay-200 group-hover:bg-white group-hover:text-[#000] font-bold text-[20px]">
                        visit website
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
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  figma & analysis*/}

          <div className="px-4 bg-white py-20 sm:px-16 mx-auto">
            <div className="">
              <motion.h3
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="text-center text-[#b29487] text-[16px]  font-popping font-semibold tracking-widest	 leading-[30px]"
              >
                {" "}
                ANALYSIS & PREPARATION
              </motion.h3>
              <motion.h2
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="text-center text-[30px] sm:text-[40px] font-extrabold font-sofia py-3  text-[#4a4a4a]"
              >
                Branding{" "}
              </motion.h2>

              <div className="mx-auto py-4 sm:flex  justify-center  gap-10">
                <div className="">
                  <motion.h2
                    variants={textVariant2}
                    initial="hidden"
                    whileInView="show"
                    className="text-center sm:text-start text-[25px] sm:text-[40px] font-extrabold font-sofia py-3  text-[#121212]"
                  >
                    An elegant design.
                  </motion.h2>
                  <div className="w-[100px]  bg-[#37a5eb] rounded-md h-[5px]"></div>
                  <motion.h3
                    variants={textVariant2}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mt-5 sm:text-start sm:w-[450px] text-[#121212] text-[16px]  font-popping font-semibold tracking-wider	 leading-[30px]"
                  >
                    {" "}
                    As the{" "}
                    <span className="text-[#37a5eb]">Front-end Developer</span>,
                    I was responsible of building the entire UI for the new
                    website, redefining the User Experience and studying new
                    interactions between the User and the Interface. One of the
                    most exciting experience was integrating the entire
                    front-end system with the{" "}
                    <span className="text-[#37a5eb]">
                      {" "}
                      Ruby on Rails Application{" "}
                    </span>{" "}
                    and the change page animation.
                  </motion.h3>
                </div>
                <div className="pt-6 sm:pt-0">
                  <img
                    className="transform mx-auto scale-100 hover:scale-110 transition-transform duration-500"
                    src={filter[0]?.figma}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* nextg-project */}
          <div className=" overflow-hidden  h-[180px] group relative   bg-white">
            <div className="absolute top-0 left-0 w-full  h-full  translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out delay-200 duration-500   bg-[#37a5eb]"></div>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute px-4 sm:px-16 py-8 top-0 left-0 w-full h-full z-50"
            >
              <p className=" text-[#b29487] ml-[4px] group-hover:text-white ease-linear duration-500 delay-300  text-[16px]  font-popping  tracking-widest	 leading-[30px]">
                Next Work
              </p>
              {workId?._id === "652126f3722726a8fa5ccd7c" && (
                <Link
                  className="flex items-center justify-between"
                  href={`/works/${works[1]?._id}`}
                >
                  <button className="underline underline-offset-4 text-[#1c1d25] group-hover:text-white ease-linear duration-500 delay-300 text-center text-[30px]  capitalize sm:text-[40px] font-bold font-Arimo  decoration-[#37a5eb]">
                    Project Passion blend bar
                  </button>
                  <p className="text-[60px] sm:mr-[200px] group-hover:translate-x-[10px] sm:group-hover:translate-x-[50px] group-hover:text-white ease-linear duration-500 delay-300  text-black">
                    →
                  </p>
                </Link>
              )}
              {workId?._id === "652126f3722726a8fa5ccd7d" && (
                <Link
                  className="flex items-center justify-between"
                  href={`/works/${works[2]?._id}`}
                >
                  <button className="underline underline-offset-4 text-[#1c1d25] group-hover:text-white ease-linear duration-500 delay-300 text-center text-[30px]  capitalize sm:text-[40px] font-bold font-Arimo  decoration-[#37a5eb]">
                    Project Cleartouch
                  </button>
                  <p className="text-[60px] sm:mr-[200px] group-hover:translate-x-[50px] group-hover:text-white ease-linear duration-500 delay-300  text-black">
                    →
                  </p>
                </Link>
              )}
              {workId?._id === "652126f3722726a8fa5ccd7e" && (
                <Link
                  className="flex items-center justify-between"
                  href={`/works/${works[3]?._id}`}
                >
                  <button className="underline underline-offset-4 text-[#1c1d25] group-hover:text-white ease-linear duration-500 delay-300 text-center text-[30px]  capitalize sm:text-[40px] font-bold font-Arimo  decoration-[#37a5eb]">
                    Project PCosmetic
                  </button>
                  <p className="text-[60px] sm:mr-[200px] group-hover:translate-x-[50px] group-hover:text-white ease-linear duration-500 delay-300  text-black">
                    →
                  </p>
                </Link>
              )}
              {workId?._id === "652126f3722726a8fa5ccd7f" && (
                <Link
                  className="flex items-center justify-between"
                  href={`/works/${works[0]?._id}`}
                >
                  <button className="underline underline-offset-4 text-[#1c1d25] group-hover:text-white ease-linear duration-500 delay-300 text-center text-[30px]  capitalize sm:text-[40px] font-bold font-Arimo  decoration-[#37a5eb]">
                    Project Lilyane James
                  </button>
                  <p className="text-[60px] sm:mr-[200px] group-hover:translate-x-[50px] group-hover:text-white ease-linear duration-500 delay-300  text-black">
                    →
                  </p>
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default page;
