import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Dimensionless Numbers: Meaning and Examples',
  description: 'Understand dimensionless quantities and see how Reynolds, Mach, strain, and other ratios are interpreted in science and engineering.',
  keywords: ['dimensionless numbers', 'Reynolds number', 'Mach number', 'physics', 'engineering'],
  path: '/blog/dimensionless-numbers',
  type: 'article',
});

export default function DimensionlessNumbers() {
  return (
    <BlogLayout
      currentUrl="/blog/dimensionless-numbers"
      publishDate="April 22, 2025"
      imageUrl="/lovable-uploads/numeros-adimensionales.jpg"
      imageAlt="Abstract scientific visualization of fluid dynamics and dimensionless numbers"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Dimensionless Numbers: Definition and Examples</h1>
      <p className="lead">A dimensionless quantity is commonly formed by dividing quantities with the same dimensions or by combining variables so every dimensional exponent cancels. Its coherent SI unit is one, symbol 1, although the symbol is normally omitted from the reported value.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A basic ratio example</h2>
      <p>Strain compares a change in length ΔL with an original length L:</p>
      <p><strong>strain = ΔL ÷ L.</strong></p>
      <p>If a 2.000 m bar lengthens by 1.0 mm, first use the same unit for both values: 2.000 m = 2,000 mm. The strain is 1.0 ÷ 2,000 = 0.0005. It may also be expressed as 0.05%, but percent is a scaled form of the same ratio.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reynolds number</h2>
      <p>Reynolds number compares inertial effects with viscous effects in fluid flow:</p>
      <p><strong>Re = ρvL ÷ μ</strong>, where ρ is density, v is speed, L is a characteristic length, and μ is dynamic viscosity.</p>
      <p>When SI units are substituted, kg/m³ × m/s × m ÷ (kg/(m·s)) reduces to one. Reynolds number helps compare flows and anticipate whether viscous or inertial behavior dominates, but transition thresholds depend on geometry and conditions.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mach number</h2>
      <p>Mach number is the ratio of an object or flow speed v to the local speed of sound a:</p>
      <p><strong>M = v ÷ a.</strong></p>
      <p>If an aircraft travels at 250 m/s where the local speed of sound is 340 m/s, M ≈ 0.74. Both inputs use m/s, so the units cancel. The speed of sound changes with the medium and thermodynamic state, so Mach number cannot be inferred from speed alone.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Other useful examples</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Refractive index:</strong> a ratio of two speeds.</li>
        <li><strong>Coefficient of friction:</strong> friction force divided by normal force.</li>
        <li><strong>Relative density:</strong> density compared with a reference density.</li>
        <li><strong>Prandtl number:</strong> a ratio comparing momentum and thermal diffusivity.</li>
        <li><strong>Probability:</strong> a number between zero and one, often shown as a percentage.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why engineers use dimensionless groups</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Compare systems of different physical sizes.</li>
        <li>Design scale-model experiments with similar governing behavior.</li>
        <li>Reduce the number of independent variables in an analysis.</li>
        <li>Present correlations that work across consistent unit systems.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common mistakes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Entering inconsistent units before cancellation, such as millimetres for one length and metres for another.</li>
        <li>Assuming “dimensionless” means physically meaningless.</li>
        <li>Treating degrees or percent as independent dimensions rather than scaled conventions.</li>
        <li>Applying a threshold from one geometry or flow regime to a different problem.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-7-rules-and-style-conventions-expressing-values" rel="noopener noreferrer">NIST Guide to SI: quantities expressed with the unit one</a></li>
        <li><a href="https://www.bipm.org/en/publications/si-brochure" rel="noopener noreferrer">BIPM: The International System of Units (SI Brochure)</a></li>
        <li><a href="https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/role-of-the-mach-number/" rel="noopener noreferrer">NASA Glenn Research Center: Role of the Mach Number</a></li>
      </ul>
    </BlogLayout>
  );
}
