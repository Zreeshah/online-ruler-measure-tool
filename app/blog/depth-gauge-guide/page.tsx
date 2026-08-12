import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Depth Gauge Types and Basic Use',
  description: 'Learn what depth gauges measure, how common types differ, and why resolution, accuracy, and tolerance must be checked per instrument.',
  keywords: ['depth gauge', 'depth measurement', 'measurement tool', 'gauge resolution', 'gauge types'],
  path: '/blog/depth-gauge-guide',
  type: 'article',
});

export default function DepthGaugeGuide() {
  return (
    <BlogLayout currentUrl="/blog/depth-gauge-guide" publishDate="May 15, 2025" imageUrl="/lovable-uploads/418b6e62-05e8-4066-b239-ae9919d11840.jpg" imageAlt="Depth gauge and caliper used for depth measurement">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Depth Gauge Types and Basic Use</h1>
      <p className="lead">A depth gauge measures the distance from a reference surface to the bottom of a hole, slot, recess, or step. The correct instrument depends on the required range, geometry, resolution, and allowable uncertainty.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Types</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Vernier depth gauge</strong>: Uses a main scale and Vernier scale for a mechanical reading.</li>
        <li><strong>Digital depth gauge</strong>: Displays a digital reading and may switch between metric and inch units.</li>
        <li><strong>Dial depth gauge</strong>: Uses a dial indicator to show displacement.</li>
        <li><strong>Depth micrometer</strong>: Uses a micrometer head and interchangeable rods for controlled contact.</li>
        <li><strong>Application-specific gauges</strong>: Include tire-tread and brake-component gauges.</li>
      </ul>
      <p>Do not infer accuracy from the instrument type alone. Resolution, stated accuracy, calibration interval, contact force, temperature range, and uncertainty vary by model. Check the manufacturer&apos;s specification and the procedure required for your work.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Basic Procedure</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Clean the reference surface and measuring faces.</li>
        <li>Inspect and zero the gauge according to its instructions.</li>
        <li>Place the base flat on the reference surface without rocking.</li>
        <li>Lower the rod or spindle until it contacts the measured surface using the specified force.</li>
        <li>Read and record the value with its unit, instrument identity, and required uncertainty information.</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When a Screen Ruler Is Not Appropriate</h2>
      <p>An on-screen ruler cannot reach into a recess, control contact force, or provide traceable calibration. Use a suitable calibrated depth instrument for manufacturing, automotive safety, medical, or other consequential work.</p>
    </BlogLayout>
  );
}
