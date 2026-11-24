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

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How a Clinometer Actually Works</h2>
      <p>Every clinometer compares a sight line with the direction of gravity. A mechanical clinometer hangs a weighted pointer or bubble that stays vertical while the body tilts; the scale reads the angle between the body and that vertical reference. An optical clinometer puts a scale inside the sighting window so the target and the reading appear together. A digital clinometer replaces the pendulum with an accelerometer or gyroscope that senses the gravity vector electronically. The physics is the same in all three: the instrument measures the angle between where you look and where gravity points, then reports it as degrees from horizontal or as percent slope.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Forestry Use: Measuring a Tree Step by Step</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Measure a horizontal distance from the tree — 20 m is convenient — using a tape on level ground.</li>
        <li>Stand at that distance and sight the top of the tree with the clinometer, recording the angle above horizontal.</li>
        <li>Sight the base of the tree and record that angle (usually a small downward angle, or zero on flat ground).</li>
        <li>Height above eye level = distance × tan(top angle); height below eye level = distance × tan(base angle).</li>
        <li>Add both parts plus your eye height only if the base angle was measured from eye level — on flat ground the base is below eye level by your eye height, so add eye height once.</li>
      </ol>
      <p>Worked example: at 20 m, a 28° top angle gives 20 × tan(28°) ≈ 10.63 m above eye level; with an eye height of 1.6 m, the tree is about 12.2 m tall. Repeat from a second position: if the two estimates differ by more than about 5%, re-check the distance and the sighting points.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Degrees vs. Percent Slope: A Quick Table</h2>
      <div className="overflow-x-auto">
        <table>
          <thead><tr><th>Angle</th><th>Percent slope</th><th>What it feels like</th></tr></thead>
          <tbody>
            <tr><td>5°</td><td>8.7%</td><td>Gentle walk</td></tr>
            <tr><td>10°</td><td>17.6%</td><td>Noticeable hill</td></tr>
            <tr><td>20°</td><td>36.4%</td><td>Steep road</td></tr>
            <tr><td>30°</td><td>57.7%</td><td>Very steep</td></tr>
            <tr><td>45°</td><td>100%</td><td>Extreme slope</td></tr>
          </tbody>
        </table>
      </div>
      <p>Percent slope is rise over run, so it grows faster than the angle: a 45° slope is 100%, and anything steeper exceeds 100%. Road signs and trail grades usually use percent, while surveying instruments usually show degrees — confirm the scale before you record a number.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phone Clinometer Apps: A Reality Check</h2>
      <p>Phone apps read the same gravity sensor a digital clinometer uses, but three things limit them: the phone's case edge is rarely parallel to the sensor axis, the sensor is rarely calibrated, and holding the phone by hand adds wobble. Test an app against a known level surface (a spirit level on a table) before trusting it: place the phone on the level surface and check that the app reads 0°. If it reads 1–2° off, note the offset and subtract it, or use a dedicated instrument. For height or slope decisions that affect safety or property, use a surveyed method and a calibrated instrument, as noted in the main guide.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What is the difference between a clinometer and an inclinometer?</h3>
      <p>Almost nothing in common use — the two words describe the same kind of instrument. "Clinometer" is more common in surveying and forestry; "inclinometer" is more common in engineering and aviation.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Can I measure slope with a phone and a tape measure?</h3>
      <p>Yes, roughly: measure the vertical rise and horizontal run with a tape and level, then compute percent slope as 100 × rise ÷ run. The clinometer only replaces the angle step.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How accurate is a clinometer height estimate?</h3>
      <p>Typically within a few percent when the distance is measured carefully and the top of the object is well defined. The biggest errors come from misjudging the top, using sloped distance instead of horizontal distance, and a poorly levelled instrument.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>A clinometer measures the angle between your sight line and gravity's direction.</li>
        <li>Percent slope is 100 × rise ÷ run — 45° equals 100%, not 45%.</li>
        <li>Height = horizontal distance × tan(angle), plus eye height; always use horizontal distance.</li>
        <li>Check phone apps against a known level before trusting them.</li>
        <li>For depth rather than height, see our <a href="/blog/depth-gauge-guide">Depth Gauge Guide</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Sources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="https://www.nrcs.usda.gov/resources/education-and-teaching-materials/alaska-curricula-for-conservation-planners" rel="noopener noreferrer">USDA NRCS: Hand Level and Clinometer training resources</a></li>
        <li><a href="https://research.fs.usda.gov/treesearch/27167" rel="noopener noreferrer">US Forest Service: Evaluation of instruments for measuring tree height</a></li>
        <li><a href="https://research.fs.usda.gov/treesearch/46037" rel="noopener noreferrer">US Forest Service: Accurately measuring forest tree heights</a></li>
      </ul>
    </BlogLayout>
  );
}
