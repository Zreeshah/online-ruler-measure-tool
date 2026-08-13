import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Calibrated Online Ruler for Screen Measurements',
  description: 'Free online ruler for cm, mm, and inch measurements. Calibrate the screen scale with a physical card or known display diagonal before use.',
  keywords: ['ruler', 'ruler online', 'online ruler', 'ruler measurements', 'inch ruler', 'cm ruler', 'ruler on phone', 'real size ruler', 'phone ruler', 'online tape measure'],
  path: '/',
});

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}/#webapp`,
  "name": "Online Ruler",
  "description": "On-screen ruler for cm, mm, and inch measurements after user calibration with a known physical reference or display diagonal.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript and a modern web browser",
  "isAccessibleForFree": true,
  "url": SITE_URL,
  "mainEntityOfPage": SITE_URL,
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "offers": {
    "@type": "Offer",
    "price": 0,
    "priceCurrency": "USD"
  },
  "featureList": [
    "Measurement in centimeters and inches",
    "User-calibrated screen scale",
    "Designed for modern phones, tablets, and computers",
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
        "text": "Match the on-screen reference to a standard 85.60 mm ID-1 card, or enter the manufacturer-listed display diagonal. Keep browser zoom at 100%."
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
        "text": "Accuracy varies with calibration, browser zoom, operating-system scaling, display geometry, and object placement. Verify the scale against a trusted physical reference and use certified tools for critical work."
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
