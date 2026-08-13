import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="bg-white rounded-md shadow">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            How do I calibrate the online ruler?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Match the on-screen reference to a standard 85.60 mm ID-1 card, or enter the manufacturer-listed display diagonal. Keep browser zoom at 100%.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            Can I use this real size ruler on my phone?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Yes. The ruler works on modern phones, tablets, and computers, but it must be calibrated separately on each display.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            How accurate is the online ruler?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Accuracy varies with calibration, browser zoom, operating-system scaling, display geometry, and object placement. Verify the scale against a trusted physical reference and use certified tools for critical work.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
