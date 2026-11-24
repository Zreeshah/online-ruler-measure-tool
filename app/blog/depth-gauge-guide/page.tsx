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

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reading a Vernier Depth Gauge, Step by Step</h2>
      <p>A vernier depth gauge adds a sliding vernier scale to the main rule, letting you read finer than the main divisions. First read the main scale up to the last whole mark before the vernier zero — for example, 12 mm. Then find the single vernier line that aligns exactly with a main-scale line; if it is the 6th vernier line and each vernier division is 0.02 mm, add 0.12 mm. The reading is 12.12 mm. Only one vernier line aligns at a time; if two look close, look again under better light and re-check the zero. Digital gauges skip this skill entirely, which is one reason workshops prefer them for routine work — but a vernier never runs out of battery.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How a Depth Micrometer Works</h2>
      <p>A depth micrometer advances a rod by a precision screw, typically 0.5 mm per full turn, with the thimble divided into 50 parts so each part is 0.01 mm. Interchangeable rods cover different ranges (for example 0–25 mm, 25–50 mm, 50–75 mm), and each rod has its own length offset that must be included — forgetting the offset is the classic depth-micrometer error. Seat the base flat on the reference surface, turn the thimble until the rod touches the bottom with a light, consistent feel, then read the sleeve and thimble together. The ratchet stop, where fitted, gives a repeatable measuring force.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Calibration and Gauge Blocks</h2>
      <p>A depth gauge should be checked against a known reference before critical work. The usual check is a gauge block (slip gauge) of certified length wrung onto a flat surface plate: zero the gauge on the plate, then measure the block and compare. A gauge that reads 25.02 mm on a 25.00 mm block has a +0.02 mm error that must be recorded and either corrected or allowed for. Keep a simple log — date, reference used, reading, error — and send the instrument for calibration when the error approaches the tolerance you work to. Temperature matters too: steel expands about 11.5 µm per metre per degree Celsius, so a 25 mm measurement shifts by roughly 0.3 µm per degree — small, but not nothing at tight tolerances.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Depth Gauge vs. Height Gauge</h2>
      <p>The two tools look similar but measure from opposite directions. A depth gauge measures down from a reference surface into a recess. A height gauge measures up from a surface plate to a point on the workpiece, usually with a scriber for marking out. Using one as the other invites datum errors: a depth reading taken from the wrong face is not a height, and a height gauge cannot reach the bottom of a narrow hole. Choose by asking which surface is the datum and which direction the measurement runs.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What is the difference between a depth gauge and a caliper's depth rod?</h3>
      <p>A caliper's depth rod is convenient for rough checks, but the caliper's narrow jaws give a small, less stable reference surface. A dedicated depth gauge has a broad flat base that seats reliably on the datum, which is what makes its readings repeatable.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How deep can a depth gauge measure?</h3>
      <p>Rule and vernier types typically cover 150–300 mm. Depth micrometers cover their rod range, commonly up to 150–300 mm with a set of rods. Beyond that, use a dedicated long-reach gauge or a coordinate measuring machine.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why do my repeat readings differ?</h3>
      <p>Usually seating, force, or dirt: the base was not flat, the rod was tilted, the measuring force varied, or debris sat under the base. Clean everything, zero again, and repeat with the same gentle touch.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Zero on a clean flat reference, seat the base flat, keep the rod on the measurement axis.</li>
        <li>Read a vernier by finding the single aligning line; include the rod offset on a depth micrometer.</li>
        <li>Check against a gauge block before critical work and log the error.</li>
        <li>Display resolution is not accuracy — compare the instrument's uncertainty with the tolerance.</li>
        <li>For angle and slope work rather than depth, see our <a href="/blog/clinometer-guide">Clinometer Guide</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.starrett.com/docs/default-source/user-guides/depth-gages/5004-user-manual_form-956.pdf?sfvrsn=7c151880_9" rel="noopener noreferrer">Starrett: 5004 Series Depth Gage user manual</a></li>
        <li><a href="https://www.nist.gov/programs-projects/dimensional-measurement-services" rel="noopener noreferrer">NIST: Dimensional Measurement Services</a></li>
        <li><a href="https://www.itl.nist.gov/div898/handbook/mpc/section3/mpc36.htm" rel="noopener noreferrer">NIST/SEMATECH: Instrument calibration over a range</a></li>
      </ul>
    </BlogLayout>
  );
}
