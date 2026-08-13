import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/index.css';
import { Providers } from './providers';
import Script from 'next/script';
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Calibrated Online Ruler for Screen Measurements',
    template: '%s | Online-Ruler.Onl',
  },
  description: 'Free on-screen ruler for measurements in cm, mm, and inches. Calibrate it with a physical reference or known screen diagonal before measuring.',
  keywords: ['ruler', 'ruler online', 'online ruler', 'ruler measurements', 'inch ruler', 'cm ruler', 'ruler on phone', 'real size ruler', 'phone ruler', 'online tape measure'],
  openGraph: {
    title: 'Online Ruler - Calibrated Screen Measurement Tool',
    description: 'Measure in cm, mm, and inches after calibrating the on-screen scale with a physical reference or known display size.',
    type: 'website',
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Online Ruler - Real Size Measurement Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Ruler - Calibrated Screen Measurement Tool',
    description: 'Measure in cm, mm, and inches after calibrating the on-screen scale with a physical reference or known display size.',
    images: [SOCIAL_IMAGE_URL],
  },
  icons: {
    icon: '/lovable-uploads/34e2e6e3-185b-4643-9ebb-b8ba32de627b.png',
    apple: '/online-ruler-logo.png',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  description: 'Publisher of a browser-based calibrated screen ruler and practical measurement guides.',
                  logo: {
                    '@type': 'ImageObject',
                    url: `${SITE_URL}/online-ruler-logo.png`,
                    width: 512,
                    height: 512,
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'info@online-ruler.onl',
                    availableLanguage: 'English',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  publisher: { '@id': `${SITE_URL}/#organization` },
                  inLanguage: 'en',
                },
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5DP0V66SGR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
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
