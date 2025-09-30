'use client';
import { Fragment } from 'react';
import About from 'view/page/home/about';
import Contact from 'view/page/home/contact';
import FeaturedProjects from 'view/page/home/featuredProjects';
import Hero from 'view/page/home/hero';
import Quote from 'view/page/home/quote';
// import RecentWorks from 'view/page/home/recentWorks';
import Services from 'view/page/home/service';
import Testimonials from 'view/page/home/testimonials';
import Timeline from 'view/page/home/timeline';
import TopServices from 'view/page/home/topServices';
import ScrollTop from 'view/ui/shared-component/scrollTop';
// import Blog from 'view/page/home/blogs';

interface PageBodyProps {
  heroData: any;
  serviceData: any;
  aboutData: any;
  topServicesData: any;
  timelineData: any;
  quoteData: any;
  featuredProjectsData: any;
  testimonialsData: any;
  contactData: any;
}

const PageBody = ({ 
  heroData, 
  serviceData, 
  aboutData, 
  topServicesData, 
  timelineData, 
  quoteData, 
  featuredProjectsData, 
  testimonialsData, 
  contactData 
}: PageBodyProps) => {

  return (
    <Fragment>
      <Hero heroData={heroData?.data} />
      <Services serviceData={serviceData?.data} />
      <About aboutData={aboutData?.data} />
      <TopServices topServicesData={topServicesData?.data} />
      <Timeline timelineData={timelineData?.data} />
      <Quote quoteData={quoteData?.data} />
      <FeaturedProjects featuredProjectsData={featuredProjectsData?.data} />
      <Testimonials testimonialsData={testimonialsData?.data} />
      <Contact contactData={contactData?.data} />
      <ScrollTop />
    </Fragment>
  );
};

export default PageBody;
