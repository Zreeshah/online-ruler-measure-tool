import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Natural Units in Physics: Practical Overview',
  description: 'Explore natural-unit conventions in physics, including Planck units, common constant choices, conversions, and practical limitations.',
  keywords: ['natural units', 'Planck units', 'physics', 'fundamental constants', 'theoretical physics'],
  path: '/blog/natural-units-system',
  type: 'article',
});

export default function NaturalUnitsSystem() {
  return (
    <BlogLayout
      currentUrl="/blog/natural-units-system"
      publishDate="May 5, 2025"
      imageUrl="/lovable-uploads/6e30be3b-fb3c-45ac-9368-d0c966ceb463.jpg"
      imageAlt="Natural measurement systems and physics principles visualization"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Natural Units in Physics: Practical Overview</h1>
      <p className="lead">Natural units are conventions that set selected physical constants equal to one. They shorten equations and make relationships easier to see, but they do not remove dimensions from physical quantities.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What changes when a constant equals one?</h2>
      <p>In SI, the speed of light is written as <strong>c = 299,792,458 m/s</strong>. In a convention where c = 1, time and distance use compatible units, so a time interval can be expressed as the distance light travels during that interval. The numerical conversion factor is suppressed inside equations, then restored when a result is converted back to SI.</p>
      <p>Different fields choose different constants. Relativistic calculations often use c = 1. Quantum field theory commonly uses c = ℏ = 1. Statistical mechanics may also use the Boltzmann constant k<sub>B</sub> = 1 so temperature can be expressed as an energy.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A simple conversion example</h2>
      <p>Light travels one light-second in one second. In c = 1 units, that relationship is written as a distance of 1 second. Returning to SI requires multiplying by c:</p>
      <p><strong>1 s × 299,792,458 m/s = 299,792,458 m.</strong></p>
      <p>This is why a natural-unit result is incomplete unless the chosen convention is stated. Two papers can both use “natural units” while setting different constants to one.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Planck units</h2>
      <p>Planck units combine c, ℏ, the gravitational constant G, and sometimes k<sub>B</sub>. Common examples include:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Planck length:</strong> √(ℏG/c³), about 1.616 × 10⁻³⁵ m.</li>
        <li><strong>Planck time:</strong> √(ℏG/c⁵), about 5.391 × 10⁻⁴⁴ s.</li>
        <li><strong>Planck mass:</strong> √(ℏc/G), about 2.176 × 10⁻⁸ kg.</li>
        <li><strong>Planck temperature:</strong> Planck energy divided by k<sub>B</sub>, about 1.417 × 10³² K.</li>
      </ul>
      <p>Values involving G carry measurement uncertainty, so use the current CODATA values when precision matters rather than copying rounded figures into a calculation.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common mistakes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Calling every natural-unit convention “Planck units.”</li>
        <li>Assuming a quantity has no dimensions because a conversion constant is omitted.</li>
        <li>Mixing SI values with c = 1 or ℏ = 1 values without restoring the required factors.</li>
        <li>Reporting a result without naming the convention used.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When to use them</h2>
      <p>Natural units are useful in relativity, particle physics, cosmology, and statistical mechanics. For laboratory reporting, engineering, and daily measurements, SI units remain clearer because the unit symbols preserve scale and traceability. For ordinary length checks, use the <a href="/blog/metric-system-explained">metric-system guide</a> or a calibrated physical instrument.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/programs-projects/fundamental-constants-nature" rel="noopener noreferrer">NIST: Fundamental Constants in Nature</a></li>
        <li><a href="https://physics.nist.gov/cuu/Constants/index.html" rel="noopener noreferrer">NIST: CODATA Recommended Values of the Fundamental Physical Constants</a></li>
        <li><a href="https://www.bipm.org/en/publications/si-brochure" rel="noopener noreferrer">BIPM: The International System of Units (SI Brochure)</a></li>
      </ul>
    </BlogLayout>
  );
}
