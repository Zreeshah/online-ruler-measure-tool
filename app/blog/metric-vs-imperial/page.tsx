import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Metric vs U.S. Customary Measurement',
  description: 'Compare SI metric units with U.S. customary units, understand how British Imperial units differ, and use common length conversions.',
  keywords: ['metric vs US customary', 'measurement systems', 'unit conversion', 'metric system', 'imperial system'],
  path: '/blog/metric-vs-imperial',
  type: 'article',
});

export default function MetricVsImperial() {
  return (
    <BlogLayout currentUrl="/blog/metric-vs-imperial" publishDate="April 15, 2025" imageUrl="/lovable-uploads/sistema-anglosajón.jpg" imageAlt="Comparison of metric and imperial measurement tools">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Metric vs U.S. Customary Measurement</h1>
      <p className="lead">Most international work uses the International System of Units (SI). Everyday measurements in the United States often use U.S. customary units. British Imperial units are historically related, but they are not identical to the U.S. system.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Metric System</h2>
      <p>The metric system (International System of Units, SI) is used by most countries worldwide. It&apos;s based on powers of 10, making conversions straightforward.</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Length</strong>: meter (m), centimeter (cm), millimeter (mm), kilometer (km)</li>
        <li><strong>Weight</strong>: gram (g), kilogram (kg)</li>
        <li><strong>Volume</strong>: liter (L), milliliter (mL)</li>
        <li><strong>Temperature</strong>: Celsius (°C)</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The U.S. Customary System</h2>
      <p>U.S. customary measurement uses units such as inches, feet, yards, miles, ounces, pounds, and U.S. gallons. NIST advises against calling these units &quot;British&quot; or &quot;Imperial&quot; because the systems differ—especially for volume and some mass units.</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Length</strong>: inch (in), foot (ft), yard (yd), mile (mi)</li>
        <li><strong>Mass/weight in everyday use</strong>: ounce (oz), pound (lb)</li>
        <li><strong>Volume</strong>: U.S. fluid ounce, cup, pint, quart, and gallon</li>
        <li><strong>Temperature</strong>: Fahrenheit (°F)</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Conversions</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>1 inch = 2.54 centimeters</li>
        <li>1 foot = 30.48 centimeters</li>
        <li>1 mile = 1.609 kilometers</li>
        <li>1 pound = 0.4536 kilograms</li>
        <li>1 U.S. gallon ≈ 3.785 liters</li>
        <li>°F = (°C × 9/5) + 32</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which System Should You Use?</h2>
      <p>Use SI for scientific and international work unless a required standard specifies otherwise. For everyday U.S. measurements, use U.S. customary units. This online ruler supports length in centimetres, millimetres, and inches after screen calibration.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/pml/owm/faqs/us-metrication-faqs" rel="noopener noreferrer">NIST: U.S. Metrication FAQs</a></li>
        <li><a href="https://www.bipm.org/en/measurement-units" rel="noopener noreferrer">BIPM: SI measurement units</a></li>
      </ul>
    </BlogLayout>
  );
}
