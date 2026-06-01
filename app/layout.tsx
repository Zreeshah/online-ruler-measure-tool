import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/index.css';
import { Providers } from './providers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://online-ruler.onl'),
  title: {
    default: 'Online Ruler - Real Size Ruler on Your Screen',
    template: '%s | Online-Ruler.Onl',
  },
  description: 'Online ruler with precise calibration to measure in cm, mm, and inches on your screen. Perfect for exact measurements on phone, tablet, or computer.',
  keywords: ['ruler', 'ruler online', 'online ruler', 'ruler measurements', 'inch ruler', 'cm ruler', 'ruler on phone', 'real size ruler', 'phone ruler', 'online tape measure'],
  openGraph: {
    title: 'Online Ruler - Real Size Precise Measurement on Your Screen',
    description: 'Online ruler with precise calibration to measure in cm, mm, and inches on your screen. Perfect for exact measurements.',
    type: 'website',
    url: 'https://online-ruler.onl',
    siteName: 'Online-Ruler.Onl',
    images: [
      {
        url: 'https://online-ruler.onl/ruler-preview.png',
        width: 1200,
        height: 630,
        alt: 'Online Ruler - Real Size Measurement Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Ruler - Real Size Precise Measurement',
    description: 'Online ruler with precise calibration to measure in cm, mm, and inches on your screen. Perfect for exact measurements.',
    images: ['https://online-ruler.onl/ruler-preview.png'],
  },
  icons: {
    icon: '/lovable-uploads/34e2e6e3-185b-4643-9ebb-b8ba32de627b.png',
    apple: '/lovable-uploads/34e2e6e3-185b-4643-9ebb-b8ba32de627b.png',
  },
  manifest: undefined,
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="theme-color" content="#9b87f5" />
        <meta name="google-site-verification" content="t4sbaaYfWZd2Kmm3GtdUc3wUUSUcVs7sQKKPNLXHRzI" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --ruler-primary: #9b87f5;
              --ruler-primary-dark: #7E69AB;
              --ruler-primary-light: #f1f0fb;
            }
            .text-ruler-primary { color: var(--ruler-primary); }
            .bg-ruler-primary { background-color: var(--ruler-primary); }
            .border-ruler-primary { border-color: var(--ruler-primary); }
            #root { display: flex; min-height: 100vh; flex-direction: column; }
          `
        }} />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5DP0V66SGR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5DP0V66SGR');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6218065184548996"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
