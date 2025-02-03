import React from 'react';
import { poppins } from 'styles/fonts';
import { PiQuotes } from 'react-icons/pi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonials = [
  {
    name: 'Jessica Gordons',
    image: 'image/testimonials/profile-pic-1.webp',
    project: 'PRIVATE HOUSE, USA, 2024.',
    quote:
      'We decided to approach the construction of our country house seriously and hire an experienced architect. Cooperation with Adam has brought us only positive emotions! From the first minute, we were on the same wavelength, and the results are gorgeous!'
  },
  {
    name: 'Douglas Fenders',
    image: 'image/testimonials/profile-pic-2.webp',
    project: 'INTERIOR DESIGN, USA, 2024.',
    quote:
      'We did a complete replanning of our apartment and hired Adam for a design project and supervision. It is very pleasant to work and communicate with Adam, he immediately understands our ideas and easily implements them, first in a 3D model, and then live.'
  }
];

const Testimonials = () => {
  const PrevButton = (props: any) => (
    <button {...props} className='custom-prev-button'>
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
    <div className='mx-10 mb-10 bg-[#faf8f7] pb-20'>
      <div className='container-custom'>
        <div className='mb-20'>
          <p
            className={`font-[700] text-black ${poppins.className} pt-24 text-4xl sm:text-5xl md:text-5xl lg:text-6xl`}
          >
            Words From My Clients
          </p>
          <p className='mb-5 pt-10'>
            Working with each client takes several months. I provide an individual approach and fresh solutions.
          </p>
          <hr className='border border-solid border-gray-400' />
        </div>

        <div className='px-6'>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='relative bg-white p-8'>
                {/* Quote marks decoration */}

                <div className='absolute right-8 top-3'>
                  <PiQuotes size={100} className='text-[#cfd8b9]' />
                </div>

                <div className='mb-6 flex items-center space-x-4'>
                  {/* Profile Image */}
                  <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-full'>
                    <img src={testimonial.image} alt={testimonial.name} className='h-full w-full object-cover' />
                  </div>

                  {/* Name and Project */}
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900'>{testimonial.name}</h3>
                    <p className='mt-3 text-sm text-gray-600'>{testimonial.project}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className='italic leading-relaxed text-gray-400'>{testimonial.quote}</blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
