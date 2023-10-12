"use client";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
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
  // console.log(workId);
// fetch workdetails
useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/worksdetails');
    const data = await response.json();
    setWorkDetails(data);
  };
  fetchPosts();
}, []);
  // console.log(workDetails);
  const filter = workDetails?.filter(wd => wd?.title === workId?.title)
  console.log(filter);

  return (
    <div className="">
      <div className=" w-full relative h-[500px] sm:h-[100vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${workId?.image})` }}
      ><div className="bg-[#000] absolute top-0 left-0 px-4 sm:px-16 opacity-[0.5] w-full h-full">
    
          
        </div>
        <div className="z-[100!important] flex flex-col justify-center items-center absolute top-0 left-0 px-4 sm:px-16  w-full h-full">
    
        <div className="pt-8 sm:pt-0">

<h1 className="text-white text-center text-[30px]  capitalize sm:text-[80px] font-bold font-Arimo">{filter[0]?.title}</h1>
<p  className="text-[#f6f5f5] text-center capitalize text-[16px] sm:text-[24px] font-semibold tracking-wide font-popping">{ workId?.details}</p>
          </div>
        </div>
        <div className="absolute px-4 top-0 left-0 w-full h-full flex justify-center items-end">          <img className="mx-auto w-full sm:w-[80%]" src="/images/role.png" alt="" />
</div>
        
     
      </div>
      {/* after hero */}
      <div className="px-4  bg-[#060c10] py-14 sm:px-16">
        <div className="">
        <h1 className="text-white text-center text-[25px]  capitalize sm:text-[60px] font-extrabold font-sofia">The Project</h1>
          <div className="mx-auto sm:w-[650px]">
          <p  className="text-[#f6f5f5]  capitalize text-[16px] sm:text-[18px]  tracking-wide font-popping">{ filter[0]?.details}</p>
          <div className="py-8 text-center">
              <a target="_blank" href={filter[0]?.ref}>
              <div
                      
                      className="relative group main-about inline "
                    >
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
      {/*  */}
    </div>
  );
};

export default page;
