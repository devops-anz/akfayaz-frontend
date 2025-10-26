import Footer from 'view/ui/shared-component/footer';
import Navbar from 'view/ui/shared-component/navbar';
import ClientLayoutProvider from './ClientLayoutProvider';
import { getNavbarData } from 'lib/getHeaderData';

export default async function LayoutProvider({ children }: { children: React.ReactNode }) {
  // Fetch navbar data on the server
  const navbarData = await getNavbarData();

  return (
    <ClientLayoutProvider>
      <div className='relative overflow-hidden'>
        <Navbar navbarData={navbarData} />
        {children}
        <Footer footerData={navbarData} />
      </div>
    </ClientLayoutProvider>
  );
}
