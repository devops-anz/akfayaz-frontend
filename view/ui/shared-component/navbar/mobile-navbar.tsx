import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMiniChevronDown } from 'react-icons/hi2';

type SidebarLayoutProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navbarData: {
    companyName: {
      title: string;
      link: string;
    };
    navbarList: {
      name: string;
      link: string;
      subMenu?: {
        name: string;
        link: string;
      }[];
    }[];
  };
};

const MobileNavbar = ({ isMenuOpen, setIsMenuOpen, navbarData }: SidebarLayoutProps) => {
  const pathname = usePathname();

  return (
    <>
      <div className='block xl:hidden'>
        <div
          className={`fixed z-[1010] flex  h-full w-9/12 max-w-full flex-col gap-2 overflow-y-auto glassmorphism duration-500 ease-in md:gap-0 ${isMenuOpen ? 'right-0 top-0' : '-right-full top-0'
            }`}
        >

          <div className='z-50 bg-base-100 pt-10 relative m-1.5 mt-2 flex flex-col justify-items-start rounded-xl  p-6 text-lg font-normal leading-6'>
            <Image
                    src={'/image/logo/logo-2.png'}
                    className='w-20 object-contain'
                    alt='bus'
                    width={2000}
                    height={2000}
                    priority
                  />
            <div className='mb-6 flex items-center justify-between'>
              <Link
                href={navbarData.companyName.link}

                aria-label='Company'
                title={navbarData.companyName.title}
                className='inline-flex items-center'
                onClick={() => setIsMenuOpen(false)}
              >
                <span className='flex items-center gap-2'>

              <div className='text-white pt-1 font-bold text-[18px]'>Ahsanul Karim Fayaz</div>
                </span>
              </Link>
              <button
                aria-label='Close Menu'
                title='Close Menu'
                className=' -mr-2 -mt-2 rounded-xl bg-[#FFF] p-3 shadow-lg transition duration-200 '
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                <svg className='w-5 text-[#624DE7]' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                  />
                </svg>
              </button>
            </div>
            <ul className='space-y-4'>
              {navbarData?.navbarList?.map((lt, index) => (
                <li key={index}>
                  {lt.subMenu ? (
                    <Disclosure as='div' className='mt-2'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`flex w-full items-center justify-between transition delay-300 duration-300 ease-in-out  `}
                          >
                            <span>{lt.name}</span>
                            <HiMiniChevronDown
                              size={25}
                              className={`${open ? 'rotate-180 transform ' : ''}  ease-out-in transform text-[#624DE7] transition delay-300 duration-300 ease-in-out`}
                            />
                          </Disclosure.Button>
                          <div className='mt-2'>
                            <Transition
                              enter='transition duration-300 ease-out'
                              enterFrom='transition delay-100 ease-out-in opacity-0'
                              enterTo='transition delay-100 ease-out-in'
                              leave='transition duration-300 ease-out'
                              leaveFrom='transition delay-100 ease-out-in'
                              leaveTo='transition delay-100 ease-out-in opacity-0'
                            >
                              <Disclosure.Panel className=''>
                                {lt?.subMenu?.map((item, index) => (
                                  <p key={index} className='  px-2.5 py-1.5 text-lg capitalize text-white '>
                                    <Link
                                      href={item.link}
                                      className=' '
                                      style={{

                                        fontWeight: pathname === item?.link ? 700 : 400
                                      }}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </p>


                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      href={lt.link}
                      aria-label={lt.name}
                      title={lt.name}
                      className={`hover:text-[#0074D9]'} font-medium tracking-normal text-white transition-colors duration-200`}
                      // style={{
                      //   color: pathname === lt?.link ? '#0074D9' : 'inherit'
                      // }}

                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lt.name}
                    </Link>
                  )}

                  {/* <Link
                    href={lt.link}
                    aria-label={lt.name}
                    title={lt.name}
                    className={`hover:text-[#0074D9]'} font-medium tracking-normal text-gray-700 transition-colors duration-200`}
                    style={{
                      color: pathname === lt?.link ? '#0074D9' : 'inherit'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {lt.name}
                  </Link> */}
                </li>
              ))}
            </ul>
            <div className='bg-white mt-5'>
              <a href='https://cal.com/a.fayaz' target='_blank' rel='noopener noreferrer' className='bg-black text-white rounded-md hover:shadow-lg  transition-all duration-300'>
                 <div className='p-3 flex items-center justify-center'>
                  <p className='text-center text-black'>Request a Meeting</p>
                 </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BG OVERLAY */}
      <div
        className={`fixed z-30 h-full w-full bg-[#0000009f] opacity-80 transition-all duration-500 ease-in-out xl:hidden ${isMenuOpen ? 'right-0 top-0' : '-right-full top-0'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileNavbar;
