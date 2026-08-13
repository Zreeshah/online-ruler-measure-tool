import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const WhyPerfectSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">Why Use This Screen Ruler</h2>
      <Card className="bg-white h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Useful features and limits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>The tool clearly marks estimated and confirmed calibration states.</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>It is designed for modern phones, tablets, laptops, and desktops.</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>The controls use direct labels and a simple calibration workflow.</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>Digital ruler with multiple units (cm, mm, inches)</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>Clear calibrated and uncalibrated states, with measurement limitations shown</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default WhyPerfectSection;
