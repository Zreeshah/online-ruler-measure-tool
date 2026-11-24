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

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Short History: How the Inch Became Exactly 25.4 mm</h2>
      <p>The inch was once defined by physical standards that differed between countries. In 1959, the United States, the United Kingdom, Canada, Australia, New Zealand, and South Africa agreed on the international yard and pound: one yard equals exactly 0.9144 m, which makes one inch exactly 25.4 mm. That agreement is why metric and imperial lengths convert exactly today, even though the two systems grew up separately. The metre itself has been redefined several times — most recently in 2019, when the SI base units were tied to fixed values of physical constants — but the 25.4 mm inch has not changed since 1959.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where Each System Is Used Today</h2>
      <p>SI is the official system in almost every country and the standard in science, medicine, and international trade. The United States uses U.S. customary units for everyday life — road distances in miles, room sizes in feet, body weight in pounds — while its science, medicine, and military largely work in metric. The United Kingdom mixes the two: road distances in miles, beer in pints, but food sold in grams and kilograms. Canada and Australia are officially metric but retain feet and inches in construction and everyday speech. Knowing which system your audience uses matters more than which system is "better".</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conversion Tables</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>From</th><th>To</th><th>Multiply by</th></tr></thead>
          <tbody>
            <tr><td>inches</td><td>millimetres</td><td>25.4 (exact)</td></tr>
            <tr><td>feet</td><td>metres</td><td>0.3048 (exact)</td></tr>
            <tr><td>yards</td><td>metres</td><td>0.9144 (exact)</td></tr>
            <tr><td>miles</td><td>kilometres</td><td>1.609344 (exact)</td></tr>
            <tr><td>ounces (mass)</td><td>grams</td><td>28.349523125 (exact)</td></tr>
            <tr><td>pounds (mass)</td><td>kilograms</td><td>0.45359237 (exact)</td></tr>
          </tbody>
        </table>
      </div>
      <p>Length conversions between the inch and the millimetre are exact because both are defined that way. Volume conversions are not exact in the same sense: a U.S. liquid gallon is about 3.785 L, while an Imperial gallon is about 4.546 L, so always state which gallon you mean. For the full SI background, see <a href="/blog/metric-system-explained">Metric System Basics</a>, and for the British–American differences in detail, see <a href="/blog/imperial-measurement-system">Imperial vs U.S. Customary Units</a>.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Conversion Mistakes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Mixing gallons:</strong> U.S. and Imperial gallons differ by about 20%. A recipe or fuel figure is meaningless without the qualifier.</li>
        <li><strong>Forgetting area and volume scale:</strong> 1 ft² is 144 in², not 12 in², and 1 m³ is 1,000,000 cm³, not 100 cm³.</li>
        <li><strong>Rounding too early:</strong> converting 10 in to 25 cm and then back gives 9.84 in, not 10 in. Keep full precision until the final step.</li>
        <li><strong>Assuming "imperial" means "American":</strong> NIST recommends "U.S. customary" for the U.S. system because the two differ.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Is an inch exactly 25.4 mm?</h3>
      <p>Yes, exactly, since the 1959 international agreement. The foot (12 in) is therefore exactly 304.8 mm and the yard exactly 0.9144 m.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why does the U.S. still use customary units?</h3>
      <p>Everyday use, existing infrastructure, and habit. The U.S. has been officially metric-friendly since the Metric Conversion Act of 1975, but conversion was voluntary, so customary units remain dominant in daily life while science and industry use SI.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Which system should I use for an international audience?</h3>
      <p>SI, with U.S. customary equivalents in parentheses where the audience is American. Give both for dimensions that affect safety or fit.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>1 in = 25.4 mm exactly; 1 ft = 0.3048 m exactly; 1 mile = 1.609344 km exactly.</li>
        <li>U.S. customary and British Imperial share names but differ — most clearly for gallons.</li>
        <li>Use SI for science and international work; use customary units for everyday U.S. contexts.</li>
        <li>Never round until the final step, and remember that area and volume scale by squared and cubed factors.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/pml/owm/faqs/us-metrication-faqs" rel="noopener noreferrer">NIST: U.S. Metrication FAQs</a></li>
        <li><a href="https://www.bipm.org/en/measurement-units" rel="noopener noreferrer">BIPM: SI measurement units</a></li>
      </ul>
    </BlogLayout>
  );
}
