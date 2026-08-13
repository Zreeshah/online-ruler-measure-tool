import React from 'react';
import Link from 'next/link';

const HomeContent: React.FC = () => {
  return (
    <div className="prose prose-sm max-w-none text-gray-700 md:prose-base lg:prose-lg">
      <h2>What this online ruler can—and cannot—do</h2>
      <p>
        Online-Ruler.Onl displays a screen scale in centimetres, millimetres, or inches. It is useful for quick, non-critical checks when a physical ruler is unavailable. Because browsers do not reliably report physical display dimensions, the initial scale is an estimate rather than a real-size measurement.
      </p>

      <h2>Why calibration matters</h2>
      <ol>
        <li>Set browser zoom to 100% and keep operating-system display scaling unchanged.</li>
        <li>Match the 85.60 mm reference line to a standard ID-1 bank card, or enter the display diagonal supplied by its manufacturer.</li>
        <li>Confirm the calibration, choose a unit, and align the object with the zero mark.</li>
        <li>Recalibrate when you change displays, browser zoom, or display scaling.</li>
      </ol>

      <h2>Expected limitations</h2>
      <p>
        Screen geometry, browser zoom, device-pixel handling, protective cases, and viewing angle can introduce error. Check the scale against a trusted physical reference whenever the result matters. Do not use this utility for medical, safety, construction, manufacturing-tolerance, or other regulated measurements.
      </p>

      <h2>Learn the measurement basics</h2>
      <p>
        Read the <Link href="/blog/how-to-read-a-ruler">ruler-marking guide</Link>, follow the <Link href="/blog/how-to-use-a-ruler">step-by-step measuring guide</Link>, or use the <Link href="/print-ruler">printable ruler with its 100 mm scale check</Link>.
      </p>
    </div>
  );
};

export default HomeContent;
