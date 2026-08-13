import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t mt-10 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © 2026 Online Ruler. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link href="/about" className="inline-flex min-h-12 items-center text-sm text-ruler-primary hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center text-sm text-ruler-primary hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="inline-flex min-h-12 items-center text-sm text-ruler-primary hover:underline">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="inline-flex min-h-12 items-center text-sm text-ruler-primary hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
