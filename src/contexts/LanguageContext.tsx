"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  en: {
    title: "Online Ruler - Calibrate and Measure on Screen",
    subtitle: "Digital ruler for quick screen measurements after physical-reference calibration",
    calibrationTitle: "Calibration",
    screenSize: "Screen Size",
    inches: "inches",
    creditCard: "Credit Card",
    manual: "Manual",
    unitTitle: "Units",
    cm: "Centimeters",
    mm: "Millimeters",
    inch: "Inches",
    orientation: "Orientation",
    horizontal: "Horizontal",
    vertical: "Vertical",
    printRuler: "Print Ruler",
    howToUse: "How to Use the Online Ruler",
    whyPerfect: "Why Use This Screen Ruler",
    faq: "Frequently Asked Questions",
    adjustUp: "Adjust up",
    adjustDown: "Adjust down",
    dragInfo: "Drag to move the ruler",
    calibrationInstructions: "Align a known-size object with the ruler",
    creditCardSize: "A standard credit card measures 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibrate your online ruler using one of the available methods",
    howToUseStep2: "2. Select your preferred measurement units (cm, mm, or inches)",
    howToUseStep3: "3. Change the digital ruler orientation as needed",
    howToUseStep4: "4. Move the real size ruler by dragging it across the screen",
    whyPerfectItem1: "Calibration status: The tool clearly marks estimates and confirmed calibrations",
    whyPerfectItem2: "Versatility: Designed for modern phones, tablets, laptops, and desktops",
    whyPerfectItem3: "Ease of use: Intuitive interface and simple controls for the virtual ruler",
    faqQuestion1: "How do I calibrate the online ruler?",
    faqAnswer1: "You can calibrate the digital ruler by entering your screen size, using a credit card as a reference, or manually adjusting until it matches a known-size object.",
    faqQuestion2: "Can I use this real size ruler on my phone?",
    faqAnswer2: "Yes. Calibrate it separately on each phone, tablet, or computer display before measuring.",
    faqQuestion3: "How accurate is the online ruler?",
    faqAnswer3: "Accuracy varies with calibration, browser zoom, operating-system scaling, display geometry, and object placement. Verify the scale against a trusted physical reference and use certified tools for critical work.",
    learnMore: "Learn More",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    copyright: "© 2026 Online Ruler. All rights reserved.",
    autoCalibrate: "Auto Calibrate",
    move: "Move",
    deviceInfo: "Device information",
    detectedDevice: "Detected device",
    screenSizeDetected: "Detected screen size",
    diagonal: "diagonal",
    screenSizeNote: "If screen size detection is not accurate, you can adjust it manually in the calibration options.",
    show: "Show",
    hide: "Hide",
    commonRulerSizes: "Most Common Ruler Sizes",
    smallRulers: "Small Rulers",
    largeRulers: "Large Rulers",
    rulerOf: "Ruler of",
    rulerDescription: "Use the on-screen scale for quick measurements in centimeters, millimeters, and inches after calibrating it for the current display.",
    moreInfo: "More information about virtual rulers",
    measurementTools: "Online measurement tools",
    contentIntro: "The initial scale is an estimate because browsers cannot reliably detect physical display size. Match a known reference before relying on it.",
    useCase1: "Graphic and web design",
    useCase2: "Craft measurements",
    useCase3: "Educational use",
    useCase4: "Quick measurements without physical tools",
    useCase1Description: "Check approximate dimensions of visual elements after calibrating the display.",
    useCase2Description: "Make quick, non-critical craft checks when a physical ruler is unavailable.",
    useCase3Description: "Demonstrate metric and inch markings interactively in class.",
    useCase4Description: "Take a quick screen-based measurement, then verify important results with a physical tool."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
