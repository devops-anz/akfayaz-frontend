import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
  {
    title: 'Business Consultancy',
    image: '/image/services/advisor.png',
    content: 'I provide expert guidance to help grow and streamline your business.'
  },
  {
    title: 'Personal  Coaching',
    image: '/image/services/consulting.png',
    content: 'I help you enhance your skills, mindset, and confidence for success.'
  },
  {
    title: 'Entrepreneurial Mentorship',
    image: '/image/services/mentorship.png',
    content: 'I guide entrepreneurs in building and scaling their business ideas.'
  },
  {
    title: 'Strategy Consulting',
    image: '/image/services/marketing.png',
    content: 'I create tailored marketing plans to boost your brand visibility.'
  },
  {
    title: 'Career Coaching',
    image: '/image/services/coaching.png',
    content: 'I assist in career planning, job transitions, and professional growth.'
  }
];


const Services = () => {
  // const [sliderIndex, setSliderIndex] = useState(0);

  const PrevButton = (props: any) => (
    <button {...props} className='custom-prev-button'>
      <IoIosArrowBack  size={37} />
    </button>
  );

  const NextButton = (props: any) => (
    <button {...props} className='custom-next-button'>
      <IoIosArrowForward  size={37} />
    </button>
  );

  const settings = {
    dots: false,
    slidesToShow: 4,
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
          slidesToShow: 3,
          arrows: true,
          dots: false,
          infinite: false

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          arrows: true,
          dots: false,
          infinite: false

        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: false,
          infinite: false

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          arrows: false,
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
    <div id='services' className='pb-10'>
      <div className='pt-[27px] lg:pt-[29px] '>
        {/* <p className="font-['Istok Web'] text-center text-base font-bold text-indigo-600">SERVICES</p>
        <h2 className="font-['Istok Web'] mx-auto mt-3 max-w-[565px] text-center text-lg font-bold text-zinc-800 max-md:px-5 lg:text-4xl">
          Experience a comprehensive IT solution for all your needs.
        </h2> */}
      </div>
      <div className='mx-auto mt-10 px-10 md:max-w-[850px] lg:max-w-[1225px]   '>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col">
                <div className="relative w-[50px] h-[50px] mb-4">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"

                  />
                </div>
                <h3 className='text-left text-lg font-bold text-zinc-800 mt-4'>{item.title}</h3>
                <p className='text-left text-sm text-zinc-600 mt-2 max-w-[250px]'>{item.content}</p>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
