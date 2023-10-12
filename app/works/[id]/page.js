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
  const filter = workDetails.filter(wd => wd?.title === workId?.title)
  console.log(filter);
  return (
    <div className="h-full mt-[150px] w-full bg-pink-300">
      <p className="text-white text-[50px] text-center">
        {workId?.title} <br /> <br />
        Work in progress
      </p>
    </div>
  );
};

export default page;
