'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
const CaseStudies = () => {
  const projects = [
    {
      "id": 1,
      "image": '/images/firstC.png',
      "title": "Lilyane James      ",
      "number":"01",
      'details':"Online shopping store since 2022      ",
      "button":"",
    },
    {
      "id": 2,
      "image": '/images/bar.png',
      "title": "Passion blend bar",
      "number":"02",
      'details':"passcion blend bar in london since 2018",
      "button":"",
    },
    {
      "id": 3,
      "image": '/images/clear.png',
      "title": "Cleartouch design   ",
      "number":"03",
      'details':" agency website begins since 2022",
      "button":"",
    },
    {
      "id": 4,
      "image": '/images/cos.png',
      "title": "Cosmetic website    ",
      "number":"04",
      'details':"it's a new cosmetic business website",
      "button":"",
    }
  ]
  const [divColor, setDivColor] = useState('#99999d');

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='py-[150px] bg-[#f3f3f3]' id='case'>

<h3 className='text-center text-[#b29487] text-[18px] sm:text-[24px] font-popping font-semibold tracking-widest	 leading-[30px]'> CASE STUDIES
</h3>
        <h2 className='text-center text-[40px] sm:text-[50px] font-extrabold font-sofia py-3  text-[#4a4a4a]'>Latest Works
</h2>
        
       
      <div className="w-full grid grid-cols-1 px-4 sm:px-8 gap-16 mx-auto   py-4 justify-center">

        {
          projects.map(p => 
            (
              <motion.div key={p.id} className="w-full shadow-gipShadow  lg:w-[700px] xl:w-[800px] 2xl:w-[980px] mx-auto mainBgC rounded-sm overflow-hidden nanas relative  group bg-cover bg-center h-[290px] sm:h-[480px]" style={{ backgroundImage: `url(${p.image})` }}>
        <div className="bg-[#204373] absolute  opacity-[0.5]  h-[480px] w-full"></div>
          <div className="bgC  h-[480px] w-full">
         
          </div>
          
              
              {
                p.id===1||p.id===3  ?  <div className="absolute top-0 h-full left-0 z-50 w-full">
                <div className="flex h-full  items-center">
                <div className="px-4 group-hover:translate-x-4 group-hover:translate-y-4  ease-in-out  duration-300  sm:px-20 ">
                        <h2 className='text-[30px] sm:text-[60px]  font-sofia font-bold text-white'>{p.title}</h2>
                        <h2 className='text-[15px] sm:text-[24px] font-popping tracking-widest  text-white'>{p.details}</h2>
                    <div className="py-4">
                    <div  className="relative  main-about inline ">
                          <button  className="aboutBt font-Arimo font-extraboldbold text-[15px] sm:text-[20px]">
                            Case Study
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
                                fill= "#ffffff" 
                                
                              ></path>{" "}
                            </g>
                          </svg> 
                           
                        
                         
                        </div>
                  </div>
    
                </div>
                </div>
    
    
               
    
                
                  </div>
         :   <div className="absolute  top-0 h-full right-0 z-50 w-full">
         <div className="flex h-full justify-end items-center">
         <div className="px-4 group-hover:translate-x-4 group-hover:translate-y-4  ease-in-out  duration-300  sm:px-20 ">
                 <h2 className='text-[30px] sm:text-[60px]  font-sofia font-bold text-white'>{p.title}</h2>
                 <h2 className='text-[15px] sm:text-[24px] font-popping tracking-widest  text-white'>{p.details}</h2>
             <div className="py-4">
             <div  className="relative  main-about inline ">
                   <button  className="aboutBt font-Arimo font-extraboldbold text-[15px] sm:text-[20px]">
                     Case Study
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
                         fill= "#ffffff" 
                         
                       ></path>{" "}
                     </g>
                   </svg> 
                    
                 
                  
                 </div>
           </div>

         </div>
         </div>


        

         
           </div>
              }

              {
                p.id===1||p.id===3  ?  <div className="h-[280px]  hidden sm:block  overflow-hidden relative mt-[-80px] justify-end w-full">
            
              
              
                <p className=' right-0 text-[150px] bottom-[-180px] group-hover:-bottom-[0] ease-in-out duration-300  text-end greek' data-text={`${p.number}`}>{p.number}</p>

          
          
            </div>
         :    <div className="h-[280px] hidden sm:block   overflow-hidden relative mt-[-80px] justify-end w-full">
            
              
              
         <p className=' text-[150px] left-0 bottom-[-180px] group-hover:-bottom-[0] ease-in-out duration-300  text-end greek' data-text={`${p.number}`}>{p.number}</p>

   
   
  </div>
              }
      
         

    </motion.div>
          ))
        }
      
      </div>
   
    
      




      
    </div>
  )
}

export default CaseStudies
