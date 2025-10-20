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
      {
        heroData?.data?.is_active &&
        <Hero heroData={heroData?.data} />
      }
      {
        false &&
        <Services serviceData={serviceData?.data?.services} />
      }
      {
        aboutData?.data?.is_active &&
        <About aboutData={aboutData?.data} />
      }
      {
        topServicesData?.data?.is_active &&
        <TopServices topServicesData={topServicesData?.data} />
      }
      {
        timelineData?.data?.is_active &&
        <Timeline timelineData={timelineData?.data} />
      }
      {
        quoteData?.data?.is_active &&
        <Quote quoteData={quoteData?.data} />
      }
      {
        featuredProjectsData?.data?.is_active &&
        <FeaturedProjects featuredProjectsData={featuredProjectsData?.data} />
      }
      {
        testimonialsData?.data?.is_active &&
        <Testimonials testimonialsData={testimonialsData?.data} />
      }
      {
        contactData?.data?.is_active &&
        <Contact contactData={contactData?.data} />
      }
      <ScrollTop />
    </Fragment>
  );
};

export default PageBody;
