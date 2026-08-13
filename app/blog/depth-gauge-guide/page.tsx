import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Depth Gauge Types and Basic Use',
  description: 'Compare depth-gauge types and follow a basic procedure for zeroing, seating, reading, checking, and reporting depth measurements.',
  keywords: ['depth gauge', 'depth measurement', 'depth micrometer', 'vernier depth gauge', 'measurement tools'],
  path: '/blog/depth-gauge-guide',
  type: 'article',
});

export default function DepthGaugeGuide() {
  return (
    <BlogLayout
      currentUrl="/blog/depth-gauge-guide"
      publishDate="May 15, 2025"
      imageUrl="/lovable-uploads/418b6e62-05e8-4066-b239-ae9919d11840.jpg"
      imageAlt="Depth gauge and caliper used for depth measurement"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Depth Gauge Types and Basic Use</h1>
      <p className="lead">A depth gauge measures the distance from a reference surface to the bottom of a recess, hole, slot, or step. The correct instrument and method depend on the feature shape, expected depth, tolerance, and required traceability.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common types</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Rule depth gauge:</strong> a graduated rule slides through a flat base. It is quick but suited to relatively coarse readings.</li>
        <li><strong>Vernier depth gauge:</strong> a vernier scale resolves smaller increments than a plain rule.</li>
        <li><strong>Dial depth gauge:</strong> a contact rod moves a dial indicator for comparative or direct readings.</li>
        <li><strong>Digital depth gauge:</strong> an electronic display simplifies reading and may switch units.</li>
        <li><strong>Depth micrometer:</strong> a precision screw advances a rod from a reference base; interchangeable rods may cover multiple ranges.</li>
        <li><strong>Depth attachment on a caliper:</strong> useful for general checks, but the narrow reference surfaces and rod geometry may not suit every feature.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Basic measurement procedure</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li><strong>Inspect and clean:</strong> remove chips, oil films, burrs, and dirt from the reference face, contact point, and feature.</li>
        <li><strong>Check zero:</strong> place the gauge on a clean, flat reference surface and bring the rod into contact. Confirm zero or record the correction.</li>
        <li><strong>Seat the base:</strong> keep the base flat against the same reference surface from which depth is defined.</li>
        <li><strong>Lower the contact:</strong> advance gently until it touches the feature bottom. Use a consistent measuring force; do not flex the rod.</li>
        <li><strong>Keep alignment:</strong> the rod should follow the intended measurement axis. Tilting can increase the apparent depth.</li>
        <li><strong>Read and repeat:</strong> record the value and unit, then repeat at least once. For a broad bottom, check multiple positions.</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example</h2>
      <p>A digital depth gauge is zeroed on a reference block. Three readings in a counterbore are 12.42 mm, 12.44 mm, and 12.43 mm. The mean is 12.43 mm, but the spread also matters. A drawing tolerance must be compared with the instrument specification, calibration status, environment, and measurement method—not only the display resolution.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Error sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Burrs or debris preventing the base from seating.</li>
        <li>A rounded or pointed contact that reaches a different surface than intended.</li>
        <li>Using the wrong extension rod or failing to include its offset.</li>
        <li>Excessive force, rod tilt, or measuring near an edge.</li>
        <li>Temperature differences between the part, gauge, and reference.</li>
        <li>Confusing display resolution with measurement accuracy.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing a suitable gauge</h2>
      <p>Select a range that covers the feature without placing the instrument at its limit. The base must bridge the opening and contact a stable datum. The contact shape must reach the intended bottom. For tight tolerances, use an instrument with a current calibration and an uncertainty appropriate to the decision.</p>
      <p>A screen ruler cannot replace a depth gauge because a display provides a flat two-dimensional scale. Use the <Link href="/">online ruler</Link> only for calibrated, non-critical length checks that can be placed directly against the screen.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.starrett.com/docs/default-source/user-guides/depth-gages/5004-user-manual_form-956.pdf?sfvrsn=7c151880_9" rel="noopener noreferrer">Starrett: 5004 Series Depth Gage user manual</a></li>
        <li><a href="https://www.nist.gov/programs-projects/dimensional-measurement-services" rel="noopener noreferrer">NIST: Dimensional Measurement Services</a></li>
        <li><a href="https://www.itl.nist.gov/div898/handbook/mpc/section3/mpc36.htm" rel="noopener noreferrer">NIST/SEMATECH: Instrument calibration over a range</a></li>
      </ul>
    </BlogLayout>
  );
}
