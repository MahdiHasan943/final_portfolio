import React from 'react'
import motion from "framer-motion"
const Experiments = () => {
 
  return (
    <section className="">
      <div className="bg-[#f3f3f3] py-20">
        <h3 className='text-center text-[#b29487] text-[18px] sm:text-[24px] font-popping font-semibold tracking-widest	 leading-[30px]'>EXPERIMENTS & OPEN SOURCE</h3>
        <h2 className='text-center text-[40px] sm:text-[50px] font-extrabold font-sofia py-3  text-[#4a4a4a]'>Web is Fun</h2>
        
    </div>
   
    <div className='bg-white'>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div
        className=" h-[450px]  group shadow-sm rounded-sm relative overflow-hidden mainbgEx"
        >
          <div className="bgEx  h-[450px] w-full">

          </div>
          <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
            <div className="flex w-full h-full justify-center items-center">
              <div className="  w-[250px] group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200  h-[250px] bg-center bg-cover rounded-full" style={{backgroundImage: 'url(/images/codepen-loader.gif)'}}>

              </div>

            </div>
          </div>
        
        </div>
        
        <div
        className=" h-[450px] group shadow-gipShadow rounded-sm relative overflow-hidden mainbgEx"
        >
          <div className="bgEx  h-[450px] w-full">

          </div>
          <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
            <div className="flex w-full h-full justify-center items-center">
              <div className="  w-[250px] group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200  h-[250px] bg-center bg-cover rounded-full" style={{backgroundImage: 'url(/images/search-context.gif)'}}>

              </div>

            </div>
          </div>
        
        </div>
        
        <div
        className=" h-[450px] group shadow-ButtonShadow rounded-sm relative overflow-hidden mainbgEx"
        >
          <div className="bgEx  h-[450px] w-full">

          </div>
          <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
            <div className="flex w-full h-full justify-center items-center">
              <div className="  w-[250px] h-[250px] group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200  bg-center bg-cover rounded-full" style={{backgroundImage: 'url(/images/brick.png)'}}>

              </div>

            </div>
          </div>
        
      </div>
        
      <div
        className=" h-[450px] group  shadow-summery rounded-sm relative overflow-hidden mainbgEx"
        >
          <div className="bgEx  h-[450px] w-full">

          </div>
          <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
            <div className="flex w-full h-full justify-center items-center">
              <div className="group-hover:w-[300px] group-hover:h-[300px]  ease-in-out duration-200 w-[250px] h-[250px] lg:w-[200px] lg:h-[200px]   xl:w-[250px] xl:h-[250px] bg-center bg-cover rounded-full" style={{backgroundImage: 'url(/images/x-times.gif)'}}>

              </div>

            </div>
          </div>
        
      </div>
            
      </div>
      </div>
      </section>
  )
}

export default Experiments