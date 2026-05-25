import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'Metric vs Imperial: Understanding Measurement Systems',
  description: 'Compare metric and imperial measurement systems. Learn the differences, conversion formulas, and when to use each system.',
  keywords: ['metric vs imperial', 'measurement systems', 'unit conversion', 'metric system', 'imperial system'],
  alternates: { canonical: 'https://online-ruler.onl/blog/metric-vs-imperial' },
};

export default function MetricVsImperial() {
  return (
    <BlogLayout currentUrl="/blog/metric-vs-imperial" publishDate="April 15, 2025" imageUrl="/lovable-uploads/sistema-anglosajón.jpg" imageAlt="Comparison of metric and imperial measurement tools">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Metric vs Imperial: Understanding Measurement Systems</h1>
      <p className="lead">The world uses two main measurement systems: metric and imperial. Understanding both is essential for science, engineering, travel, and everyday life.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Metric System</h2>
      <p>The metric system (International System of Units, SI) is used by most countries worldwide. It&apos;s based on powers of 10, making conversions straightforward.</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Length</strong>: meter (m), centimeter (cm), millimeter (mm), kilometer (km)</li>
        <li><strong>Weight</strong>: gram (g), kilogram (kg)</li>
        <li><strong>Volume</strong>: liter (L), milliliter (mL)</li>
        <li><strong>Temperature</strong>: Celsius (°C)</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Imperial System</h2>
      <p>The imperial system is primarily used in the United States, Liberia, and Myanmar. It uses traditional units that aren&apos;t based on a uniform base.</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Length</strong>: inch (in), foot (ft), yard (yd), mile (mi)</li>
        <li><strong>Weight</strong>: ounce (oz), pound (lb)</li>
        <li><strong>Volume</strong>: fluid ounce (fl oz), cup, pint, quart, gallon</li>
        <li><strong>Temperature</strong>: Fahrenheit (°F)</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Conversions</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>1 inch = 2.54 centimeters</li>
        <li>1 foot = 30.48 centimeters</li>
        <li>1 mile = 1.609 kilometers</li>
        <li>1 pound = 0.4536 kilograms</li>
        <li>1 gallon = 3.785 liters</li>
        <li>°F = (°C × 9/5) + 32</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which System Should You Use?</h2>
      <p>In most scientific, medical, and international contexts, the metric system is standard. For everyday use in the US, imperial measurements are more common. Our online ruler supports both systems, allowing you to measure in centimeters, millimeters, or inches with ease.</p>
    </BlogLayout>
  );
}
