"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      // You can customize the options here
      duration: 1000,
      once: true,
    });
  }, []);
};

export default useAOS;