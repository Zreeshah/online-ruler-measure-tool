import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'British Imperial and U.S. Customary Units',
  description: 'Understand how British Imperial and U.S. customary units are related, where they differ, and how common length units convert to SI.',
  keywords: ['British Imperial units', 'US customary units', 'inches', 'feet', 'measurement conversion'],
  path: '/blog/imperial-measurement-system',
  type: 'article',
});

export default function ImperialMeasurementSystem() {
  return (
    <BlogLayout currentUrl="/blog/imperial-measurement-system" publishDate="May 12, 2025" imageUrl="/lovable-uploads/2bfee74f-0a29-4825-ba3c-d22d5a01c53d.jpg" imageAlt="Historical charts of British Imperial measurement units">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">British Imperial and U.S. Customary Units</h1>
      <p className="lead">British Imperial and U.S. customary measurement developed from older English units. They share many unit names, but they are distinct systems and should not be treated as interchangeable.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why the Names Matter</h2>
      <p>The British Imperial System was established in the United Kingdom in the nineteenth century. The United States uses U.S. customary units. NIST recommends using the term &quot;U.S. customary&quot; for the U.S. system rather than calling it British or Imperial.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shared Length Relationships</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>1 inch</strong> = exactly 25.4 mm</li>
        <li><strong>1 foot</strong> = 12 inches = exactly 0.3048 m</li>
        <li><strong>1 yard</strong> = 3 feet = exactly 0.9144 m</li>
        <li><strong>1 international mile</strong> = 1,760 yards = exactly 1.609344 km</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Differences</h2>
      <p>Volume is the clearest everyday example: a U.S. liquid gallon is about 3.785 L, while an Imperial gallon is about 4.546 L. Their pints and fluid ounces therefore differ too. Some mass terminology also differs, including the U.S. short ton and British long ton.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using the Online Ruler</h2>
      <p>The ruler supports centimetres, millimetres, and inches. Calibrate the current display before using its physical scale; the tool does not convert volume or mass units.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/pml/owm/faqs/us-metrication-faqs" rel="noopener noreferrer">NIST: U.S. Metrication FAQs</a></li>
        <li><a href="https://www.nist.gov/pml/owm/si-units-length" rel="noopener noreferrer">NIST: SI Units—Length</a></li>
      </ul>
    </BlogLayout>
  );
}
