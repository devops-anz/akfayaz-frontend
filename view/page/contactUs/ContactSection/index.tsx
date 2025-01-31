import Image from 'next/image';
import ContactForm from 'view/page/ContactForm';

const data = [
  {
    logo: '/icon/mail.svg',
    title: 'Mail',
    content: 'info@nazx.com.au'
  },
  {
    logo: '/icon/location.svg',
    title: 'Phone',
    content: '+61 411 841 015'
  },
  {
    logo: "/icon/what's-app.svg",
    title: 'Whatsapp',
    content: '+61 411 841 015'
  }
];

const ContactUsSection = () => {
  return (
    <div className='bg-[#403681]'>
      <div className='mx-auto flex max-w-[1308px] flex-col items-center px-4 pb-[60px] pt-[0px] md:flex-row md:pb-[124px] md:pt-[100px]'>
        <div className='hidden flex-1 py-[57px] md:block'>
          <div className='z-10 h-[547px] max-w-[483px] overflow-hidden rounded-[5px] md:p-0 '>
            <Image
              data-aos='fade-right'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-once='false'
              src='/image/contact/img-01.png'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className=''
              width={483}
              height={547}
              alt='earth'
            />
          </div>
        </div>
        <div className='md:flex-1 md:pl-5 xl:pl-20'>
          <div
            data-aos='fade-left'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-once='false'
          >
            <p className='pt-[50px] text-center text-2xl font-semibold capitalize text-white   md:text-left'>
              Contact Us
            </p>
            <Image
              src='/image/contact/img-01.png'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className='px-5 py-[20px] md:hidden'
              width={483}
              height={547}
              alt='earth'
            />
            <p className='mt-10 max-w-[569px] text-center text-[34px] font-medium leading-none text-white md:text-left   md:text-[52px]'>
              Message us if you have any enquiries
            </p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-once='false'
            className='mt-5 flex max-w-[569px] flex-col gap-5 max-md:px-4'
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
