"use client";

import React, { useState } from 'react';
import { CheckCircle2, CircleAlert, Minus, Plus, RotateCcw } from 'lucide-react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CREDIT_CARD_WIDTH_CM = 8.56;

const CalibrationPanel: React.FC = () => {
  const {
    pixelsPerCm,
    isCalibrated,
    calibrationMethod,
    calibrateByScreen,
    adjustCalibration,
    confirmCardCalibration,
    resetCalibration,
  } = useCalibration();
  const [screenDiagonal, setScreenDiagonal] = useState('');
  const [screenError, setScreenError] = useState('');

  const handleScreenCalibration = (event: React.FormEvent) => {
    event.preventDefault();
    const diagonal = Number(screenDiagonal);
    if (!Number.isFinite(diagonal) || diagonal < 3 || diagonal > 100) {
      setScreenError('Enter the manufacturer-listed diagonal in inches (3–100).');
      return;
    }
    setScreenError('');
    calibrateByScreen(diagonal);
  };

  return (
    <section className="container mb-5" aria-labelledby="calibration-heading">
      <div className="rounded-xl border bg-white p-4 shadow-sm md:p-5">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="calibration-heading" className="text-lg font-bold text-gray-900">Calibrate before measuring</h2>
            <p className="text-sm text-gray-600">Browser zoom must be 100%. Recalibrate for each display or zoom change.</p>
          </div>
          <div
            className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
              isCalibrated ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-900'
            }`}
            role="status"
          >
            {isCalibrated ? <CheckCircle2 size={18} /> : <CircleAlert size={18} />}
            {isCalibrated
              ? `Calibrated by ${calibrationMethod === 'card' ? 'card reference' : 'screen diagonal'}`
              : 'Uncalibrated — scale is only an estimate'}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900">Method A: match a standard card</h3>
            <p className="mt-1 text-sm text-gray-600">Place a standard ID-1 bank card over the line. Adjust until both ends match the card&apos;s 85.60 mm width.</p>
            <div className="my-4 max-w-full overflow-x-auto pb-1">
              <div
                className="relative h-10 min-w-fit border-x-2 border-b-2 border-[#7E69AB]"
                style={{ width: `${pixelsPerCm * CREDIT_CARD_WIDTH_CM}px` }}
                aria-label="85.60 millimetre card-width reference line"
              >
                <span className="absolute inset-x-0 bottom-1 text-center text-xs font-semibold text-[#7E69AB]">85.60 mm</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" className="min-h-11" onClick={() => adjustCalibration('down')}>
                <Minus size={16} className="mr-2" /> Shorter
              </Button>
              <Button type="button" variant="outline" className="min-h-11" onClick={() => adjustCalibration('up')}>
                <Plus size={16} className="mr-2" /> Longer
              </Button>
              <Button type="button" className="min-h-11 bg-[#7E69AB] hover:bg-[#6b5796]" onClick={confirmCardCalibration}>
                Confirm card match
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="font-semibold text-gray-900">Method B: enter the display diagonal</h3>
            <p className="mt-1 text-sm text-gray-600">Use the physical diagonal listed by the display manufacturer, not an automatic browser estimate.</p>
            <form onSubmit={handleScreenCalibration} className="mt-4 flex flex-col gap-2 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="screen-diagonal" className="sr-only">Screen diagonal in inches</label>
                <Input
                  id="screen-diagonal"
                  type="number"
                  inputMode="decimal"
                  min="3"
                  max="100"
                  step="0.1"
                  value={screenDiagonal}
                  onChange={(event) => setScreenDiagonal(event.target.value)}
                  placeholder='For example, 6.1 or 15.6'
                  className="min-h-11 bg-white"
                />
              </div>
              <Button type="submit" className="min-h-11 bg-[#7E69AB] hover:bg-[#6b5796]">Use diagonal</Button>
            </form>
            {screenError && <p className="mt-2 text-sm text-red-700">{screenError}</p>}
            <Button type="button" variant="ghost" className="mt-3 min-h-11 px-2 text-gray-600" onClick={resetCalibration}>
              <RotateCcw size={16} className="mr-2" /> Reset to uncalibrated
            </Button>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-gray-600">
          Screen measurements remain approximate because browser zoom, operating-system scaling, display geometry, and protective cases can affect the result. Use a certified physical instrument for safety-critical, medical, construction, or engineering work.
        </p>
      </div>
    </section>
  );
};

export default CalibrationPanel;
