import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
export const metadata: Metadata = { title: 'Measurement Units Guide: Everything You Need to Know', description: 'Complete guide to measurement units. Learn about length, weight, volume, temperature units and how to convert between them.', keywords: ['measurement units', 'unit conversion', 'length units', 'weight units', 'measurement guide'], alternates: { canonical: 'https://online-ruler.onl/blog/measurement-units-guide' } };
export default function MeasurementUnitsGuide() {
  return (
    <BlogLayout currentUrl="/blog/measurement-units-guide" publishDate="April 25, 2025" imageUrl="/lovable-uploads/3aaf4fe4-39fa-4068-9fb3-a5d1decbbc8e.jpg" imageAlt="Decimal metric system units and conversion chart">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Measurement Units Guide: Everything You Need to Know</h1>
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
        <li><strong>Gram (g)</strong>: Base metric unit for small weights.</li>
        <li><strong>Kilogram (kg)</strong>: 1,000 grams. Standard SI unit of mass.</li>
        <li><strong>Ounce (oz)</strong>: 28.35 grams.</li>
        <li><strong>Pound (lb)</strong>: 16 ounces or 453.6 grams.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Volume Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Milliliter (mL)</strong>: 1/1000 of a liter.</li>
        <li><strong>Liter (L)</strong>: Base metric unit for volume.</li>
        <li><strong>Gallon</strong>: 3.785 liters (US) or 4.546 liters (UK).</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Temperature Units</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Celsius (°C)</strong>: Water freezes at 0°C, boils at 100°C.</li>
        <li><strong>Fahrenheit (°F)</strong>: Water freezes at 32°F, boils at 212°F.</li>
        <li><strong>Kelvin (K)</strong>: Absolute temperature scale. 0K = -273.15°C.</li>
      </ul>
      <p>Use our online ruler for quick and precise length measurements in both metric and imperial units!</p>
    </BlogLayout>
  );
}
