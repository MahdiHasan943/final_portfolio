import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const PopupForm = ({ isOpen, onClose }) => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jaup7uq",
        "template_egwh5hx",
        form.current,
        "xswVE0o1jmqLyyIJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success("Successfully submitted form");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-form   z-[99999999999999!important] py-10  h-auto  md:h-[100%]  absolute top-0  left-0  w-full  my-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className=" flex  flex-col-reverse md:flex-none  z-[99999999999999!important]  md:grid grid-cols-2  h-full  w-[100vw] sm:w-[95%] mx-auto">
            <motion.div
              className="left-section relative bg-[#f2f2f2] shadow-summery  sm:mt-[100px] overflow-hidden h-[800px] md:h-[750px] xl:h-[700px]  2:xl:h-[600px] z-[99999999999999!important]  "
              initial={{ y: "-100%" }}
              animate={{ y: "0%", transition: { delay: 0.1, duration: 0.3 } }}
              exit={{
                y: "100%",
                transition: { duration: 0.3, ease: "easeInOut" },
              }} //
            >
              <div className="px-4 sm:px-8 bg-[#f2f2f2]   z-[99999999999999!important]   absolute top-0 lg:px-20  pt-20 pb-10">
                <p className="text-[#202128] font-bold capitalize text-[28px]  font-popping">
                  About me.
                </p>
                <p className="text-[#76777b] font-semibold  text-[14px] py-4 font-popping">
                  {" "}
                  Interactive Front-end developer.
                </p>
                <p className="text-[#76777b] font-semibold  text-[16px] leading-[30px]  font-popping pt-5 pb-4">
                  I'm Mahdi Hasan, a 24-years-old Bangladeshi{" "}
                  <span className="text-[#ed7d67]">
                    Freelance Front-end & Back-end developer.
                  </span>{" "}
                  I'm a weird guy who likes making weird things with web
                  technologies. <br />I like to{" "}
                  <span className="text-[#ed7d67]">resolve</span> design
                  problems, <span className="text-[#ed7d67]">create</span> smart
                  user interface and{" "}
                  <span className="text-[#ed7d67]">imagine</span> useful
                  interaction, developing rich web experiences &{" "}
                  <span className="text-[#ed7d67]">web applications.</span>{" "}
                  <br />
                  When not working or futzing around with code, I study how to
                  escape from University. Actually{" "}
                  <span className="text-[#ed7d67]">for hire.</span>
                </p>
                <div className="grid grid-cols-4 sm:pt-8  gap-4">
                  <div className="group relative pb-10  overflow-hidden">
                    <svg
                      className="w-[40px] sm:w-[55px] sm:h-[55px] group-hover:fill-[#61dafb] h-[40px]"
                      viewBox="0 0 128 128"
                    >
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                    </svg>
                    <p className="absolute text-center font-semibold  text-[14px] py-4 font-popping text-[#202128]   ease-in-out duration-300 top-[90px] group-hover:top-[40px] sm:group-hover:top-[60px]">
                      React.js
                    </p>
                  </div>
                  <div className="group relative pb-10  overflow-hidden">
                    <svg
                      className="w-[40px] sm:w-[55px] sm:h-[55px] group-hover:bg-[#94a0c1] h-[40px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                    >
                      <path d="M74.6 96.7c1 0 1.9-.8 1.9-1.9s-.9-1.8-1.9-1.8H50.4c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9h24.2zM83.9 100.4H41.1c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9H84c1 0 1.9-.8 1.9-1.9s-.9-1.9-2-1.9zM20.6 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zM37.3 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S39.4 24 37.3 24zM54.1 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S56.2 24 54.1 24z"></path>
                      <path d="M7.5 7.2V119h111.8V7.2H7.5zm3.7 3.8h104.4v18.6H11.2V11zm104.4 104.3H11.2v-82h104.4v82z"></path>
                      <path d="M47.5 81.4l1.7 1.4c.1 0 .1.1.2.1.4.3.7.5 1.1.7.2.1.5.3.7.4.4.2.7.4 1.1.6.3.2.6.3.9.5.3.1.6.3.9.4.6.3 1.3.5 1.9.7.2.1.5.1.7.2.5.1 1 .3 1.5.4.3.1.5.1.8.2.5.1 1 .2 1.5.2.2 0 .5.1.7.1.7.1 1.5.1 2.2.1s1.5 0 2.2-.1c.2 0 .5-.1.7-.1.5-.1 1-.1 1.5-.2.3 0 .5-.1.8-.1.5-.1 1-.2 1.5-.4.2-.1.4-.1.7-.2.6-.2 1.3-.4 1.9-.7.3-.1.6-.3.9-.4.3-.2.7-.3 1-.5.4-.2.7-.4 1-.6.2-.1.5-.3.7-.4.4-.2.7-.5 1.1-.7.1 0 .1-.1.2-.1l1.9-1.4-.1-.1c5.1-4.4 8.3-10.9 8.3-18.2C87.7 49.8 76.8 39 63.5 39S39.2 49.8 39.2 63.1c0 7.3 3.2 13.8 8.3 18.3zM58.4 83c-.7-.2-1.5-.4-2.2-.7-.1 0-.2-.1-.2-.1-.7-.3-1.5-.6-2.2-1l4.5-2.5c1.4-.8 2.3-2.2 2.3-3.8v-3.1l-.4-.5s-1.5-1.8-2.1-4.3l-.2-.9-.6-.4.1-2.8.6-.6v-4.9c0-.1-.1-1.4.8-2.5.9-1 2.5-1.5 4.8-1.5s3.9.5 4.8 1.5c1 1.1.8 2.4.8 2.5v4.1l.1.9.6.6v2.7c0 .1-.1.1-.1.1l-.9.3-.3.9c-.4 1.3-1 2.5-1.8 3.5-.2.2-.3.5-.5.6l-.5.5V75c0 1.6.9 3.1 2.4 3.9l4.8 2.4h-.1c-.7.3-1.3.6-2 .9-.1 0-.2.1-.3.1-.7.3-1.4.5-2.2.7-3.4.8-6.7.8-10 0 .1 0 0 0 0 0zm5-40.4c11.3 0 20.5 9.2 20.5 20.5 0 6.4-2.9 12.1-7.5 15.8-.1-.1-.2-.1-.3-.2l-6.5-3.2c-.2-.1-.3-.3-.3-.5v-1.9c.1-.1.2-.2.3-.4.8-1.1 1.5-2.4 2-3.8 1.1-.7 1.8-1.9 1.8-3.3v-2.7c0-.8-.2-1.5-.7-2.2v-3.1c.1-.7.1-3.1-1.7-5.2-1.6-1.8-4.2-2.8-7.6-2.8s-6 .9-7.6 2.8C54 54.5 54 57 54.1 57.6v3.1c-.4.6-.7 1.4-.7 2.2v2.7c0 1 .4 2 1.1 2.7.6 2.1 1.6 3.8 2.2 4.6V75c0 .2-.1.4-.3.5l-6 3.3c-.1 0-.1.1-.2.1-4.5-3.8-7.4-9.4-7.4-15.8.1-11.3 9.3-20.5 20.6-20.5z"></path>
                    </svg>
                    <p className="absolute text-center font-semibold  text-[14px] py-4 font-popping text-[#202128]   ease-in-out duration-300 top-[90px] group-hover:top-[40px] sm:group-hover:top-[60px]">
                      UI/UX
                    </p>
                  </div>

                  <div className="group relative pb-10  overflow-hidden">
                    <svg
                      className="w-[40px] sm:w-[55px] sm:h-[55px] group-hover:fill-[#e54d26] h-[40px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"></path>
                    </svg>
                    <p className="absolute text-center font-semibold  text-[14px] py-4 font-popping text-[#202128]   ease-in-out duration-300 top-[90px] group-hover:top-[40px] sm:group-hover:top-[60px]">
                      is Fun.
                    </p>
                  </div>

                  <div className="group relative pb-10  overflow-hidden">
                    <svg
                      className="w-[40px] sm:w-[55px] sm:h-[55px] h-[40px] group-hover:fill-[#ecd120]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path fill="currentColor" d="..."></path>
                      <path d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"></path>
                    </svg>
                    <p className="absolute text-center font-semibold  text-[14px] py-4 font-popping text-[#202128]   ease-in-out duration-300 top-[90px] group-hover:top-[40px] sm:group-hover:top-[60px]">
                      Semicolons.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className=" absolute bottom-0 w-full bg-[#fff] py-6 px-4 sm:px-8"></div> */}
            </motion.div>
            <motion.div
              className="right-section relative   bg-[#202128]  z-[99999999999999!important]  sm:mt-[100px]   shadow-summery h-[800px] overflow-hidden md:h-[750px] xl:h-[700px]  2:xl:h-[600px] "
              initial={{ y: "100%" }}
              animate={{ y: "0%", transition: { delay: 0.2, duration: 0.3 } }}
              exit={{
                y: "100%",
                transition: { duration: 0.3, ease: "easeInOut" },
              }} // Slowly close the right section
            >
              <div className="px-4 sm:px-8  z-[99999999999999!important]  w-full  absolute  lg:px-20  py-20">
                <button
                  onClick={onClose}
                  className="text-white  text-[70px] leading-[80px] font-normal absolute right-[40px] top-[50px] md:top-[30px]"
                >
                  <svg
                    className=""
                    fill="#ffffff"
                    height="50px"
                    width="50px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-110.59 -110.59 681.95 681.95"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                  >
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
                  </svg>
                </button>
                <p className="text-[#dadada] font-bold capitalize text-[28px] font-popping">
                  Let's talk
                </p>
                <p className="text-[#dadada] font-semibold my-4 text-[13px] font-popping">
                  New projects, freelance inquiry or even a coffee.
                </p>
                <form onSubmit={sendEmail} ref={form} className="  mt-4 w-full ">
                  <div className="mb-4 group w-full">
                    <label
                      className="block text-[#dadada] text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      className="shadow bg-[#202128] border border-t-0 border-l-0 border-r-0 border-white group-hover:border-0 text-[#fff]  bg-left-bottom bg-gradient-to-t from-[#4e76cc]  to-[#132751]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-linear  relative rounded w-full py-2 px-3 leading-tight outline-none focus:outline-none focus:shadow-outline"
                      name="user_name"

                      type="text"
                    />
                  </div>

                  <div className="mb-4 group">
                    <label
                      className="block text-[#dadada]  text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      className="shadow bg-[#202128] border border-t-0 border-l-0 border-r-0 border-white group-hover:border-0 text-[#fff]  bg-left-bottom bg-gradient-to-t from-[#4e76cc]  to-[#132751]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-linear  relative rounded w-full py-2 px-3 leading-tight outline-none focus:outline-none focus:shadow-outline"
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-6 group">
                    <label
                      className="block text-[#dadada] text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      className="shadow bg-[#202128] border border-t-0 border-l-0 border-r-0 border-white group-hover:border-0 text-[#fff]  bg-left-bottom bg-gradient-to-t from-[#4e76cc]  to-[#132751]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-linear  relative rounded w-full py-2 px-3 leading-tight outline-none focus:outline-none focus:shadow-outline"
                      name="message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex  items-center justify-between">
                    <button type="submit" className="aboutBt font-Arimo font-extraboldbold text-[20px]">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
