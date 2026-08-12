import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Email the Online Ruler team with questions, corrections, accessibility reports, or device-test feedback.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactPageClient />;
}
