import type { Metadata } from 'next';
import { Inconsolata,   } from 'next/font/google';
import '../../styles/globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Ahsanul Karim Fayaz - Home',
  description: "Eager to help you with Sales, Marketing, Procurement & Acquisition"  ,
  keywords: ['Ahsanul Karim Fayaz', 'Sales', 'Marketing', 'Procurement', 'Acquisition'],
  authors: [{ name: 'Ahsanul Karim Fayaz', url: 'https://akfayaz.com.au' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta name='google-site-verification' content={process.env.GOOGLE_SITE_VERIFICATION} /> <GoogleAnalytics />
      <body className={`${inconsolata.className}`}>{children}</body>
    </html>
  );
}
