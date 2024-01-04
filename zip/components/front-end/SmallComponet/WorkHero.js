import Image from 'next/image'
import React from 'react'

const WorkHero = ({handleClick,currentTheme}) => {
  return (
    <div className="w-full absolute left-0  bottom-[10px] flex justify-center items-end ">
    <div className="group relative overflow-hidden  h-[230px] mb-[-100px] ">
      <p className="text-center  font-lato italic pb-5 sm:pb-0 font-bold  sm:my-3 text-[#5b5e73] dark:text-white text-[24px] leading-[30px]">
        Works
      </p>
        <Image
          width={100}
          height={70}
        onClick={handleClick}
        className="absolute top-[105px] group-hover:top-[70px] dark:h-[70px]  ease-in-out duration-200"
        src={
          currentTheme === "light"
            ? "/images/downArrow.svg"
            : "/images/icons8-arrow-30.png"
        }
        alt="down arrow"
      />
    </div>
  </div>
  )
}

export default WorkHero