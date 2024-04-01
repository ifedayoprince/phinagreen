import { Container, ThemeProvider, createTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/font.css';

import { SITE_CONFIG } from '@/constants';
import { GLOBAL_STYLES } from '@/styles';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
  }
};

export default function RootLayout({
  children,  
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <body className={zen_kaku.className}> */}
      <body className="flex justify-center">
        {/* <ThemeProvider theme={theme}> */}
          <div className='container'>{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
