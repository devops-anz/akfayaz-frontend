import { poppins } from '../../../../styles/fonts'; // Import poppins




const Hero = () => {


  return (
    <div
      className='h-[50vh]  md:h-[100vh] mt-12 sm:mt-16 md:mt-0 mx-4 sm:mx-8 md:mx-10'
      style={{backgroundImage: "url('/image/hero/cover.png')", backgroundSize: "cover", backgroundPosition: "center"}}
    >
      <div className='flex flex-col justify-center h-full'>
        <div className='container-custom pl-4 sm:pl-0'>
          <p className={`text-black font-[700] ${poppins.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
            Hello,<br className="sm:hidden" /> I'm ADAM!
          </p>
          <p className='text-black text-xl sm:text-2xl md:text-3xl font-[600] mt-6 sm:mt-8 md:mt-12'>
            Licensed architect <br className="sm:hidden" /> in New York —
          </p>
          <p className='text-black font-[500] mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3 border-2 border-black border-solid hover:bg-black hover:text-white w-fit transition-all cursor-pointer ease-in-out duration-300'>
            Contact Me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
