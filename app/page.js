'use client'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
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
      <div className="mother sectionsPadding bg-[white] dark:bg-[#000]  z-[100000px]">
        <div className="grid grid-cols-4 h-[200px]   absolute top-0 ">
        <img src="/images/1.png" data-speed="15" className='layer Img' alt="icon"      />
        <img src="/images/2.png" data-speed="5" className='layer Img' alt="icon"      />
        <img src="/images/3.png" data-speed="2" className='layer Img' alt="icon"      />
        <img src="/images/4.png" data-speed="6" className='layer Img' alt="icon"      />
        </div>
        <div className="grid grid-cols-4 h-[200px]   absolute top-[40%]">
        <div className="col-span-2 ">
            <img src="/images/5.png" data-speed="30" className='layer mt-[-30px] w-[300px]' alt="icon" />
            
            <div className="mt-[-150px] flex justify-center">
              <div className="">
              <h1 className=' font-bold text-[80px] font-Arimo leading-[90px] '> Mahdi Hasan</h1>
              <p className='font-lato italic my-10 text-[24px] leading-[30px]'> Interactive Front-end Developer</p>
              <button className='aboutBt font-Arimo font-extraboldbold text-[20px]'>About Me</button>
             </div>
            </div>

            
          </div>
          
        <img src="/images/7.png" data-speed="4" className='layer' alt="icon"      />
        <img src="/images/8.png" data-speed="-9" className='layer' alt="icon"      />
          
        </div>

        <div className="grid grid-cols-4 h-[200px]   absolute bottom-0  ">
        <img src="/images/9.png" data-speed="-16" className='ml-[-100px] layer' alt="icon"      />
        <img src="/images/10.png" data-speed="-7" className='layer' alt="icon"      />
        <img src="/images/6.png" data-speed="-2" className='layer' alt="icon"      />

        <img src="/images/12.png" data-speed="5" className='layer' alt="icon"      />
      </div>  
      
    </div>
   
    <svg xmlns="http://www.w3.org/2000/svg" className='my-20' width="37.196" height="32.213" viewBox="0 0 37.196 32.213"><symbol id="triangle"><svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236"><path fill="none" stroke="#CF4981" stroke-width="3" stroke-miterlimit="10" d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"></path></svg></symbol></svg>
      
</>  
  );
}
