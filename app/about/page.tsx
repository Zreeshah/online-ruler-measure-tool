import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';

const pageDescription = 'Learn how Online-Ruler.Onl handles screen calibration, measurement limitations, privacy, and editorial review.';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description: pageDescription,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageStructuredData type="AboutPage" name="About Online Ruler" description={pageDescription} path="/about" />
      <AboutPageClient />
    </>
  );
}
