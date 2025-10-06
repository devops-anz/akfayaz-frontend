import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Services = ({ serviceData }: { serviceData: any }) => {
  // console.log('serviceData', serviceData)
  // const [sliderIndex, setSliderIndex] = useState(0);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: true,
    // className: 'center',
    // centerMode: true,
    infinite: true,
    // centerPadding: '10px',
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,   
          infinite: true,
        }
      }
    ]
  };

  return (
    <div id='' className='max-w-[1200px] mx-auto pb-0 sm:pb-0'>
      <div className='pt-[27px] lg:pt-[29px] '>
      </div>
      <div className='mx-auto mt-10 px-4 md:px-10 md:max-w-[850px] lg:max-w-[1225px]   '>
        <Slider className='px-2' {...settings}>
          {serviceData.map((item: any, index: number) => (
            <div key={index} className="px-1.5">
              <div className="flex flex-col items-center">
                <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-4">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <h3 className='text-center text-base  md:text-lg font-bold text-zinc-800 mt-4'>{item.title}</h3>
                <p className='text-center text-sm text-zinc-600 mt-2 max-w-[250px]'>{item.description}</p>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
