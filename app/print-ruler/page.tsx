import type { Metadata } from 'next';
import PrintRulerClient from './PrintRulerClient';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pageDescription = 'Print an 18 cm metric ruler and 7 inch ruler at actual size, then verify the required 100 mm test line before measuring.';

export const metadata: Metadata = createPageMetadata({
  title: 'Printable Ruler with 100 mm Scale Check',
  description: pageDescription,
  keywords: ['print ruler', 'printable ruler', 'metric ruler', 'inch ruler', '100 mm test line'],
  path: '/print-ruler',
});

export default function PrintRulerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <PageStructuredData name="Printable Ruler" description={pageDescription} path="/print-ruler" />
      <PrintRulerClient />
      <Footer />
    </div>
  );
}
