'use client';
import { Fragment } from 'react';
import About from 'view/page/home/about';
import Contact from 'view/page/home/contact';
import FeaturedProjects from 'view/page/home/featuredProjects';
import Hero from 'view/page/home/hero';
import RecentWorks from 'view/page/home/recentWorks';
import Services from 'view/page/home/service';
import Testimonials from 'view/page/home/testimonials';
import Timeline from 'view/page/home/timeline';
import TopServices from 'view/page/home/topServices';
import Footer from 'view/ui/shared-component/footer';
import ScrollTop from 'view/ui/shared-component/scrollTop';

const PageBody = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <TopServices />
      <FeaturedProjects />
       <Testimonials /> 
       <RecentWorks /> 
       <Timeline />
      <Contact />
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};

export default PageBody;
