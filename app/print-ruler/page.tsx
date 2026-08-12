import type { Metadata } from 'next';
import PrintRulerClient from './PrintRulerClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Printable Ruler with 100 mm Scale Check',
  description: 'Print an 18 cm metric ruler and 7 inch ruler at actual size, then verify the required 100 mm test line before measuring.',
  keywords: ['print ruler', 'printable ruler', 'metric ruler', 'inch ruler', '100 mm test line'],
  path: '/print-ruler',
});

export default function PrintRulerPage() {
  return <PrintRulerClient />;
}
