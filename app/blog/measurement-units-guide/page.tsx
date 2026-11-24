import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({ title: 'Common Measurement Units: Quick Reference', description: 'A practical introduction to common length, mass, volume, and temperature units with corrected SI terminology and primary sources.', keywords: ['measurement units', 'unit conversion', 'length units', 'mass units', 'measurement guide'], path: '/blog/measurement-units-guide', type: 'article' });
export default function MeasurementUnitsGuide() {
  return (
    <BlogLayout currentUrl="/blog/measurement-units-guide" publishDate="April 25, 2025" imageUrl="/lovable-uploads/3aaf4fe4-39fa-4068-9fb3-a5d1decbbc8e.jpg" imageAlt="Decimal metric system units and conversion chart">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Common Measurement Units: Quick Reference</h1>
      <p className="lead">Understanding measurement units is essential for science, cooking, construction, and daily life. This guide covers all the major units you need to know.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Length Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Millimeter (mm)</strong>: 1/1000 of a meter. Used for precision measurements.</li>
        <li><strong>Centimeter (cm)</strong>: 1/100 of a meter. Common for everyday measurements.</li>
        <li><strong>Meter (m)</strong>: The base SI unit of length.</li>
        <li><strong>Kilometer (km)</strong>: 1,000 meters. Used for distances.</li>
        <li><strong>Inch (in)</strong>: 2.54 cm. Standard in the US.</li>
        <li><strong>Foot (ft)</strong>: 12 inches or 30.48 cm.</li>
        <li><strong>Yard (yd)</strong>: 3 feet or 91.44 cm.</li>
        <li><strong>Mile (mi)</strong>: 5,280 feet or 1.609 km.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Weight/Mass Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Gram (g)</strong>: 1/1000 of a kilogram; commonly used for small masses.</li>
        <li><strong>Kilogram (kg)</strong>: The SI base unit of mass; 1 kilogram = 1,000 grams.</li>
        <li><strong>Ounce (oz)</strong>: 28.35 grams.</li>
        <li><strong>Pound (lb)</strong>: 16 ounces or 453.6 grams.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Volume Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Milliliter (mL)</strong>: 1/1000 of a liter.</li>
        <li><strong>Liter (L)</strong>: A non-SI unit accepted for use with SI; 1 L = 1 cubic decimetre.</li>
        <li><strong>Gallon</strong>: 3.785 liters (US) or 4.546 liters (UK).</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Temperature Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Celsius (°C)</strong>: At standard atmospheric pressure, pure water freezes near 0°C and boils near 100°C.</li>
        <li><strong>Fahrenheit (°F)</strong>: At standard atmospheric pressure, pure water freezes near 32°F and boils near 212°F.</li>
        <li><strong>Kelvin (K)</strong>: Absolute temperature scale. 0K = -273.15°C.</li>
      </ul>
      <p>Use the online ruler for quick, calibrated length checks in metric units or inches, and verify important results with a physical instrument.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing the Right Unit for the Job</h2>
      <p>A good measurement uses a unit that keeps the number between roughly 0.1 and 1,000. Report a room as 4.2 m, not 4,200 mm or 0.0042 km; report a screw as 12 mm, not 1.2 cm or 0.012 m. This "scale ladder" habit prevents lost decimal points and makes numbers readable at a glance. The ladder for length runs: nanometre (nm) for light waves, micrometre (µm) for cells, millimetre for small parts, centimetre for everyday objects, metre for rooms, kilometre for travel. Step up or down the ladder by factors of ten until the number looks sensible.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Everyday Reference Sizes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Credit card:</strong> 85.60 × 53.98 mm — the standard calibration reference for a screen ruler.</li>
        <li><strong>A4 paper:</strong> 210 × 297 mm; US Letter is 8.5 × 11 in (215.9 × 279.4 mm).</li>
        <li><strong>US penny:</strong> 19.05 mm across; a euro 1 coin is 23.25 mm.</li>
        <li><strong>Smartphone:</strong> typically 140–170 mm tall, 70–80 mm wide.</li>
        <li><strong>Door height:</strong> about 2.0 m in most homes; a standard doorway is roughly 0.8 m wide.</li>
        <li><strong>Human hair:</strong> about 50–100 µm thick — far below what any ruler can show.</li>
      </ul>
      <p>Reference sizes are handy for rough checks, but they are not calibration standards. Only a known standard — a card, a ruler, a gauge block — should be used to calibrate a screen ruler, as explained in <a href="/blog/how-to-measure-on-phone">How to Measure on Your Phone Screen</a>.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unit Symbols, Capitalization, and Plurals</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Symbols are not abbreviations: write "5 kg", not "5 kgs" or "5 Kg".</li>
        <li>Case matters: m is metre, M is mega; mm is millimetre, Mm is megametre.</li>
        <li>Leave a space between the number and the symbol: "25 mm", not "25mm". The exception is the degree symbol for angles and temperature in some styles (°C is usually written without a space in English text, as 20 °C in SI style).</li>
        <li>Spell out the unit name in prose when it reads better ("five kilograms"), but use the symbol in tables and next to numbers.</li>
        <li>The SI rules behind these conventions are covered in <a href="/blog/metric-system-explained">Metric System Basics</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Worked Conversion Examples</h2>
      <p><strong>Length:</strong> 6 ft 2 in = 74 in × 2.54 cm/in = 187.96 cm ≈ 1.88 m. <strong>Mass:</strong> 150 lb × 0.45359237 kg/lb = 68.04 kg. <strong>Volume:</strong> 2 U.S. gallons × 3.785 L = 7.57 L (note: Imperial gallons would give 9.09 L — always state which gallon). <strong>Temperature:</strong> 68 °F = (68 − 32) × 5/9 = 20 °C. Work each conversion in one chain and round only at the end.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What is the difference between mass and weight?</h3>
      <p>Mass (kilograms) is the amount of matter; weight is the force gravity exerts on it (newtons). Everyday scales report mass, even though people call it weight. On the Moon your mass is unchanged but your weight is about one sixth of Earth's.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Is a tonne the same as a ton?</h3>
      <p>No. A metric tonne is 1,000 kg. A U.S. short ton is 2,000 lb (907.18 kg) and a British long ton is 2,240 lb (1,016.05 kg). Always qualify "ton".</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why are there two kinds of fluid ounce?</h3>
      <p>The U.S. fluid ounce (29.57 mL) and the Imperial fluid ounce (28.41 mL) come from different gallon definitions. A recipe that says "8 fl oz" means different volumes on each side of the Atlantic.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Pick a unit that keeps the number between about 0.1 and 1,000.</li>
        <li>Symbols are case-sensitive, never pluralized, and spaced from the number.</li>
        <li>Mass and weight are different quantities; a tonne is not a ton.</li>
        <li>Convert in one chain and round only at the end.</li>
        <li>For system comparisons, see <a href="/blog/metric-vs-imperial">Metric vs U.S. Customary Measurement</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes" rel="noopener noreferrer">NIST Guide to SI units and prefixes</a></li>
        <li><a href="https://www.bipm.org/en/publications/si-brochure" rel="noopener noreferrer">BIPM SI Brochure</a></li>
      </ul>
    </BlogLayout>
  );
}
