import React from 'react';
import { poppins } from 'styles/fonts';
import { PiQuotes } from 'react-icons/pi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Testimonials = ({ testimonialsData }: { testimonialsData?: any }) => {

  // console.log("testimonialsData", testimonialsData)

  const PrevButton = (props: any) => (
    <button {...props} className='hidden md:block custom-prev-button'>
      <IoIosArrowBack size={37} />
    </button>
  );

  const NextButton = (props: any) => (
    <button {...props} className='custom-next-button'>
      <IoIosArrowForward size={37} />
    </button>
  );

  const settings = {
    dots: false,
    slidesToShow: 2,
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
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          infinite: false

        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
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
    <div id='testimonials' className='px-6 md:mx-10 mb-6 sm:mb-8 md:mb-10 bg-[#faf8f7] pb-10 sm:pb-16 md:pb-28'>
      <div className='container-custom'>
        <div className='mb-10 sm:mb-16 md:mb-20'>
          <p className={`font-[700] text-black ${poppins.className} pt-12 sm:pt-16 md:pt-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
            {testimonialsData?.title}
          </p>
          <p className='mb-3 sm:mb-4 md:mb-5 pt-6 sm:pt-8 md:pt-10'>
            {testimonialsData?.subtitle}
          </p>
          <hr className='border border-solid border-gray-400/50' />
        </div>

        <div className='px-3 sm:px-4 md:px-6'>
          <Slider {...settings}>
            {testimonialsData.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className='relative bg-white shadow-xl md:shadow-none sm:mx-0 p-4 sm:p-6 md:p-8'>
                <div className='hidden md:block absolute right-4 sm:right-6 md:right-8 top-3'>

                  <PiQuotes size={80} className='text-[#cfd8b9] sm:text-[90px] md:text-[100px]' />
                </div>

                <div className='mb-4 sm:mb-5 md:mb-6  flex items-center space-x-3 sm:space-x-4'>
                  <div className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded-full'>
                    <img src={testimonial.image_url} alt={testimonial.name} className={`h-full w-full pt-1 object-cover bg-slate-300 `} />
                  </div>

                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900'>{testimonial.name}</h3>
                    <p className='mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600'>{testimonial.position}</p>
                  </div>
                </div>

                <blockquote className='italic leading-relaxed text-sm sm:text-base text-gray-400'>{testimonial.testimonial}</blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
