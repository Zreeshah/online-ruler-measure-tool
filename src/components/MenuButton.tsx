"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
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
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-12 w-12 text-ruler-primary hover:bg-gray-100">
          <Menu size={24} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-ruler-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col space-y-1 [&_a]:flex [&_a]:min-h-12 [&_a]:items-center">
            <Link
              href="/"
              className="py-3 text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/print-ruler"
              className="py-3 text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Print Ruler
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Information</p>
            </div>
            <Link 
              href="/about" 
              className="py-3 pl-2 text-base font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="py-3 pl-2 text-base font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="py-3 pl-2 text-base font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/disclaimer" 
              className="py-3 pl-2 text-base font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Disclaimer
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</p>
            </div>
            <Link
              href="/blog"
              className="py-3 pl-2 text-base font-semibold hover:text-ruler-primary"
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
