import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';

const pageDescription = 'Email the Online Ruler team with questions, corrections, accessibility reports, or device-test feedback.';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: pageDescription,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageStructuredData type="ContactPage" name="Contact Online Ruler" description={pageDescription} path="/contact" />
      <ContactPageClient />
    </>
  );
}
