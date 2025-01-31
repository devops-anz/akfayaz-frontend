import { Inconsolata, Poppins } from 'next/font/google';

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});