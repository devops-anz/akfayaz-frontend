'use client'; 
import Footer from 'view/ui/shared-component/footer';
import Navbar from 'view/ui/shared-component/navbar';
import useAOS from '../hooks/useAOS';
import useScrollToTop from '../hooks/useScrollToTop';
import { useEffect, useState } from 'react';
import Maintenance from 'view/ui/shared-component/component/Maintenance';
// import ScrollTop from 'view/ui/shared-component/scrollTop'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  useAOS();
  useScrollToTop();

  const [maintenance, setMaintenance] = useState<{ enabled: boolean; message?: string }>({ enabled: false });

    useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    fetch(`${process.env.NEXT_PUBLIC_CMS_SERVER_URL}/api/maintenance`, {
      signal: controller.signal,
      cache: 'no-store',
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
        }

        return res.json();
      })
      .then((data) => {
        setMaintenance({ enabled: !!data?.enabled, message: data?.message });
      })
      .catch((err) => {
        // Fail open on errors: do not block UI
        console.error('[LayoutProvider] maintenance check error:', err);
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  if (maintenance.enabled) {
    return <Maintenance message={maintenance.message} />;
  }


  return (
    <div className='relative overflow-hidden'>
      <Navbar />
      {children}
      <Footer />    
    </div>
  );
}
