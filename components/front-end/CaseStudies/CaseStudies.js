




'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
const CaseStudies = () => {
  const [divColor, setDivColor] = useState('#99999d');

 

  return (
    <div className='py-[150px] bg-[#f3f3f3]' id='case'>

<h3 className='text-center text-[#b29487] text-[18px] sm:text-[24px] font-popping font-semibold tracking-widest	 leading-[30px]'> CASE STUDIES
</h3>
        <h2 className='text-center text-[40px] sm:text-[50px] font-extrabold font-sofia py-3  text-[#4a4a4a]'>Latest Works
</h2>
        
       
      <div className="mx-auto w-full flex  py-4 justify-center">
        <motion.div className="w-[980px] mainBgC rounded-sm overflow-hidden nanas relative  group bg-cover bg-center h-[480px]" style={{ backgroundImage: 'url(/images/firstC.png)' }}>
        <div className="bgC  h-[480px] w-full">
         
          </div>
          <div className="absolute top-0 left-0 z-50 w-full">
            ddadd
            <div className="h-[180px] overflow-hidden relative mt-[-100px] justify-end w-full">
            
              
              
              <p className='text-[100px] right-0 bottom-[-100px] group-hover:-bottom-[0] ease-in-out duration-300  text-end greek' data-text="01">01</p>

            
            
           </div>

            
          </div>


    </motion.div>
      </div>
   
    
      




      
    </div>
  )
}

export default CaseStudies


