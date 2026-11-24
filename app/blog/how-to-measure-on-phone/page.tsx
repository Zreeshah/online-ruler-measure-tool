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
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phone Screen Sizes and the Maximum You Can Measure</h2>
      <p>A phone screen is short. Most phones show roughly 12–15 cm (about 5–6 in) of usable ruler length in portrait orientation and a little more in landscape. That covers small objects — a key, a coin, a screw, a ring — but not a sheet of paper or a book. Measure longer objects in sections, marking each section, or switch to a physical ruler or tape measure. The screen ruler is a quick-check tool, not a replacement for a full-length instrument.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">iPhone and Android: What Actually Differs</h2>
      <p>The calibration principle is the same on both platforms, but the settings that break it differ. On iPhones, check Display Zoom and text-size accessibility settings, which change the effective scale. On Android, check the display-size and font-size settings, which vary by manufacturer and can rescale the page. In both cases, browser zoom must be 100% and the phone should be on a flat surface. After any system update, recalibrate: updates can reset display scaling without warning.</p>
      <p>Also note that the calibration belongs to one display. A phone and a tablet need separate calibrations even when signed into the same account, and rotating the phone can change the usable ruler length — re-check the calibration after rotating.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When a Phone Ruler Fails</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Curved screens:</strong> the scale near a curved edge is unreliable; keep the object in the flat centre of the display.</li>
        <li><strong>Thick screen protectors or cases:</strong> they lift the object off the glass and shift the apparent edge.</li>
        <li><strong>Very small objects:</strong> below about 5 mm, the screen's pixel size and your viewing angle dominate the error.</li>
        <li><strong>Reflective screens outdoors:</strong> glare makes the edge hard to place; measure indoors or shade the screen.</li>
        <li><strong>Objects that must not touch the screen:</strong> wet, sharp, or heavy objects can damage the display — use a physical ruler instead.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Ruler vs. Measurement Apps</h2>
      <p>A browser ruler needs no install and works the same way on any modern phone, but it depends on manual calibration. Dedicated measurement apps may use the camera and augmented reality to estimate sizes, which can measure larger objects but introduces camera-angle and distance errors of their own. Neither replaces a physical ruler for consequential work. For a printed alternative you can verify, use our <a href="/print-ruler">printable ruler with its 100 mm scale check</a>.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Do I need to calibrate every time I open the ruler?</h3>
      <p>Yes, in practice. Calibration is stored in page memory and resets when the page reloads, and any change in zoom, display scaling, or device invalidates it. The card-match step takes seconds.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Can I use any card for calibration?</h3>
      <p>Use a standard ID-1 card (85.60 × 53.98 mm) — a bank card or driving licence of that format. Loyalty cards and hotel key cards are often the same size, but check before trusting them; an odd-sized card makes every measurement wrong by the same ratio.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why is my measurement off by a few millimetres?</h3>
      <p>The usual causes are an approximate card match, browser zoom above or below 100%, display scaling, or the object not lying flat against the screen. Re-check with a second known length, as described in the calibration-check section above.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Is the phone ruler accurate enough for crafts?</h3>
      <p>For rough craft checks, usually yes after careful calibration. For cutting fabric, fitting parts, or anything where a few millimetres matter, verify with a physical ruler.</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>A phone screen is a short ruler: about 12–15 cm in portrait, a little more in landscape.</li>
        <li>Calibrate with a standard 85.60 mm card or the manufacturer-listed diagonal, at 100% zoom, on a flat surface.</li>
        <li>Verify calibration with a second known length and recalibrate after zoom, rotation, or system changes.</li>
        <li>Keep objects in the flat centre of the screen and away from curved edges.</li>
        <li>For reading the scale itself, see <a href="/blog/how-to-read-a-ruler">How to Read a Ruler</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reference</h2>
      <p>Metric length relationships follow the SI. See <a href="https://www.nist.gov/pml/owm/si-units-length" rel="noopener noreferrer">NIST&apos;s SI Units—Length</a> for definitions and conversion guidance.</p>
    </BlogLayout>
  );
}
