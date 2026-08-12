import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Online Ruler - Real Size Ruler on Your Screen',
  description: 'Free online ruler for cm, mm, and inch measurements. Calibrate the screen scale with a physical card or known display diagonal before use.',
  keywords: ['ruler', 'ruler online', 'online ruler', 'ruler measurements', 'inch ruler', 'cm ruler', 'ruler on phone', 'real size ruler', 'phone ruler', 'online tape measure'],
  path: '/',
});

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Online Ruler",
  "description": "On-screen ruler for cm, mm, and inch measurements after user calibration with a known physical reference or display diagonal.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "url": SITE_URL,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Measurement in centimeters and inches",
    "User-calibrated screen scale",
    "Compatible with all devices",
    "No downloads needed",
    "Credit-card reference and screen-diagonal calibration"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calibrate the online ruler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can calibrate the digital ruler by entering your screen size, using a credit card as a reference, or manually adjusting until it matches a known-size object."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this real size ruler on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The ruler works on modern phones, tablets, and computers, but it must be calibrated separately on each display."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the online ruler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our virtual ruler can be very accurate when properly calibrated, but final precision depends on your screen resolution and correct calibration."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
