'use client';
import { Fragment } from 'react';
import About from 'view/page/home/about';
import FeaturedProjects from 'view/page/home/featuredProjects';
import Hero from 'view/page/home/hero';
import Services from 'view/page/home/service';
import Testimonials from 'view/page/home/testimonials';
import TopServices from 'view/page/home/topServices';

const PageBody = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <TopServices />
      <FeaturedProjects />
      <Testimonials />
    </Fragment>
  );
};

export default PageBody;
