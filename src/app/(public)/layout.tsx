'use client'; 
// import Footer from 'view/ui/shared-component/footer';
import Navbar from 'view/ui/shared-component/navbar';
import useAOS from '../hooks/useAOS';
import useScrollToTop from '../hooks/useScrollToTop';
// import ScrollTop from 'view/ui/shared-component/scrollTop'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  useAOS();
  useScrollToTop();


  return (
    <div className='relative overflow-hidden'>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
