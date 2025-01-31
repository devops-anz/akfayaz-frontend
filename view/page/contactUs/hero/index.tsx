import Image from 'next/image';

const data = [
  {
    logo: '/icon/mail.svg',
    title: 'Mail',
    content: 'info@nazx.com.au'
  },
  {
    logo: '/icon/location.svg',
    title: 'Location',
    content: `6/27 Shadforth street, <br/> Wiley park-2195`
  }
];

const Hero = () => {
  return (
    <div className='relative bg-[#624DE7]'>
      <div className='my-bg-image-handler_dark'>
        <div className='sm-bg-effect pb-[79 px] relative mx-auto flex max-w-[1308px] flex-col items-baseline gap-y-4 px-7 pt-[78px] md:flex-row-reverse md:items-center md:px-4 md:pb-[104px] md:pt-[118px] xl:pt-[178px]'>
          <div
            className='relative z-[3] mx-auto hidden max-h-[511px] max-w-[438px] flex-1  md:mx-0 md:block lg:mr-auto'
            style={{
              background: 'linear-gradient(0deg, rgba(148, 131, 255, 0.18) 0%, rgba(148, 131, 255, 0.18) 100%)'
            }}
          >
            <Image
                            data-aos='fade-left'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out'
                            data-aos-once='false'
              src='/image/resolution/img-01.png'
              style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 21 }}
              width={523}
              height={698}
              alt='img-01'
            />
            <div className='hero-triangle md:right-none absolute right-[-15px] top-[-30px] z-10 w-20 md:left-[-289px] md:top-[-187px] md:hidden md:h-[233px] md:w-[294px]'>
              <Image
                src='/image/hero/triangle.svg'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                width={544}
                height={544}
                alt='triangle'
              />
            </div>
            <div className='hero-large-star md:right-none absolute bottom-[50px] right-[-10px] z-[2] w-16 md:left-[-160px] md:hidden md:h-[120px] md:w-[80px] lg:h-[190px] lg:w-[144px]'>
              <Image
                src='/image/hero/large-star.svg'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                width={144}
                height={190}
                alt='large-star'
              />
            </div>
          </div>
          <div className='mx-auto max-w-[540px] flex-1 md:mx-0'>
            <div className=' relative pb-5 md:pl-[60px] xl:pl-[20px]'>
              <div
                data-aos='fade-right'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-once='false'
              >
                <p className='text-xl font-semibold capitalize leading-normal   text-white md:text-2xl'>
                  Drop A Message
                </p>
                <h3 className='mt-[15px] text-[20px] font-medium capitalize leading-none   text-white md:text-[52px]'>
                  Get in touch
                </h3>
                <p className='mt-[15px] text-base font-normal leading-normal   text-white'>
                  Let's connect and collaborate.
                </p>
              </div>{' '}
              <div className='mx-auto mt-2 h-[197px] w-[298px] md:hidden'>
                <Image
                  src='/image/resolution/img-01.png'
                  style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 21 }}
                  width={523}
                  height={698}
                  alt='img-01'
                />
              </div>
              <div
                data-aos='fade-right'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-once='false'
                className='mt-5 flex flex-col gap-5'
              >
                {data.map((item, index) => (
                  <div key={index}>
                    <div className='h-4 w-4'>
                      <Image
                        src={item.logo}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className=''
                        width={17}
                        height={17}
                        alt='mail'
                      />
                    </div>
                    <div className='mt-4 text-[13px] font-medium leading-normal text-white md:text-base'>
                      {item.title}
                    </div>

                    {item?.title === 'Location' ? (
                      <a
                        href='https://www.google.com/maps/search/?api=1&query=6%2F27+Shadforth+Street%2C+Wiley+Park+NSW+2195%2C+Australia'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white'
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                          className='mt-2 text-[13px] font-medium leading-normal text-white md:text-base'
                        ></div>
                      </a>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                        className='mt-2 text-[13px] font-medium leading-normal text-white md:text-base'
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className='hero-triangle md:right-none absolute right-[-15px] top-[-30px] z-10 hidden w-20 md:left-[-289px] md:top-[-187px] md:block md:h-[233px] md:w-[294px]'>
                <Image
                  src='/image/hero/triangle.svg'
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  width={544}
                  height={544}
                  alt='triangle'
                />
              </div>
              <div className='hero-large-star md:right-none absolute bottom-[50px] right-[-10px] z-[2] hidden w-16 md:left-[-160px] md:block md:h-[120px] md:w-[80px] lg:h-[190px] lg:w-[144px]'>
                <Image
                  src='/image/hero/large-star.svg'
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  width={144}
                  height={190}
                  alt='large-star'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

