import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'How to Measure on Your Phone Screen',
  description: 'Learn how to calibrate a phone screen ruler, reduce common scaling errors, and understand when to verify with a physical tool.',
  keywords: ['phone ruler', 'measure on phone', 'ruler on phone', 'phone screen ruler', 'mobile measurement'],
  path: '/blog/how-to-measure-on-phone',
  type: 'article',
});

export default function HowToMeasureOnPhone() {
  return (
    <BlogLayout currentUrl="/blog/how-to-measure-on-phone" publishDate="April 18, 2025" imageUrl="/lovable-uploads/regla-dibujo.jpg" imageAlt="Drawing and measuring dimensions on a screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How to Measure on Your Phone Screen</h1>
      <p className="lead">A smartphone screen can provide quick, approximate length checks after calibration. It is not automatically a physical-size ruler, because browsers do not reliably know the display&apos;s real dimensions.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use Your Phone as a Ruler?</h2>
      <p>A phone ruler is convenient when a physical ruler is unavailable. Screen resolution alone does not establish physical scale, so you must match a known reference or enter the manufacturer-listed display diagonal.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Guide</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Open Online-Ruler.Onl on your phone&apos;s browser.</li>
        <li>Set browser zoom to 100% and open the calibration panel.</li>
        <li>Match the 85.60 mm line to a standard ID-1 bank card, or enter the manufacturer-listed display diagonal.</li>
        <li>Confirm that the page shows a calibrated state.</li>
        <li>Place the object next to the on-screen ruler and read the measurement.</li>
      </ol>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Calibration Tips for Phone Screens</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Use a standard credit card (85.6 mm wide) as a calibration reference.</li>
        <li>Remove any phone case that might add thickness or affect placement.</li>
        <li>Make sure your browser zoom is set to 100%.</li>
        <li>Place your phone on a flat surface for the most accurate results.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check the Calibration</h2>
      <p>After calibrating, compare a second known length with the on-screen scale. If a card was used for calibration, check another non-critical reference rather than assuming that one visual match eliminates all error. Repeat the check after rotating the device, changing browser zoom, or enabling a display-accessibility scale.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations to Be Aware Of</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Phone screens are smaller than standard rulers, limiting maximum measurement length.</li>
        <li>Screen protectors may add slight distortion.</li>
        <li>For critical measurements, always verify with a physical instrument.</li>
      </ul>
      <p>After calibration, a phone can help with quick, non-critical checks. Recalibrate after a zoom or display-setting change, and verify any consequential measurement with a suitable physical instrument.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reference</h2>
      <p>Metric length relationships follow the SI. See <a href="https://www.nist.gov/pml/owm/si-units-length" rel="noopener noreferrer">NIST&apos;s SI Units—Length</a> for definitions and conversion guidance.</p>
    </BlogLayout>
  );
}
