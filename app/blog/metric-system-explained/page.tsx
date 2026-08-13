import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Metric System Basics: Units and Prefixes',
  description: 'Learn the seven SI base units, decimal prefixes, conversion steps, notation rules, and practical uses of the metric system.',
  keywords: ['metric system', 'SI units', 'measurement', 'meters', 'metric prefixes'],
  path: '/blog/metric-system-explained',
  type: 'article',
});

export default function MetricSystemExplained() {
  return (
    <BlogLayout
      currentUrl="/blog/metric-system-explained"
      publishDate="April 20, 2025"
      imageUrl="/lovable-uploads/sistema-metrico-ventajas.jpg"
      imageAlt="Visualizing the advantages of the decimal metric system"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Metric System Basics: Units and Prefixes</h1>
      <p className="lead">The International System of Units (SI) is the modern form of the metric system. It provides defined units, decimal prefixes, and writing rules so measurements can be understood and reproduced internationally.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The seven SI base units</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr></thead>
          <tbody>
            <tr><td>Time</td><td>second</td><td>s</td></tr>
            <tr><td>Length</td><td>metre</td><td>m</td></tr>
            <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
            <tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
            <tr><td>Thermodynamic temperature</td><td>kelvin</td><td>K</td></tr>
            <tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr>
            <tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr>
          </tbody>
        </table>
      </div>
      <p>Derived units combine base units. Speed uses metres per second (m/s); force uses the newton (N), equal to kg·m/s²; and energy uses the joule (J), equal to kg·m²/s².</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Decimal prefixes</h2>
      <p>Prefixes scale a unit by a power of ten. The prefix and unit form one symbol without a space.</p>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Prefix</th><th>Symbol</th><th>Factor</th><th>Length example</th></tr></thead>
          <tbody>
            <tr><td>kilo</td><td>k</td><td>10³</td><td>1 km = 1,000 m</td></tr>
            <tr><td>centi</td><td>c</td><td>10⁻²</td><td>1 cm = 0.01 m</td></tr>
            <tr><td>milli</td><td>m</td><td>10⁻³</td><td>1 mm = 0.001 m</td></tr>
            <tr><td>micro</td><td>µ</td><td>10⁻⁶</td><td>1 µm = 0.000001 m</td></tr>
            <tr><td>nano</td><td>n</td><td>10⁻⁹</td><td>1 nm = 0.000000001 m</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to convert metric lengths</h2>
      <p>Convert by multiplying by the ratio between prefix factors. For example:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>2.35 m to cm:</strong> 2.35 × 100 = 235 cm.</li>
        <li><strong>48 mm to cm:</strong> 48 ÷ 10 = 4.8 cm.</li>
        <li><strong>0.72 km to m:</strong> 0.72 × 1,000 = 720 m.</li>
      </ul>
      <p>Area and volume require squared or cubed conversion factors. Because 1 m = 100 cm, 1 m² = 10,000 cm² and 1 m³ = 1,000,000 cm³.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Notation rules that prevent mistakes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Leave a space between the value and symbol: 25 mm, not 25mm.</li>
        <li>Do not pluralize symbols: 5 kg, not 5 kgs.</li>
        <li>Symbols are case-sensitive: m means metre, while M means mega.</li>
        <li>The kilogram already contains a prefix; use milligram (mg), not microkilogram.</li>
        <li>Use a leading zero for values below one: 0.5 m, not .5 m.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using metric units on a ruler</h2>
      <p>On a standard metric ruler, 10 millimetres equal 1 centimetre. Place the object at the zero mark, read the last whole centimetre, then count additional millimetres. The <a href="/blog/how-to-read-a-ruler">ruler-marking guide</a> includes worked examples, while the homepage tool requires screen calibration before it represents physical size.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.bipm.org/en/publications/si-brochure" rel="noopener noreferrer">BIPM: The International System of Units (SI Brochure)</a></li>
        <li><a href="https://www.bipm.org/en/measurement-units" rel="noopener noreferrer">BIPM: SI defining constants, base units, and prefixes</a></li>
        <li><a href="https://www.nist.gov/pml/special-publication-811" rel="noopener noreferrer">NIST Special Publication 811: Guide for the Use of SI</a></li>
      </ul>
    </BlogLayout>
  );
}
