import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
  {
    title: 'Consultancy',
    image: '/image/services/advisor.png',
    content: 'I help businesses grow, streamline operations, and unlock their full potential.'
  },
  {
    title: 'Sales',
    image: '/image/services/sales.png',
    content: 'I craft winning sales strategies that drive revenue and build lasting client relationships'
  },
  {
    title: 'Marketing',
    image: '/image/services/marketing.png',
    content: 'I create innovative marketing solutions that amplify brand visibility and engagement.'
  },
  {
    title: 'Procurement',
    image: '/image/services/procurement.png',
    content: 'I optimize procurement processes to ensure cost-effective and efficient resource management.'
  },
  {
    title: 'Life Coaching',
    image: '/image/services/coaching.png',
    content: 'I empower individuals to overcome challenges, achieve goals, and unlock their best selves..'
  },
  {
    title: 'Startup Mentorship',
    image: '/image/services/mentorship.png',
    content: 'I guide startups from idea to execution, helping them scale and succeed.'
  },
  {
    title: 'Financial Consulting',
    image: '/image/services/financial-consulting.png',
    content: 'I provide expert financial strategies to drive growth, stability, and profitability.'
  },

  {
    title: 'Management Consulting',
    image: '/image/services/management-consulting.png',
    content: 'I refine leadership, processes, and strategies to enhance business efficiency and success.'
  },
  {
    title: 'Web Designing',
    image: '/image/services/web-design.png',
    content: 'I craft stunning, user-friendly websites that captivate audiences and elevate brands.'
  },
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
          slidesToShow: 2,
          arrows: true,
          dots: false,
          infinite: false
        }
      }
    ]
  };

  return (
    <div id='' className='pb-10'>
      <div className='pt-[27px] lg:pt-[29px] '>
        {/* <p className="font-['Istok Web'] text-center text-base font-bold text-indigo-600">SERVICES</p>
        <h2 className="font-['Istok Web'] mx-auto mt-3 max-w-[565px] text-center text-lg font-bold text-zinc-800 max-md:px-5 lg:text-4xl">
          Experience a comprehensive IT solution for all your needs.
        </h2> */}
      </div>
      <div className='mx-auto mt-10 px-4 md:px-10 md:max-w-[850px] lg:max-w-[1225px]   '>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="pl-5 sm:pl-3">
              <div className="flex flex-col items-center">
                <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-4">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-lg mx-auto"
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
