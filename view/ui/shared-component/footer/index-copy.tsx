import { footerData, services } from '@json-db';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaLinkedinIn, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { HiMailOpen } from 'react-icons/hi';
import { IoIosArrowForward, IoMdArrowRoundForward } from 'react-icons/io';
import { MdLocationOn, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiYoutubeLine, RiFacebookFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // style={{ background: "linear-gradient(100deg, #0A1240 0%, #043E42 100%)" }}
      className='body-font relative z-20 bg-indigo-700 text-white duration-700'
    >
      <div className='absolute right-0 top-0 -z-10 hidden h-[765px] w-[576px] lg:block '>
        <Image
          src='/image/hero/half-circle.png'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          width={1121}
          height={1121}
          alt='circle'
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

      <div className='container-custom hidden md:pt-[70px] lg:pt-[120px] md:block  '>
        <div className='flex flex-col justify-between gap-6 px-5 md:flex-row  xl:gap-0 '>
          <div className='flex flex-col lg:gap-x-[25px] xl:gap-x-[99px] gap-y-[29px] lg:flex-row'>
            <div className='flex gap-[11px]  text-xl  font-bold text-white'>
              <FaPhoneAlt />
              25-8995-122
            </div>
            <div className='flex gap-[11px]   text-xl font-bold text-white'>
              <HiMailOpen size={25} />
              support@mail.com
            </div>
          </div>
          <div className='flex flex-col lg:gap-x-[25px] xl:gap-x-[99px] gap-y-[20px] lg:flex-row'>
            <div className='text-xl    font-bold text-white'>
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
        </div>
        <div className='container-custom  border-b-2 border-[#9382FF] pb-[67px]'></div>
      </div>
      <div className='md:container-custom mx-auto grid   grid-cols-1 gap-x-8 gap-y-12 px-[16px] py-10  sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8  lg:py-14'>
        <div className=''>
          <a className='title-font flex items-center justify-start font-medium  text-white  duration-700'>
            <span>
              <Image
                width={1000}
                height={1000}
                className='object-fit h-full w-full'
                alt='logo'
                src={'/logo/logo.png'}
              />
            </span>
          </a>
          <p className='mt-4 max-w-md text-base font-normal  text-white md:pr-8 lg:pr-5'>
            Access top-tier IT solutions to <br />
            address your tech challenges <br />
            with ease.
          </p>
          <div className='flex items-center gap-4 pt-10 text-white'>
            <div className='rounded-full border border-solid border-white p-3'>
              <RiFacebookFill size={16} />
            </div>

            <div className='rounded-full border border-solid border-white p-3'>
              <FaLinkedinIn size={16} />
            </div>
            <div className='rounded-full border border-solid border-white p-3'>
              <FaWhatsapp size={16} />
            </div>
          </div>
        </div>

        <div className=' col-span-2 flex gap-[70px] lg:gap-[93px]'>
          {footerData?.map((dt, i) => (
            <div key={i} className='lg:pl-20'>
              <div>
                <h2 className='z-50 mb-5 whitespace-nowrap text-2xl font-semibold leading-[33.60px] text-white duration-700  md:text-2xl lg:text-xl xl:text-2xl'>
                  {dt?.title}
                </h2>
                <nav className='list-none'>
                  {dt?.links.map((link: { name: string; to: string }, i) => (
                    <li key={i} className='mt-3'>
                      {link?.to ? (
                        <Link
                          href={link?.to}
                          className='flex cursor-pointer items-center gap-1.5 text-[14px] text-white duration-700 md:text-base  '
                        >
                          <MdOutlineKeyboardArrowRight size={20} />
                          {link?.name}
                        </Link>
                      ) : (
                        <a className='cursor-pointer  text-white duration-700'>{link?.to}</a>
                      )}
                    </li>
                  ))}
                </nav>
              </div>
            </div>
          ))}
          {services?.map((dt, i) => (
            <div key={i} className='  justify-self-start'>
              <h2 className='mb-5 whitespace-nowrap text-2xl font-semibold leading-[33.60px] text-white duration-700  md:text-2xl lg:text-xl xl:text-2xl'>
                {dt?.title}
              </h2>
              <nav className='list-none '>
                {dt?.links.map((link: { name: string; to: string }, i) => (
                  <li key={i} className='mt-3'>
                    {link?.to ? (
                      <a
                        href={link?.to}
                        className='flex cursor-pointer items-center gap-1.5  text-[14px] text-white duration-700 md:text-base  '
                      >
                        <MdOutlineKeyboardArrowRight size={20} />
                        {link?.name}
                      </a>
                    ) : (
                      <a className=' cursor-pointer  duration-700'>{link?.to}</a>
                    )}
                  </li>
                ))}
                {/* <div className='pt-2  '>
                <Link
                  href='/services'
                  className=' flex gap-3 items-center underline mt-3 text-white duration-700 cursor-pointer hover:text-gray-500 '
                >
                  See All
                  <IoIosArrowForward size={20} />
                </Link>
              </div> */}
              </nav>
            </div>
          ))}
        </div>

        <div className='z-10'>
          <div className='  pt-[5px] md:hidden  '>
            <div className='flex flex-col justify-between gap-[30px] px-1 md:flex-row md:gap-0 '>
              <div className='flex gap-[11px]  text-[14px]  font-bold text-white'>
                <FaPhoneAlt size={25} />
                25-8995-122
              </div>
              <div className='flex gap-[11px]    text-[14px] font-bold text-white'>
                <HiMailOpen size={25} />
                support@mail.com
              </div>

              <div className=' text-[14px]    font-bold text-white'>
                <div className='flex  gap-[11px]'>
                  <MdLocationOn size={25} />
                  12, Rd. Belleview Avenue
                </div>
                <p className='pl-10 text-sm font-normal text-white'>Sydney, Australia 3343.</p>
              </div>
              <div className='z-10 flex gap-5 pb-[0px] md:pb-[49px] text-xl font-bold text-white'>
                GET IN TOUCH
                <Image width={20} height={20} className='h-5 w-5 pt-1' alt='arrow' src={'/icon/angle-right.svg'} />
              </div>
            </div>
            {/* <div className='container-custom  border-b-2 border-[#9382FF] pb-[67px]'></div> */}
          </div>

          <div className='hidden lg:block'>
          <h2 className='mb-5 whitespace-nowrap  text-2xl font-semibold leading-[33.60px] text-white  md:text-2xl lg:text-xl xl:text-2xl '>
            Subscribe
          </h2>
          <nav className='list-none '>
            <div className='relative flex flex-col justify-start'>
              <input
                className='mb-4 max-w-xs rounded-[50px] border border-solid border-gray-400 bg-contact_bg px-5     py-2 leading-8 placeholder-black transition-colors duration-200 ease-in-out md:w-full'
                placeholder='Enter your email'
                type='email'
              />
              <button className='absolute right-4 translate-y-[28%]  rounded-full bg-[#624DE7] p-1.5 text-base font-bold text-white'>
                <IoMdArrowRoundForward size={20} />
              </button>
              <p className='font-[14px] text-white'>Subscribe to our newsletter to get latest updates about us</p>
            </div>
          </nav>

          </div>
        </div>
      </div>

      {/* LAST SECTION/COPY RIGHT SECTION  */}
      <div className='container-custom pt-1 md:pt-1 lg:pt-36 '>
        <div className=' mx-auto flex justify-center gap-y-3 py-4    text-white  duration-700 '>
          <p className='font-inter text-base-100/60 text-center text-sm font-normal'>
            <a href='#' className='  p-2 duration-700 hover:text-gray-300'>
             © Copyright by NazX – All right reserved.
            </a>
          </p>
        </div>
      </div>
      {/* <ScrollTop /> */}
    </footer>
  );
};

export default Footer;
