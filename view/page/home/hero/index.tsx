import { poppins } from '../../../../styles/fonts'; // Import poppins

const Hero = () => {
  return (
    <div
      className='h-[60vh] sm:h-[70vh] md:h-[100vh] mt-8 sm:mt-12 md:mt-0 mx-3 sm:mx-6 md:mx-10'
      style={{backgroundImage: "url('/image/hero/cover.webp')", backgroundSize: "cover", backgroundPosition: "center"}}
    >
      <div className='flex flex-col justify-center h-full'>
        <div className='container-custom px-4 sm:px-6 md:px-8 lg:px-0'>
          <p className={`text-black font-[700] ${poppins.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight sm:leading-snug md:leading-tight`}>

            Hello,<br className="md:hidden" /> I'm Fayaz!
          </p>
          <p className='text-black text-lg sm:text-xl md:text-3xl font-[600] mt-4 sm:mt-6 md:mt-10'>
          Eager to help you with  Sales, Marketing, <br /> Procurement, & Acquisition <br className="md:hidden" /> —
          </p>
          <a href="#contact">

          <p className='text-black font-[500] mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 sm:py-3 border-2 border-black border-solid hover:bg-black hover:text-white w-fit transition-all cursor-pointer ease-in-out duration-300'>
            Contact Me
          </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
