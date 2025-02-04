import Image from 'next/image';
import React from 'react';
import { poppins } from 'styles/fonts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TfiInstagram } from "react-icons/tfi";


const data = [
  {
    id: 1,
    image: '/image/recent-projects/1.webp'
  },
  {
    id: 2,
    image: '/image/recent-projects/1.webp'
  },
  {
    id: 3,
    image: '/image/recent-projects/1.webp'
  }
];

const RecentWorks = () => {
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
    // autoplay: false,
    // speed: 600,
    // autoplaySpeed: 4000,
    // pauseOnHover: false,
    arrows: true,
    // className: 'center',
    // centerMode: true,
    infinite: true,
    // centerPadding: '0px',
    fade: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,

    // afterChange: (index: number) => setSliderIndex(index),

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
          arrows: false,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          infinite: false
        }
      }
    ]
  };

  return (
    <div>
      <div className='container-custom '>
        <div className='flex py-20 items-center'>
          <div className='w-5/12'>
            <h1 className={`${poppins.className} leading-[70px] text-[55px] font-bold`}>
              More Recent <br /> Works on
              <br />
              Instagram
            </h1>
            <div className='flex items-center gap-2 pt-2 text-gray-500'>
               <span>
               <TfiInstagram />

                </span>  Follow me -
            </div>
          </div>

          <div className='w-7/12 '>  
            <Slider {...settings}>
              {data.map(item => (
                <div key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.id.toString()}
                    className='object-cover object-center'
                    style={{ height: '200px', width: '600px' }}
                    width={400}
                    height={400}


                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
