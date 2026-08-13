import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowToUseSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">How to Use the Online Ruler</h2>
      <Card className="bg-white h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Quick measuring checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc pl-5">
            <li>Calibrate the scale with a standard card or the display diagonal.</li>
            <li>Select centimetres, millimetres, or inches.</li>
            <li>Choose the ruler orientation needed for the object.</li>
            <li>Align the object with the zero mark without pressing hard on the display.</li>
            <li>Keep browser zoom at 100% and recalibrate after display-setting changes.</li>
            <li>Verify consequential measurements with a suitable physical tool.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default HowToUseSection;
