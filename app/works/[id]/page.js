'use client'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

const [wdetails,setWdetails]=useState()
   
      useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/works/${params?.id}`);
          const data = await response.json();
          setWdetails(data);
        };
        fetchPosts();
      }, [params?.id]); 
    console.log(wdetails);
  return (
      <div className='h-full mt-[150px] w-full bg-pink-300'>
          <p className='text-white text-[50px] text-center'>
            {wdetails?.title} <br /> <br />
            Work in progress</p>
          </div>
  )
}

export default page