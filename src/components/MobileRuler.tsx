"use client";

import React from 'react';
import Link from 'next/link';
import { useCalibration } from '@/contexts/CalibrationContext';
import { Button } from '@/components/ui/button';

const RULER_HEIGHT = 900;

const MobileRuler: React.FC = () => {
  const { unit, setUnit, getValueInSelectedUnit, getPixelsFromValue, isCalibrated } = useCalibration();

  const minorInterval = unit === 'inch' ? 0.125 : unit === 'mm' ? 1 : 0.1;
  const majorInterval = unit === 'inch' ? 1 : unit === 'mm' ? 10 : 1;
  const maxValue = getValueInSelectedUnit(RULER_HEIGHT);
  const ticks = [];

  for (let value = 0; value <= maxValue; value += minorInterval) {
    const roundedValue = Math.round(value * 1000) / 1000;
    if (roundedValue === 0) continue;
    const isMajor = Math.abs(roundedValue / majorInterval - Math.round(roundedValue / majorInterval)) < 0.001;
    ticks.push({ value: roundedValue, position: getPixelsFromValue(roundedValue), isMajor });
  }

  return (
    <section className="container mb-6" aria-label="Mobile on-screen ruler">
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b p-3">
          <div>
            <p className="font-semibold text-gray-900">Vertical screen ruler</p>
            <p className={`text-xs ${isCalibrated ? 'text-green-700' : 'font-semibold text-amber-800'}`}>
              {isCalibrated ? 'Using your calibration' : 'Estimated scale — calibrate above before measuring'}
            </p>
          </div>
          <div className="flex gap-2" aria-label="Measurement unit">
            {(['cm', 'mm', 'inch'] as const).map((item) => (
              <Button
                key={item}
                type="button"
                variant={unit === item ? 'default' : 'outline'}
                className={`min-h-12 min-w-12 ${unit === item ? 'bg-[#7E69AB] hover:bg-[#6b5796]' : ''}`}
                onClick={() => setUnit(item)}
              >
                {item === 'inch' ? 'IN' : item.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-h-[65vh] overflow-y-auto bg-[#F5F7FA]" aria-label={`Scrollable ruler in ${unit}`}>
          <div className="relative w-full" style={{ height: `${RULER_HEIGHT}px` }}>
            <div className="absolute bottom-0 left-20 top-0 border-l-2 border-[#9b87f5]" />
            {ticks.map((tick) => (
              <div key={tick.value} className="absolute left-0" style={{ top: `${tick.position}px` }}>
                {tick.isMajor && (
                  <span className="absolute left-3 -translate-y-1/2 text-base font-bold text-[#6b5796]">
                    {tick.value}
                  </span>
                )}
                <span
                  className="absolute left-20 -translate-y-1/2 bg-[#7E69AB]"
                  style={{ width: tick.isMajor ? '44px' : '24px', height: tick.isMajor ? '2px' : '1px' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t p-3 text-sm">
          <Link href="/blog/how-to-read-a-ruler" className="text-[#6b5796] hover:underline">How to read the scale</Link>
          <Link href="/privacy" className="text-[#6b5796] hover:underline">Privacy</Link>
          <Link href="/disclaimer" className="text-[#6b5796] hover:underline">Limitations</Link>
        </div>
      </div>
    </section>
  );
};

export default MobileRuler;
