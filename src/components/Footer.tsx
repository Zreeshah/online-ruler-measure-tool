"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
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
            <Link href="/about" className="text-sm text-ruler-primary hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-ruler-primary hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-ruler-primary hover:underline">
              {t('privacy')}
            </Link>
            <Link href="/disclaimer" className="text-sm text-ruler-primary hover:underline">
              {t('disclaimer')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
