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
      <div className="mother bg-[#ebebeb] dark:bg-[#1c1d25]  z-[100000px]">
        <div className="grid grid-cols-4 h-[200px]   absolute top-0 ">
        <img src="/images/1.png" data-speed="15" className='layer Img' alt="icon"      />
        <img src="/images/2.png" data-speed="5" className='layer Img' alt="icon"      />
        <img src="/images/3.png" data-speed="2" className='layer Img' alt="icon"      />
        <img src="/images/4.png" data-speed="6" className='layer Img' alt="icon"      />
        </div>
        <div className="grid grid-cols-4 h-[200px]   absolute top-[40%]">
        <div className="col-span-2 ">
        <img src="/images/5.png" data-speed="8" className='layer w-[300px]' alt="icon" />

            
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
   
  


</>  
  );
}
