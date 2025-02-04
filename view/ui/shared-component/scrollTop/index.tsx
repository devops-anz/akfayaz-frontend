"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className='fixed z-10 bottom-5 right-8 sm:bottom-8 sm:right-10 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 xl:bottom-10 xl:right-10'>
        <button className='' onClick={scrollToTop}>
        <FaArrowUp className='text-5xl text-black/60 bg-[#d9e2c6] p-2.5 shadow-lg ' />


          {/* <Image src={'/icon/scroll_to_top.png'} className='w-14' alt="scroll" height={50} width={50} /> */}
        </button>
      </div>
    )
  );
};

export default ScrollTop;