import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { poppins } from 'styles/fonts';
// import { FaInstagram } from 'react-icons/fa';
// import { TbBrandFacebook } from 'react-icons/tb';
// import { FaTwitter } from 'react-icons/fa';
// import { FaYoutube } from 'react-icons/fa';
// import { FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { title: 'About Me', href: '/#about-me' },
  { title: 'Featured Magazines', href: '/#featured-magazine' },
  { title: 'Services', href: '/#services' },
  // { title: 'Contact Me', href: '/#contact-me' }
];

export const socialLinks = [
  // { icon: 'instagram', href: 'https://instagram.com' },
  // { icon: 'facebook', href: 'https://facebook.com' },
  // { icon: 'twitter', href: 'https://twitter.com' },
  // { icon: 'youtube', href: 'https://youtube.com' },
  { title: 'Visit - ANZ Web Studios ', icon: '/image/logo/webstudio.png', href: 'https://anzwebstudios.com.au' },
  { title: 'Visit - ANZ Business Consultants', icon: '/image/logo/favicon.ico', href: 'https://anzbizconsultants.com.au' },
  { title: 'Visit - AKM Assets', icon: '/image/logo/akm-assets.webp', href: 'https://akmassets.com.au' },
  { title: 'Visit - ANZ Clearance House', icon: '/image/logo/anz-clearance-house.webp', href: 'https://anzclearancehouse.com.au' },
  { title: 'Visit - A K Fayaz - LinkedIn', icon: '/image/logo/linkedin.png', href: 'https://www.linkedin.com/in/ahsanulkfayaz/' },
  // { icon: 'linkedin', href: 'https://www.linkedin.com/in/ahsanulkfayaz/' }
];


const Footer = () => {
  const router = useRouter();
  // const currentYear = new Date().getFullYear();

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
                <h1 className={`${poppins.className} text-xl font-bold`}>Ahsanul Karim Fayaz</h1>
                <p className='text-sm text-gray-600'>Entrepreneur | Business Consultant <span className='hidden md:inline'>|</span> <br className='md:hidden' /> Life Coach</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
              {navLinks.map((link, index) => (
                <a key={index} href={link.href}
                                       className='cursor-pointer font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-base font-[500] text-black ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full'
                 >
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
                  className='border border-gray-600 p-1.5 text-gray-600 transition-colors rounded-md  duration-300 ease-in-out hover:bg-slate-200 hover:text-white '
                  target='_blank'
                  rel='noopener noreferrer'
                  title={social.title}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={social.title}
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

// export const SocialIcon = ({ name }: { name: string }) => {
//   const icons = {
//     instagram: <FaInstagram size={20} />,
//     facebook: <TbBrandFacebook size={20} />,
//     twitter: <FaTwitter size={20} />,
//     youtube: <FaYoutube size={20} />,
//     linkedin: <FaLinkedinIn size={20} />

//   };

//   return icons[name as keyof typeof icons] || null;
// };

export default Footer;
