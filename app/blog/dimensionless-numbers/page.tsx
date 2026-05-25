import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
export const metadata: Metadata = { title: 'Dimensionless Numbers: What They Are & Examples', description: 'Learn about dimensionless numbers in physics and engineering. Reynolds number, Mach number, and more explained with practical examples.', keywords: ['dimensionless numbers', 'Reynolds number', 'Mach number', 'physics', 'engineering'], alternates: { canonical: 'https://online-ruler.onl/blog/dimensionless-numbers' } };
export default function DimensionlessNumbers() {
  return (
    <BlogLayout currentUrl="/blog/dimensionless-numbers" publishDate="April 22, 2025" imageUrl="/lovable-uploads/numeros-adimensionales.jpg" imageAlt="Abstract scientific visualization of physical fluid dynamics and dimensionless numbers">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Dimensionless Numbers: What They Are & Examples</h1>
      <p className="lead">Dimensionless numbers are quantities without physical units that play crucial roles in physics, engineering, and fluid mechanics. They help compare different physical systems and predict behavior.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Dimensionless Numbers?</h2>
      <p>A dimensionless number is a pure number without any physical unit. It is typically formed as a ratio of two quantities with the same dimensions, causing the units to cancel out. These numbers are fundamental in dimensional analysis and similarity theory.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Dimensionless Numbers</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Reynolds Number (Re)</h3>
      <p>Predicts whether fluid flow will be laminar or turbulent. Re = ρvL/μ, where ρ is density, v is velocity, L is characteristic length, and μ is dynamic viscosity.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Mach Number (Ma)</h3>
      <p>The ratio of the speed of an object to the speed of sound. Ma = v/c. Values greater than 1 indicate supersonic flow.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Froude Number (Fr)</h3>
      <p>Compares inertial forces to gravitational forces in fluid flow. Important in ship design and open-channel hydraulics.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Pi (π)</h3>
      <p>The most famous dimensionless number — the ratio of a circle&apos;s circumference to its diameter, approximately 3.14159.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Applications</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Aerodynamic design and wind tunnel testing</li>
        <li>Chemical engineering and reactor design</li>
        <li>Heat transfer analysis</li>
        <li>Oceanography and meteorology</li>
        <li>Scale modeling and similarity analysis</li>
      </ul>
    </BlogLayout>
  );
}
