"use client";

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CalibrationProvider } from '@/contexts/CalibrationContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CalibrationProvider>
        {children}
      </CalibrationProvider>
    </LanguageProvider>
  );
}
