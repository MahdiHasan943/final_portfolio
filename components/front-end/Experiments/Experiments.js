import React from 'react'
import motion from "framer-motion"
const Experiments = () => {
 
  return (
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
              <div className="group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200   w-[250px] h-[250px] bg-center bg-cover rounded-full" style={{backgroundImage: 'url(/images/x-times.gif)'}}>

              </div>

            </div>
          </div>
        
      </div>
            
      </div>
    </div>
  )
}

export default Experiments