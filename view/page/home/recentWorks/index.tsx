"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { poppins } from 'styles/fonts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TfiInstagram } from "react-icons/tfi";
import ProjectModal from 'view/ui/shared-component/component/title/modal';

const data = [
  {
    id: 1,
    image: '/image/recent-projects/1.jpg'
  },
  {
    id: 2,
    image: '/image/recent-projects/2.jpg'
  },
  // {
  //   id: 3,
  //   image: '/image/recent-projects/3.jpg'
  // }
];

const RecentWorks = () => {
  const [open, setOpen] = useState(false);

  const PrevButton = (props: any) => (
    <button {...props} className='custom-prev-button-1'>
      <IoIosArrowBack size={20} />
    </button>
  );

  const NextButton = (props: any) => (
    <button {...props} className='custom-next-button-1'>
      <IoIosArrowForward size={20} />
    </button>
  );

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    infinite: true,
    fade: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
          infinite: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
          infinite: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
          infinite: false

        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          infinite: false
        }
      }
    ]
  };

  return (
    <div>
      <div className='container-custom px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col md:flex-row py-10 sm:py-16 md:py-20 gap-8 md:gap-0 md:items-center'>
          <div className='w-full px-5 md:px-0 md:w-5/12 space-y-4 sm:space-y-6'>
            <h1 className={`${poppins.className} leading-tight sm:leading-[1.2] md:leading-[70px] text-3xl sm:text-4xl md:text-[55px] font-bold`}>
              Recent <br className='hidden md:block' /> Awards and    <span>  </span>
              <br className='hidden md:block' />
              Seminar
            </h1>
            <div className='flex items-center gap-2 pt-2 text-gray-500'>
              <span>
                <TfiInstagram />
              </span>
              Follow me -
            </div>
          </div>

          <div className='pr-1 md:pr-0 w-full md:w-7/12'>  
            <Slider {...settings}>
              {data.map(item => (
                <div key={item.id} className='max-w-full'>
                  <Image
                    src={item.image}
                    alt={item.id.toString()}
                    className='object-cover object-center hover:cursor-pointer'
                    style={{ height: '200px', width: '400px' }}
                    width={400}
                    height={400}
                    onClick={() => setOpen(true)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <ProjectModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RecentWorks;
