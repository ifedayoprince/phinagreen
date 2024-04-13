import { Metadata } from 'next';
import {Zen_Kaku_Gothic_Antique} from 'next/font/google';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import '@/styles/font.css';
import 'react-toastify/dist/ReactToastify.css';

import { SITE_CONFIG } from '@/constants';
import { AuthContextProvider } from '@/context/AuthContext';


export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  }
};

const zen = Zen_Kaku_Gothic_Antique({
  weight: ['400', '300', '900', '500', '700'],
  subsets: ['latin'],
  preload: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={zen.className}>
      {/* <body> */}
        <AuthContextProvider>
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
