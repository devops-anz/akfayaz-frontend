import { MappedFooterData } from '@/types/header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { poppins } from 'styles/fonts';
import { navbarData as staticNavbarData } from '../../../../@json-db/index';
import { getNavbarData } from 'lib/getHeaderData';




const Footer = () => {
  const router = useRouter();
  // const currentYear = new Date().getFullYear();

  const [footerData, setFooterData] = useState<MappedFooterData>({
    companyName: staticNavbarData.data.company_name,
    description: staticNavbarData.data.description,
    FooterList: staticNavbarData.data.footer_links,
    portfolioLinks: staticNavbarData.data.portfolio_links,
  });

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const data = await getNavbarData();
        if (data) {
          setFooterData({
            companyName: data.companyName,
            description: data.description,
            FooterList: data.navbarList,
            portfolioLinks: footerData.portfolioLinks,
          });
        }
      } catch (error) {
        console.error("Failed to load navbar data:", error);
        // Keep using static data as fallback
      }
    };

    loadNavbarData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer>
      <div className='container-custom mx-auto px-4 md:px-0 pt-16'>
        <div className=''>
          <nav className='flex flex-col items-center gap-y-10 justify-between md:flex-row'>
            {/* Logo */}
            <div className='mb-4 flex items-center md:mb-0'>
              <div className='mr-3 '>
                <Image
                  src={'/image/logo/logo-2.png'}
                  className='w-28'
                  alt='bus'
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div onClick={() => router.push('/')} className='cursor-pointer'>
                <h1 className={`${poppins.className} text-xl font-bold`}>{footerData.companyName}</h1>
                <p className='text-sm text-gray-600'>{footerData.description}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
              {footerData.FooterList.map((link, index) => (
                <a key={index} href={link.url}
                  className='cursor-pointer font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-base font-[500] text-black ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full'
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className='hidden items-center space-x-3 md:flex'>
              {footerData.portfolioLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className='border border-gray-600 p-1.5 text-gray-600 transition-colors rounded-md  duration-300 ease-in-out hover:bg-slate-200 hover:text-white '
                  target='_blank'
                  rel='noopener noreferrer'
                  title={social?.title}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={social?.title}
                  data-tooltip-place="top"
                >
                  {/* <Image src={social.icon} alt='social' width={20} height={20} /> */}
                </a>
              ))}
            </div>
          </nav>
          <hr className='w-full mt-5 border-gray-300' />
        </div>

        <div className='flex flex-col items-center justify-between pt-10 pb-5 md:flex-row'>
          <div className={`${poppins.className} text-sm font-medium text-gray-600 `}>
            {' '}
            Developed by ©
            <span className='text-black hover:text-amber-600'>
              {' '}
              <a href='https://anzwebstudios.com.au' target='_blank' rel='noopener noreferrer'>
                {' '}
                ANZ WEB STUDIOS{' '}
              </a>
            </span>
          </div>
          <div className={`${poppins.className} text-sm font-medium text-gray-600`}>
            All rights Reserved || {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
