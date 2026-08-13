import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'MKS System: Meter-Kilogram-Second',
  description: 'Learn how metres, kilograms, and seconds form a coherent mechanical unit system and connect to the modern SI.',
  keywords: ['MKS system', 'meter kilogram second', 'measurement system', 'SI units', 'physics units'],
  path: '/blog/mks-system',
  type: 'article',
});

export default function MKSSystem() {
  return (
    <BlogLayout
      currentUrl="/blog/mks-system"
      publishDate="May 1, 2025"
      imageUrl="/lovable-uploads/3d520faf-c186-4486-92e5-9bcbb32657b4.jpg"
      imageAlt="MKS unit scale standard representation"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">MKS System: Meter-Kilogram-Second Explained</h1>
      <p className="lead">The MKS system uses the metre for length, kilogram for mass, and second for time. These three units provide a coherent foundation for mechanical quantities and form part of the modern International System of Units (SI).</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The three base units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Metre (m):</strong> the SI base unit of length.</li>
        <li><strong>Kilogram (kg):</strong> the SI base unit of mass.</li>
        <li><strong>Second (s):</strong> the SI base unit of time.</li>
      </ul>
      <p>“Coherent” means that derived-unit equations need no extra numerical conversion factor when coherent units are used. For example, one newton is exactly one kilogram metre per second squared.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common derived quantities</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Quantity</th><th>Named unit</th><th>MKS expression</th></tr></thead>
          <tbody>
            <tr><td>Speed</td><td>metre per second</td><td>m/s</td></tr>
            <tr><td>Acceleration</td><td>metre per second squared</td><td>m/s²</td></tr>
            <tr><td>Force</td><td>newton (N)</td><td>kg·m/s²</td></tr>
            <tr><td>Energy</td><td>joule (J)</td><td>kg·m²/s²</td></tr>
            <tr><td>Power</td><td>watt (W)</td><td>kg·m²/s³</td></tr>
            <tr><td>Pressure</td><td>pascal (Pa)</td><td>kg/(m·s²)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Worked force example</h2>
      <p>A 4 kg object accelerating at 3 m/s² has a net force of:</p>
      <p><strong>F = ma = 4 kg × 3 m/s² = 12 kg·m/s² = 12 N.</strong></p>
      <p>No extra conversion factor is needed because kilograms, metres, and seconds are coherent in this expression.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">MKS, CGS, and SI</h2>
      <p>The centimetre-gram-second (CGS) system uses centimetres, grams, and seconds. Its force unit is the dyne rather than the newton. Converting between CGS and MKS therefore requires powers-of-ten factors: 1 N = 100,000 dyn.</p>
      <p>SI is broader than MKS. In addition to metre, kilogram, and second, SI includes the ampere, kelvin, mole, and candela as base units. The 11th General Conference on Weights and Measures adopted the name International System of Units and abbreviation SI in 1960. Today all SI units are defined through fixed values of defining constants.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical rules</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Write a space between a number and unit symbol: 12 m, not 12m.</li>
        <li>Unit symbols are case-sensitive: m is metre, while M is the prefix mega.</li>
        <li>Use kg as the coherent mass unit; prefixes for mass attach to gram, as in mg.</li>
        <li>State units at every step when converting from CGS, U.S. customary, or natural units.</li>
      </ul>
      <p>For the full set of base units and decimal prefixes, continue with <a href="/blog/metric-system-explained">Metric System Basics</a>.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.bipm.org/en/publications/si-brochure" rel="noopener noreferrer">BIPM: The International System of Units (SI Brochure)</a></li>
        <li><a href="https://www.bipm.org/en/measurement-units" rel="noopener noreferrer">BIPM: The International System of Units</a></li>
        <li><a href="https://www.nist.gov/pml/special-publication-811" rel="noopener noreferrer">NIST Special Publication 811: Guide for the Use of SI</a></li>
      </ul>
    </BlogLayout>
  );
}
