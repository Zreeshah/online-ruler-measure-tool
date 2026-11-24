"use client";

import React from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';

const MetricRuler = () => (
  <div className="print-ruler metric-ruler" aria-label="18 centimetre printable metric ruler">
    {Array.from({ length: 181 }, (_, millimetre) => {
      const isCentimetre = millimetre % 10 === 0;
      const isHalfCentimetre = millimetre % 5 === 0;
      return (
        <span
          key={millimetre}
          className="print-tick"
          style={{
            left: `${millimetre}mm`,
            height: isCentimetre ? '12mm' : isHalfCentimetre ? '8mm' : '5mm',
          }}
        >
          {isCentimetre && <span className="print-number">{millimetre / 10}</span>}
        </span>
      );
    })}
  </div>
);

const InchRuler = () => (
  <div className="print-ruler inch-ruler" aria-label="7 inch printable ruler">
    {Array.from({ length: 113 }, (_, sixteenth) => {
      const isInch = sixteenth % 16 === 0;
      const isHalf = sixteenth % 8 === 0;
      const isQuarter = sixteenth % 4 === 0;
      const isEighth = sixteenth % 2 === 0;
      return (
        <span
          key={sixteenth}
          className="print-tick"
          style={{
            left: `${sixteenth / 16}in`,
            height: isInch ? '12mm' : isHalf ? '10mm' : isQuarter ? '8mm' : isEighth ? '6mm' : '4mm',
          }}
        >
          {isInch && <span className="print-number">{sixteenth / 16}</span>}
        </span>
      );
    })}
  </div>
);

const PrintableSheet = () => (
  <div className="print-sheet" aria-label="Printable ruler calibration sheet">
    <h2>Printable measurement rulers</h2>
    <p className="print-note">Print at 100% or Actual Size. Do not use Fit to Page.</p>

    <h3>Metric ruler — millimetres and centimetres</h3>
    <MetricRuler />

    <h3>Inch ruler — sixteenths of an inch</h3>
    <InchRuler />

    <div className="test-block">
      <h3>Required scale check</h3>
      <p>Measure this line with a trusted physical ruler. It must measure 100 mm before you use the printed scales.</p>
      <div className="test-line"><span>100 mm test line</span></div>
    </div>
  </div>
);

