import { poppins } from '../../../../styles/fonts'; // Import poppins

const Hero = ({ heroData }: { heroData: any }) => {

  // console.log(heroData, heroData)

  return (
    <div
      className={`mx-3 h-[25vh] mt-20 bg-cover bg-center sm:mx-6 sm:mt-12 sm:h-[70vh] md:mx-10 md:mt-40 md:h-[75vh] lg:h-[60vh] xl:h-[90vh] sm:lg:px-10 bg-[url('/image/hero/cover.webp')] bg-no-repeat `}
    >
      <div className='flex h-full  flex-col justify-center'>
        <div className='container-custom px-4 sm:px-6 md:px-8 lg:px-0'>
          <p
            className={`font-[700] text-[${heroData?.title_color}] ${poppins.className} mt-5 text-[27px] leading-tight sm:text-4xl sm:leading-snug md:text-6xl md:leading-tight lg:text-7xl`}
          >
            {heroData?.title}
          </p>
          <p className={`mt-4 text-sm font-[600] text-[${heroData?.description_color}] sm:mt-6 sm:text-xl md:mt-10  md:text-3xl max-w-[200px] md:max-w-[400px] lg:max-w-[600px]`}>
            {heroData?.description}
          </p>
          <a href='#contact-me'>
            <p className={`mt-6 mb-4 w-fit cursor-pointer border-2 border-solid border-[${heroData?.button_bg_color}] px-4 py-2 text-sm font-[500] text-[${heroData?.button_text_color}] transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:mt-8 sm:px-5 sm:py-3 sm:text-base md:mt-10 md:text-lg`}>
              {heroData?.button_text}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
