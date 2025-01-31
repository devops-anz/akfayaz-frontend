import Image from 'next/image';
import Link from 'next/link';
import { HiMailOpen } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer
      // style={{ background: "linear-gradient(100deg, #0A1240 0%, #043E42 100%)" }}
      className='body-font relative        z-20 overflow-hidden bg-indigo-700 text-white duration-700'
    >
      <div className='absolute bottom-0 right-0 -z-50 hidden w-[419px] lg:block '>
        <Image
          src='/image/hero/half-circle.png'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          width={1121}
          height={1121}
          alt='circle'
          className=''
        />
      </div>
      <div className='absolute -left-10 top-0 -z-10 hidden h-[310px] w-[345px] md:block'>
        <Image
          src='/icon/med-circle.svg'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          width={345}
          height={345}
          alt='med circle'
        />
      </div>
      <div className='absolute  bottom-0 left-[206px] -z-10 hidden w-[205px] md:block '>
        <Image src='/icon/small-circle.svg' width={500} height={500} alt='med circle' />
      </div>

      <div className='container-custom hidden md:block md:pt-[70px] lg:pt-[120px]  '>
        <div className='flex flex-col justify-between gap-6 px-5 md:flex-row  xl:gap-0 '>
          <div className='flex flex-col gap-y-[29px] lg:flex-row lg:gap-x-[25px] xl:gap-x-[99px]'>
            <div className='flex gap-[11px]   text-xl font-bold text-white'>
              <HiMailOpen size={25} />
              <a href='mailto:support@nazx.com.au' className='text-white'>
                support@nazx.com.au
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-y-[20px] lg:flex-row lg:gap-x-[25px] xl:gap-x-[99px]'>
            <a
              href='https://www.google.com/maps/search/?api=1&query=6%2F27+Shadforth+Street%2C+Wiley+Park+NSW+2195%2C+Australia'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white'
            >
              <div className='text-xl font-bold text-white'>
                <div className='flex gap-[11px]'>
                  <MdLocationOn size={25} />
                  6/27 Shadforth street,
                </div>
                <p className='pl-10 text-sm font-normal text-white'>Wiley park-2195</p>
              </div>
            </a>
          </div>
          <Link href='/contact-us' className='z-10 flex gap-5 text-xl font-bold text-white'>
            GET IN TOUCH
            <Image width={20} height={20} className='h-5 w-5 pt-1' alt='arrow' src={'/icon/angle-right.svg'} />
          </Link>
        </div>
        <div className='container-custom  border-b-2 border-[#9382FF] pb-[67px]'></div>
      </div>
      <div className='md:container-custom mx-auto grid justify-center gap-x-8 gap-y-12 px-[16px]  pt-10  '>
        <div className=''>
          <a className='title-font flex items-center justify-center font-medium  text-white  duration-700'>
            <span>
              <Image width={1000} height={1000} className='object-fit w-8' alt='logo' src={'/logo/logo-small.png'} />
            </span>
            <span className='pt-1 text-[25px] font-bold text-white '>nazx x innovation</span>
          </a>
          <p className='mt-4  text-center text-base font-normal text-white md:pr-8 lg:pr-5'>
            Access top-tier web solutions to address
            <br />
            your tech challenges with ease.
          </p>
          {/* <div className='flex items-center gap-4 pt-10 text-white'>
            <div className='rounded-full border border-solid border-white p-3'>
              <RiFacebookFill size={16} />
            </div>

            <div className='rounded-full border border-solid border-white p-3'>
              <FaLinkedinIn size={16} />
            </div>
            <div className='rounded-full border border-solid border-white p-3'>
              <FaWhatsapp size={16} />
            </div>
          </div> */}
        </div>

        <div className='z-10'>
          <div className='  pt-[5px] md:hidden  '>
            <div className='flex flex-col justify-between gap-[30px] px-1 md:flex-row md:gap-0 '>
              {/* <div className='flex gap-[11px]  text-[14px]  font-bold text-white'>
                <FaPhoneAlt size={25} />
                25-8995-122
              </div> */}
              <div className='flex gap-[11px]    text-[14px] font-bold text-white'>
                <HiMailOpen size={25} />
                <a href='mailto:support@nazx.com.au' className='text-white'>
                  support@nazx.com.au
                </a>
              </div>

              <div className=' text-[14px]    font-bold text-white'>
                <div className='flex  gap-[11px]'>
                  <MdLocationOn size={25} />
                  12, Rd. Belleview Avenue
                </div>
                <p className='pl-10 text-sm font-normal text-white'>Sydney, Australia 3343.</p>
              </div>
              <Link href='/contact-us' className='z-10 flex gap-5 text-xl font-bold text-white'>
                GET IN TOUCH
                <Image width={20} height={20} className='h-5 w-5 pt-1' alt='arrow' src={'/icon/angle-right.svg'} />
              </Link>
            </div>
            {/* <div className='container-custom  border-b-2 border-[#9382FF] pb-[67px]'></div> */}
          </div>
        </div>
      </div>

      {/* LAST SECTION/COPY RIGHT SECTION  */}
      <div className='container-custom pt-1 md:pt-1 lg:pt-1 '>
        <div className=' mx-auto flex justify-center gap-y-3 py-4    text-white  duration-700 '>
          <p className='font-inter text-base-100/60 text-center text-sm font-normal'>
            <a href='#' className='  p-2 duration-700 hover:text-gray-300'>
              © Copyright by NAZX – All right reserved.
            </a>
          </p>
        </div>
      </div>
      {/* <ScrollTop /> */}
    </footer>
  );
};

export default Footer;



