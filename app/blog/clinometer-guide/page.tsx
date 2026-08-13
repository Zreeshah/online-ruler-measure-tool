import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Clinometer: Measure Slope and Height',
  description: 'Learn how clinometers measure slope and inclination, how to take a basic reading, and which errors affect the result.',
  keywords: ['clinometer', 'inclinometer', 'angle measurement', 'slope measurement', 'surveying tool'],
  path: '/blog/clinometer-guide',
  type: 'article',
});

export default function ClinometerGuide() {
  return (
    <BlogLayout
      currentUrl="/blog/clinometer-guide"
      publishDate="May 8, 2025"
      imageUrl="/lovable-uploads/65090091-5d64-4667-af28-509718c18951.jpg"
      imageAlt="Mountain surveying and slope measurement using a clinometer"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Clinometer: How to Measure Slope and Height</h1>
      <p className="lead">A clinometer, or inclinometer, measures an angle of incline or decline relative to gravity. Surveyors, foresters, conservation planners, builders, and geologists use it to estimate slope, elevation, or object height.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Degrees and percent slope are different</h2>
      <p>Many instruments show two scales. Degrees describe the angle from horizontal. Percent slope describes vertical change per 100 units of horizontal distance:</p>
      <p><strong>percent slope = 100 × rise ÷ horizontal run.</strong></p>
      <p>A 45° angle equals a 100% slope, not 45%. Check the scale label before recording a value.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to measure ground slope</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Choose two points that represent the section of slope you need to measure.</li>
        <li>Mark the same height at both points, using equal stakes or a partner&apos;s eye-level mark.</li>
        <li>Stand at one point and sight the equal-height mark at the other.</li>
        <li>Allow the indicator to settle, then read either the degree or percent scale.</li>
        <li>Repeat from the opposite direction. Large disagreement suggests poor alignment, an uneven surface, or instrument error.</li>
      </ol>
      <p>Do not confuse distance along the ground with horizontal run when calculating percent slope.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Estimating object height</h2>
      <p>If you know the horizontal distance d to a vertical object, measure the angle θ to its top. When the base is level with your position, the height above eye level is approximately:</p>
      <p><strong>height above eye level = d × tan(θ).</strong></p>
      <p>Add your eye height to estimate total height. If the base is above or below you, measure a second angle to the base and account for both vertical components. Use horizontal distance, not sloped distance.</p>
      <p>Example: at a horizontal distance of 20 m, a 30° sight angle gives 20 × tan(30°) ≈ 11.55 m above eye level. With an eye height of 1.6 m, the estimate is about 13.15 m.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Instrument types</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Mechanical:</strong> a pendulum, weighted disk, or bubble indicates inclination.</li>
        <li><strong>Optical:</strong> a sighting window combines the target view with a scale.</li>
        <li><strong>Digital:</strong> electronic sensors show angle or percent slope directly.</li>
        <li><strong>Phone sensors:</strong> useful for rough checks, but the case, sensor calibration, and placement can introduce error.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common error sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Reading the degree scale when the formula expects percent slope, or vice versa.</li>
        <li>Using line-of-sight distance instead of horizontal distance.</li>
        <li>Tilting the instrument sideways or sighting unequal reference heights.</li>
        <li>Measuring a poorly defined tree top or base.</li>
        <li>Relying on a phone case edge that is not parallel to the sensor axis.</li>
      </ul>
      <p>For engineering layout, property boundaries, safety decisions, or regulatory work, use an appropriate surveyed method and calibrated instrument.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nrcs.usda.gov/resources/education-and-teaching-materials/alaska-curricula-for-conservation-planners" rel="noopener noreferrer">USDA NRCS: Hand Level and Clinometer training resources</a></li>
        <li><a href="https://research.fs.usda.gov/treesearch/27167" rel="noopener noreferrer">US Forest Service: Evaluation of instruments for measuring tree height</a></li>
        <li><a href="https://research.fs.usda.gov/treesearch/46037" rel="noopener noreferrer">US Forest Service: Accurately measuring forest tree heights</a></li>
      </ul>
    </BlogLayout>
  );
}
