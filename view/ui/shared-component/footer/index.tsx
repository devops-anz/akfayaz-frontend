'use client';
import { MappedFooterData } from '@/types/header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { poppins } from 'styles/fonts';

interface FooterProps {
  footerData: MappedFooterData;
}

const Footer = ({ footerData }: FooterProps) => {
  const router = useRouter();

  return (
    <footer>
      <div className='container-custom mx-auto px-4 md:px-6 lg:px-8 xl:px-0 pt-16'>
        <div className=''>
          <nav className='flex flex-col items-center gap-y-10 justify-between md:flex-row lg:gap-x-6 xl:gap-x-8'>
            {/* Logo */}
            <div className='mb-4 flex lg:flex-col xl:flex-row items-center  md:mb-0'>
              <div className='mr-3 '>
                <Image
                  src={footerData.logoUrl}
                  className='w-28'
                  alt='logo'
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div onClick={() => router.push('/')} className='cursor-pointer'>
                <h1 className={`${poppins.className} text-xl font-bold text-[${footerData.company_name_color}]`}>{footerData.companyName}</h1>
                <p className={`text-sm text-[${footerData.description_color}]`}>{footerData.description}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-x-6 lg:space-x-8 xl:space-x-10 md:space-y-0'>
              {footerData.FooterList.map((link, index) => (
                <a key={index} href={link.url}
                  className={`cursor-pointer font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-sm font-[500] text-[${footerData.footer_menu_links_color}] ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full`}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className='hidden items-center space-x-3 md:flex lg:space-x-2 xl:space-x-5'>
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
                  <Image src={social.icon} alt='social' width={20} height={20} />
                </a>
              ))}
            </div>
          </nav>
          <hr className='w-full mt-5 border-gray-300' />
        </div>

        <div className='flex flex-col items-center justify-between pt-10 pb-5 md:flex-row'>
          <div className={`${poppins.className} text-sm font-medium text-[${footerData.footer_left_text_color}]`}>
            {' '}
            {footerData?.footer_left_text}
          </div>
          <div className={`${poppins.className} text-sm font-medium text-[${footerData.footer_right_text_color}]`}>
            {footerData?.footer_right_text}   {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
