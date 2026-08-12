"use client";

import React from 'react';
import { Printer } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

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
      <Layout>
        <main className="container mx-auto px-4 py-8 print:p-0">
          <div className="print:hidden">
            <div className="mx-auto max-w-5xl">
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
              <Button onClick={handlePrint} className="mb-8 min-h-11 bg-ruler-primary text-white hover:bg-ruler-secondary">
                <Printer className="mr-2 h-4 w-4" /> Print calibrated sheet
              </Button>

              <div className="overflow-x-auto rounded-xl border bg-white p-4 shadow-sm">
                <PrintableSheet />
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                These rulers are generated with CSS physical units (mm and in), not a pixel-sized image. Final printed size still depends on browser, printer-driver, and printer settings. Do not use this sheet for safety-critical, medical, or regulated measurements.
              </p>
            </div>
          </div>

          <div className="hidden print:block">
            <PrintableSheet />
          </div>
        </main>
      </Layout>
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
