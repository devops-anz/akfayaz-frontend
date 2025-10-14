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

  // Until the maintenance check resolves, keep this as null to avoid flashing the site
  const [maintenance, setMaintenance] = useState<null | { enabled: boolean; message?: string }>(null);

    useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    // If the env is missing, fail open immediately without blocking UI
    if (!process.env.NEXT_PUBLIC_CMS_SERVER_URL) {
      setMaintenance({ enabled: false });
      clearTimeout(timeout);
      
      return () => controller.abort();
    }

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
        setMaintenance({ enabled: false });
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  // Show a minimal splash/loader until the client check resolves
  if (maintenance === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-transparent animate-spin"
          aria-label="Loading"
          aria-busy="true"
        />
      </div>
    );
  }

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
