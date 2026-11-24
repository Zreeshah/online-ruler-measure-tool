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

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Buckingham Pi Theorem, in Plain Terms</h2>
      <p>The Buckingham Pi theorem says that a problem with n variables and k fundamental dimensions can be rewritten using n − k independent dimensionless groups. In practice, that means a fluid-flow problem with velocity, length, density, and viscosity (4 variables, 3 dimensions: mass, length, time) collapses to one group — the Reynolds number. Engineers use this to design scale models: if the model and the real thing share the same Reynolds number, the flow behaviour matches even though the sizes differ. A ship model tested in a towing tank and a full-size ship in the ocean are compared through Reynolds (and Froude) numbers, not through raw speeds.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Froude Number: Waves and Ships</h2>
      <p>The Froude number compares inertial effects with gravity: <strong>Fr = v ÷ √(gL)</strong>, where v is speed, g is gravitational acceleration, and L is a characteristic length. A ship travelling at 10 m/s with a waterline length of 100 m has Fr = 10 ÷ √(9.81 × 100) ≈ 0.32. Model ships are tested at the same Froude number as the full-size vessel so the wave pattern matches. Unlike Reynolds number, which governs viscosity, Froude governs free-surface waves — which is why towing-tank tests match Froude and correct separately for Reynolds effects.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nusselt Number: Heat Transfer</h2>
      <p>The Nusselt number compares convective heat transfer with conductive heat transfer: <strong>Nu = hL ÷ k</strong>, where h is the convective coefficient, L is a characteristic length, and k is thermal conductivity. A Nusselt number of 1 means heat moves by conduction alone; larger values mean convection dominates. Heat-exchanger design relies on correlations that express Nu as a function of Reynolds and Prandtl numbers, which lets one correlation cover many fluids, sizes, and speeds — the same dimensionless-group logic as in fluid flow.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dimensionless Numbers in Everyday Life</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Aspect ratio:</strong> a screen's 16:9 is a ratio of two lengths — dimensionless, and the reason a 16:9 phone and a 16:9 television show the same shape at different sizes.</li>
        <li><strong>Gear ratio:</strong> teeth on one gear divided by teeth on another; a 3:1 ratio means the same speed change on a bicycle or a truck.</li>
        <li><strong>Specific gravity:</strong> a material's density divided by water's density; a value of 0.8 means the material floats.</li>
        <li><strong>Percent:</strong> a ratio scaled by 100 — the reason a 20% slope and a 20% discount are the same kind of number applied to different things.</li>
      </ul>
      <p>These everyday ratios work the same way as Reynolds and Mach numbers: they strip away units so the relationship itself can be compared. The unit systems they sit on top of are covered in <a href="/blog/metric-system-explained">Metric System Basics</a>, and the natural-unit conventions that set constants to one are covered in <a href="/blog/natural-units-system">Natural Units in Physics</a>.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What is the SI unit of a dimensionless quantity?</h3>
      <p>One, symbol 1 — though the symbol is normally omitted. A strain of 0.0005 is written as 0.0005, not 0.0005 "ones".</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Can a dimensionless number be greater than one?</h3>
      <p>Yes, often. Reynolds numbers in pipes are routinely in the thousands, and a Mach number above 1 simply means supersonic flow. "Dimensionless" describes the units, not the size.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why do scale models work at all?</h3>
      <p>Because the physics depends on dimensionless groups, not on absolute size. Match the governing groups — Reynolds for viscosity, Froude for waves — and the model behaves like the real thing.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Dimensionless numbers are ratios; their coherent SI unit is one, usually unwritten.</li>
        <li>Reynolds governs viscosity, Mach governs compressibility, Froude governs waves, Nusselt governs heat transfer.</li>
        <li>The Buckingham Pi theorem explains why a few groups can replace many variables.</li>
        <li>Always convert to consistent units before the dimensions cancel — millimetres against metres is the classic error.</li>
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
