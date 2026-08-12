"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-ruler-primary hover:bg-gray-100">
          <Menu size={24} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-ruler-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/print-ruler"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Print Ruler
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Information</p>
            </div>
            <Link 
              href="/about" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('privacy')}
            </Link>
            <Link 
              href="/disclaimer" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('disclaimer')}
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</p>
            </div>
            <Link
              href="/blog"
              className="text-base font-semibold hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              All Measurement Guides
            </Link>
            <Link
              href="/blog/how-to-read-a-ruler" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              How to Read a Ruler
            </Link>
            <Link 
              href="/blog/metric-vs-imperial" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Metric vs Imperial
            </Link>
            <Link 
              href="/blog/how-to-measure-on-phone" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              How to Measure on Your Phone
            </Link>
            <Link 
              href="/blog/metric-system-explained" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              The Metric System Explained
            </Link>
            <Link 
              href="/blog/mks-system" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              MKS System
            </Link>
            <Link 
              href="/blog/natural-units-system" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Natural Units System
            </Link>
            <Link 
              href="/blog/imperial-measurement-system" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Imperial Measurement System
            </Link>
            <Link 
              href="/blog/clinometer-guide" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Clinometer: What It Is & How to Use It
            </Link>
            <Link 
              href="/blog/depth-gauge-guide" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Depth Gauge: What It Is & How to Use It
            </Link>
            <Link 
              href="/blog/dimensionless-numbers" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Dimensionless Numbers
            </Link>
            <Link 
              href="/blog/measurement-units-guide" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Measurement Units Guide
            </Link>
            <Link 
              href="/blog/how-to-use-a-ruler" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              How to Use a Ruler
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
