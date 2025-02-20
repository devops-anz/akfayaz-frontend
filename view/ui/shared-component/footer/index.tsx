import Image from 'next/image';
import Link from 'next/link';
import { HiMailOpen } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { poppins } from 'styles/fonts';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { title: 'About Me', href: '/#about-me' },
  { title: 'Featured Projects', href: '/#featured-projects' },
  { title: 'Testimonials', href: '/#testimonials' },
  { title: 'Contact Me', href: '/#contact-me' }
];

export const socialLinks = [
  { icon: 'instagram', href: 'https://instagram.com' },
  { icon: 'facebook', href: 'https://facebook.com' },
  { icon: 'twitter', href: 'https://twitter.com' },
  { icon: 'youtube', href: 'https://youtube.com' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/ahsanulkfayaz/' }
];


const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container-custom mx-auto px-4 pt-16'>
        <div className=''>
          <nav className='flex flex-col items-center gap-y-10 justify-between md:flex-row'>
            {/* Logo */}
            <div className='mb-4 flex items-center md:mb-0'>
              <div className='mr-3 h-10 w-10'>
                <svg viewBox='0 0 24 24' className='h-full w-full'>
                  <path fill='currentColor' d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
                </svg>
              </div>
              <div>
                <h1 className={`${poppins.className} text-xl font-bold`}>A K Fayaz</h1>
                <p className='text-sm text-gray-600'>architect & designer</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className='text-gray-600 transition-colors hover:text-gray-900'>
                  {link.title}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className='hidden items-center space-x-3 md:flex'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='border border-gray-600 p-1 text-gray-600 transition-colors  duration-300 ease-in-out hover:bg-black hover:text-white '
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </nav>
            <hr className='w-full mt-5 border-gray-300' />
        </div>

        <div className='flex flex-col items-center justify-between pt-10 pb-5 md:flex-row'>
          <div className={`${poppins.className} text-sm font-semibold text-gray-600 `}>
            {' '}
            Created by ©
            <span className='text-black hover:text-amber-600'>

              {' '}
              <a href='https://anzwebstudios.com.au' target='_blank' rel='noopener noreferrer'>
                {' '}
                ANZ WEB STUDIOS{' '}
              </a>
            </span>
          </div>
          <div className={`${poppins.className} text-sm font-semibold text-gray-600`}>
            All rights Reserved || {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const SocialIcon = ({ name }: { name: string }) => {
  const icons = {
    instagram: <FaInstagram size={20} />,
    facebook: <TbBrandFacebook size={20} />,
    twitter: <FaTwitter size={20} />,
    youtube: <FaYoutube size={20} />,
    linkedin: <FaLinkedinIn size={20} />

  };

  return icons[name as keyof typeof icons] || null;
};

export default Footer;
