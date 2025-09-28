'use client';
import { useEffect, useState } from 'react';
import MobileNavbar from './mobile-navbar';
import { navbarData as staticNavbarData } from '../../../../@json-db/index';
import { poppins } from 'styles/fonts';
import Image from 'next/image';

import { useRouter } from "next/navigation";
import { MappedHeaderData } from '@/types/header';
import { getNavbarData } from 'lib/getHeaderData';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [navbarData, setNavbarData] = useState<MappedHeaderData>({
    companyName: staticNavbarData.data.company_name,
    description: staticNavbarData.data.description,
    navbarList: staticNavbarData.data.menu_links,
    buttonText: staticNavbarData.data.button_text,
    buttonLink: staticNavbarData.data.button_link,
    emailText: staticNavbarData.data.email_text,
    email: staticNavbarData.data.email,
    logoUrl: staticNavbarData.data.logo_url,
    portfolioLinks: staticNavbarData.data.portfolio_links,
  });
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavbarClick = (link: string) => {
    router.push(link);
    setTimeout(() => {
      router.push(link);
    }, 200);
  }

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const data = await getNavbarData();
        if (data) {
          setNavbarData(data);
        }
      } catch (error) {
        console.error("Failed to load navbar data:", error);
        // Keep using static data as fallback
      }
    };

    loadNavbarData();
  }, []);



  return (
    <div className={`fixed top-0 left-0 right-0 bg-white shadow-md z-[101] ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
      <div
        className={`w-full px-0 py-0 duration-700 ease-in-out md:px-8  ${isScrolled ? 'md:py-1.5' : 'md:py-4'}`}
      >
        <div className=''>
          <div className='max-w-[1200px] mx-auto hidden flex-row justify-between md:flex '>
            <div className='mb-4 flex items-center md:mb-0'>
              <div className='mr-3 '>
                <Image
                  src={'/image/logo/logo-2.png'}
                  className='w-28 -ml-1'
                  alt='bus'
                  width={1000}
                  height={1000}
                  priority
                  onClick={() => router.push('/')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div>
                <h1 className={`${poppins.className} text-2xl font-bold`}>{navbarData.companyName}</h1>
                <p className='text-sm text-gray-600'>{navbarData.description}</p>
              </div>
            </div>

            <div className='flex flex-row gap-10'>
              <div>
                <p className='text-sm text-gray-600/50'>{navbarData.emailText}</p>
                <p
                  className='text-md text-gray-700 cursor-pointer hover:text-gray-900 transition-colors'
                  onClick={() => {
                    navigator.clipboard.writeText(navbarData.email);
                    const target = event?.target as HTMLElement;
                    const originalText = target.innerText;
                    target.innerText = 'Copied to Clipboard';
                    setTimeout(() => {
                      target.innerText = originalText;
                    }, 1500);
                  }}
                  title="Click to copy email"
                >
                  {navbarData.email}
                </p>
              </div>
              <a href={navbarData.buttonLink} target='_blank' rel='noopener noreferrer' className='bg-black text-white rounded-md hover:shadow-lg  transition-all duration-300'>
                <div className='p-4 flex items-center justify-center'>
                  {navbarData.buttonText}
                </div>
              </a>
            </div>
          </div>
          <hr className={` container-custom  hidden md:block w-full border-gray-300  ${isScrolled ? 'md:mt-2' : 'md:mt-6 md:mb-2'}`} />
          <div className=' custom-nav  mx-auto flex max-w-[1200px] flex-row justify-between gap-20 px-0 py-2 md:justify-between md:px-0 md:py-0 '>
            {/* <Link
            href={navbarData?.companyName?.link}
            aria-label='Company'
            title={navbarData?.companyName?.title}
            className='inline-flex items-center'
          >
            <Image src={'/logo/logo-small.png'} className='w-12 pl-4' alt='bus' width={1000} height={1000} priority /> 
            <p className='text-white pl-4 font-bold text-[25px] '>ADAM</p>
          </Link> */}
            <ul className='hidden items-center space-x-8 md:flex'>
              {navbarData.navbarList.map((item, index: number) => (
                <li key={index} className={'group relative block'}>
                  {item.subMenu ? (
                    <span className='font-work flex items-center gap-1 px-0 py-3 text-base font-[500] text-black transition  hover:duration-300'>
                      {item.title}
                      {item.subMenu && (
                        <svg
                          className='fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                        >
                          <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                        </svg>
                      )}
                    </span>
                  ) : (
                    <div
                      onClick={() => handleNavbarClick(item.url)}
                      className='cursor-pointer font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-base font-[500] text-black ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full'
                    >
                      {item.title}
                    </div>
                  )}
                  {/* {item.subMenu && item.subMenu.length > 0 && <SubMenu subMenu={item.subMenu} />} */}
                </li>
              ))}
            </ul>
            <div className='z-20 hidden items-center gap-3 text-lg font-semibold text-black md:flex'>
              <div className='hidden items-center space-x-2 md:flex'>
                {navbarData.portfolioLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className='hover:scale-110 transition-all duration-300'
                    target='_blank'
                    rel='noopener noreferrer'
                    title={social.title}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={social.title}
                    data-tooltip-place="top"
                  >

                    {/* <Image src={social.icon} alt='social' width={20} height={20} /> */}
                  </a>
                ))}
              </div>
            </div>

            <div className='flex w-full items-center justify-between gap-4 md:hidden'>
              <div className='flex items-center gap-4'>
                <a onClick={() => router.push('/')} className='pl-8 font-bold text-white'>
                  {navbarData.companyName}
                </a>
              </div>
              <div>
                <button
                  aria-label='Open Menu'
                  title='Open Menu'
                  className='p-3 text-indigo-600 transition duration-200 focus:outline-none'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    className='w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='12'
                    viewBox='0 0 15 12'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0.933594 1C0.933594 0.734784 1.03895 0.48043 1.22649 0.292893C1.41402 0.105357 1.66838 0 1.93359 0H13.9336C14.1988 0 14.4532 0.105357 14.6407 0.292893C14.8282 0.48043 14.9336 0.734784 14.9336 1C14.9336 1.26522 14.8282 1.51957 14.6407 1.70711C14.4532 1.89464 14.1988 2 13.9336 2H1.93359C1.66838 2 1.41402 1.89464 1.22649 1.70711C1.03895 1.51957 0.933594 1.26522 0.933594 1ZM0.933594 6C0.933594 5.73478 1.03895 5.48043 1.22649 5.29289C1.41402 5.10536 1.66838 5 1.93359 5H13.9336C14.1988 5 14.4532 5.10536 14.6407 5.29289C14.8282 5.48043 14.9336 5.73478 14.9336 6C14.9336 6.26522 14.8282 6.51957 14.6407 6.70711C14.4532 6.89464 14.1988 7 13.9336 7H1.93359C1.66838 7 1.41402 6.89464 1.22649 6.70711C1.03895 6.51957 0.933594 6.26522 0.933594 6ZM0.933594 11C0.933594 10.7348 1.03895 10.4804 1.22649 10.2929C1.41402 10.1054 1.66838 10 1.93359 10H7.93359C8.19881 10 8.45316 10.1054 8.6407 10.2929C8.82824 10.4804 8.93359 10.7348 8.93359 11C8.93359 11.2652 8.82824 11.5196 8.6407 11.7071C8.45316 11.8946 8.19881 12 7.93359 12H1.93359C1.66838 12 1.41402 11.8946 1.22649 11.7071C1.03895 11.5196 0.933594 11.2652 0.933594 11Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DROP DOWN BUTTON ON THE MOBILE SIZE */}

        <MobileNavbar navbarData={navbarData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
