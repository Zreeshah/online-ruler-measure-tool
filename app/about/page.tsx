import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us',
  description: 'Learn how Online-Ruler.Onl handles screen calibration, measurement limitations, privacy, and editorial review.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutPageClient />;
}
