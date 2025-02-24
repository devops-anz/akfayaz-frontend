import Image from 'next/image';
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
  // { icon: 'instagram', href: 'https://instagram.com' },
  // { icon: 'facebook', href: 'https://facebook.com' },
  // { icon: 'twitter', href: 'https://twitter.com' },
  // { icon: 'youtube', href: 'https://youtube.com' },
  { title: 'Anz Web Studios', icon: '/image/logo/webstudio.png', href: 'https://anzwebstudios.com.au' },
  { title: 'Anz Biz Consultants', icon: '/image/logo/favicon.ico', href: 'https://anzbizconsultants.com.au' },
  { title: 'LinkedIn', icon: '/image/logo/linkedin.png', href: 'https://www.linkedin.com/in/ahsanulkfayaz/' },
  // { icon: 'linkedin', href: 'https://www.linkedin.com/in/ahsanulkfayaz/' }
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
              <div className='mr-3 '>
              <Image
                  src={'/image/logo/logo-2.png'}
                  className='w-16'
                  alt='bus'
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div>
                <h1 className={`${poppins.className} text-xl font-bold`}>Ahsanul K. Fayaz</h1>
                <p className='text-sm text-gray-600 mt-2'>Entrepreneur | Business Consultant | Life Coach</p>
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
                  title={social.title}
                >
                  <Image src={social.icon} alt='social' width={20} height={20} />
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
