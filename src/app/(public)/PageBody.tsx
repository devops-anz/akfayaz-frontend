'use client';
import { Fragment } from 'react';
import About from 'view/page/home/about';
import Hero from 'view/page/home/hero';
import Services from 'view/page/home/service';

const PageBody = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      {/* <WhyUs />
      <OurSuccess />
      <Testimonial />
      <LearnMore /> */}
    </Fragment>
  );
};

export default PageBody;