const PrintRulerClient: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <>
        <main className="container mx-auto flex-1 px-4 py-8 print:p-0">
          <div className="mx-auto max-w-5xl">
            <div className="print:hidden">
              <PageBreadcrumb current="Printable Ruler" className="mb-4" />
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Printable Ruler with a 100 mm Scale Check</h1>
              <p className="mb-5 max-w-3xl text-lg text-gray-700">
                Print an 18 cm metric ruler and a 7 inch ruler. Printer drivers can resize pages, so the result is usable only after the 100 mm test line is checked with a trusted physical ruler.
              </p>
              <div className="mb-7 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-950">
                <h2 className="font-semibold">Before printing</h2>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6">
                  <li>Select A4 paper and portrait orientation.</li>
                  <li>Choose <strong>100%</strong> or <strong>Actual Size</strong>.</li>
                  <li>Turn off Fit, Shrink, Scale to page, and borderless enlargement.</li>
                  <li>After printing, verify that the test line is 100 mm. If it is not, do not use the printed ruler.</li>
                </ol>
              </div>
              <Button onClick={handlePrint} className="mb-8 min-h-12 bg-ruler-primary text-white hover:bg-ruler-secondary">
                <Printer className="mr-2 h-4 w-4" /> Print calibrated sheet
              </Button>
            </div>

            <div className="mt-8 rounded-lg bg-white p-6 shadow-sm print:hidden">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Printed Rulers Fail (and How to Prevent It)</h2>
              <p className="text-gray-700 mb-4">
                A printed ruler is only as accurate as the print pipeline. Printer drivers routinely shrink pages to fit margins ("Fit to Page", "Shrink to Fit", "Scale to Fit"), and each of those settings changes the printed size by a few percent — enough to make every measurement wrong. Browser print dialogs add their own scaling, and borderless printing enlarges the page slightly. The only defence is the 100 mm test line on this sheet: measure it with a trusted physical ruler after printing, and do not use the printed scales if it is not 100 mm.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Printer Settings That Matter</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Scale:</strong> choose 100% or Actual Size. Never choose Fit, Shrink, or Scale to Page.</li>
                <li><strong>Paper:</strong> A4, portrait orientation. US Letter is a different size and will shift the layout.</li>
                <li><strong>Margins:</strong> use the printer's default or minimum margins; "borderless" printing enlarges the content.</li>
                <li><strong>Quality:</strong> normal or high quality gives sharper tick marks; draft mode can blur the millimetre lines.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How to Check the 100 mm Test Line</h3>
              <ol className="list-decimal pl-6 mb-4 text-gray-700">
                <li>Print the sheet at 100% on A4 paper.</li>
                <li>Place a trusted physical ruler against the test line, starting at its zero mark.</li>
                <li>The line must measure exactly 100 mm end to end. If it measures 97 mm, the print is scaled to 97% and every reading on the sheet will be 3% short.</li>
                <li>If the line is wrong, change the scale setting and print again. Do not "correct" by adding a fudge factor.</li>
                <li>Re-check after changing printers, drivers, or browsers — the same file can print at different sizes on different setups.</li>
              </ol>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">When to Use the Screen Ruler Instead</h3>
              <p className="text-gray-700 mb-4">
                A printed ruler is useful when you need a physical scale to hold against paper or fabric. A screen ruler is better for quick checks of small objects, because it needs no printer and no paper — but it must be calibrated first, with a standard card or known screen diagonal, as explained in our <a href="/blog/how-to-measure-on-phone" className="text-ruler-primary hover:underline">phone-screen guide</a>. For reading the markings on either ruler, see <a href="/blog/how-to-read-a-ruler" className="text-ruler-primary hover:underline">How to Read a Ruler</a>.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Paper and Printer Compatibility</h3>
              <p className="text-gray-700 mb-4">
                The sheet is laid out for A4 paper in portrait orientation. US Letter paper is a different size and may crop or rescale the rulers, so use A4 where possible. Laser and inkjet printers both work, provided the scale is set to 100% or Actual Size; the test line is the final check either way. If your printer only offers borderless printing, the page will be enlarged slightly and the test line will fail — use a printer with normal margins, or print from a different device. After a successful print, keep the sheet flat and dry: paper expands and contracts with humidity, and a folded or damp sheet will not measure true.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Frequently Asked Questions</h3>
              <p className="text-gray-700 mb-2"><strong>Why is my printed ruler 2–3 mm short?</strong> The printer scaled the page. Reprint at 100% / Actual Size with Fit disabled, then re-check the test line.</p>
              <p className="text-gray-700 mb-2"><strong>Can I print on US Letter paper?</strong> The sheet is laid out for A4. Letter paper may crop or rescale the rulers; use A4 where possible.</p>
              <p className="text-gray-700 mb-2"><strong>Is a printed ruler accurate enough for crafts?</strong> Yes, after the 100 mm check passes. For cutting, fitting, or anything safety-related, verify with a physical ruler.</p>
              <p className="text-gray-700 mb-2"><strong>Does the test line need to be exactly 100 mm?</strong> Yes. A 1 mm error on the test line is a 1% error on every measurement from the sheet.</p>
              <p className="text-gray-700"><strong>Can I laminate the printed ruler?</strong> Lamination protects the sheet from wear and moisture, but the heat can shrink or stretch the paper slightly. Always re-check the 100 mm test line after laminating, and do not use the sheet if the line no longer measures exactly 100 mm.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border bg-white p-4 shadow-sm print:overflow-visible print:rounded-none print:border-0 print:p-0 print:shadow-none">
              <PrintableSheet />
            </div>
            <p className="mt-5 text-sm leading-6 text-gray-600 print:hidden">
              These rulers use CSS physical units (mm and in), not a pixel-sized image. Final printed size still depends on browser, printer-driver, and printer settings. Review <Link href="/blog/how-to-read-a-ruler" className="text-ruler-primary hover:underline">how to read ruler markings</Link>, or return to the <Link href="/" className="text-ruler-primary hover:underline">calibrated screen ruler</Link>. Do not use this sheet for safety-critical, medical, or regulated measurements.
            </p>
          </div>
        </main>
      <style>{`
        .print-sheet { width: 190mm; min-width: 190mm; margin: 0 auto; color: #111827; font-family: Arial, sans-serif; }
        .print-sheet h2 { margin: 0 0 3mm; font-size: 18pt; }
        .print-sheet h3 { margin: 7mm 0 2mm; font-size: 11pt; }
        .print-note { margin: 0 0 6mm; font-size: 10pt; font-weight: 700; }
        .print-ruler { position: relative; height: 24mm; border-bottom: 0.4mm solid #111827; }
        .metric-ruler { width: 180mm; }
        .inch-ruler { width: 7in; }
        .print-tick { position: absolute; bottom: 0; width: 0; border-left: 0.25mm solid #111827; }
        .print-number { position: absolute; top: -5mm; left: -2mm; width: 4mm; text-align: center; font-size: 8pt; }
        .test-block { margin-top: 12mm; border: 0.3mm solid #9ca3af; padding: 5mm; }
        .test-block h3 { margin-top: 0; }
        .test-block p { margin: 0 0 5mm; font-size: 9pt; }
        .test-line { position: relative; width: 100mm; height: 9mm; border-right: 0.4mm solid #111827; border-bottom: 0.4mm solid #111827; border-left: 0.4mm solid #111827; }
        .test-line span { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 8pt; }
        @media print {
          @page { size: A4 portrait; margin: 10mm; }
          html, body { width: 210mm; margin: 0; padding: 0; }
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print-sheet { break-inside: avoid; }
        }
      `}</style>
    </>
  );
};

export default PrintRulerClient;
