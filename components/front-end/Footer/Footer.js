'use client'
import React, { useState } from 'react'

const Footer = () => {

  const [color, setColor] = useState(false);
  

  const navLink = [
    {
      "title": "Twitter",
      "ref": "",
      "activeColor":"Cse",
    },
    {
      "title": "          Linkedin      ",
      "ref": "",
      "activeColor":"Experiments",
    },
    {
      "title": "Facebook",
      "ref": "",
      "activeColor":"Skills",
    },
    
    {
      "title": "          Github      ",
      "ref": "",
      "activeColor":"Contact",
    },
  ]
  return (
    <div className='sectionsPadding bg-[#202128]'>
      <div className="py-10 ">
        <div className="flex justify-center text-center w-[100px] mx-auto">
       <img className='my-4' src="/images/fM.png" alt="" />
   </div>
        <div className="flex justify-center gap-4 sm:gap-8">
        {
        navLink.map(nav => (
          
        <a
          
          onClick={() => {
      
            setColor(nav?.activeColor);
          }}
          className={`${
            color === nav?.activeColor
              ? "  group text-[#fafafa] dark:text-white transition-all duration-300 ease-in-out "
              : "text-[#fafafa] dark:text-white "
          } text-[20px] font-bold  `}
        >{nav.title}

          <div className="bg-left-bottom bg-gradient-to-t from-[#f03937] to-[#FF413D]    pb-3  md:pb-2      bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] duration-500 ease-out"></div>
        </a>
        ))
      }
        </div>
    <p className='text-center text-[#fafafa] text-[16px] mt-16'>@2023 ClearTouch Design | All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer