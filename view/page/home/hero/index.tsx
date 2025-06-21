import { poppins } from '../../../../styles/fonts'; // Import poppins

const Hero = () => {
  return (
    <div
      className={`mx-3 h-[27vh] mt-20 bg-cover bg-center sm:mx-6 sm:mt-12 sm:h-[70vh] md:mx-10 md:mt-0 md:h-[100vh] bg-[url('/image/hero/cover.webp')] bg-no-repeat `}
    >
      <div className='flex h-full flex-col justify-center'>
        <div className='container-custom px-4 sm:px-6 md:px-8 lg:px-0'>
          <p
            className={`font-[700] text-black ${poppins.className} mt-5 text-3xl leading-tight sm:text-4xl sm:leading-snug md:text-6xl md:leading-tight lg:text-7xl`}
          >
            Hello,
             I'm Fayaz!
          </p>
          <p className='mt-4 text-sm font-[600] text-black sm:mt-6 sm:text-xl md:mt-10 md:text-3xl'>
            Eager to help you with <br className='md:hidden'/> Sales, Marketing, <br /> Procurement & Acquisition <br className='md:hidden' /> <span className='hidden md:inline'>-</span> 
          </p>
          <a href='#contact-me'>
            <p className='mt-6 mb-4 w-fit cursor-pointer border-2 border-solid border-black px-4 py-2 text-sm font-[500] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:mt-8 sm:px-5 sm:py-3 sm:text-base md:mt-10 md:text-lg'>
              Contact Me
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
