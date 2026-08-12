"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

type CalibrationMethod = 'card' | 'screen-diagonal' | null;

interface CalibrationContextType {
  pixelsPerCm: number;
  setPixelsPerCm: (pixelsPerCm: number) => void;
  calibrateByScreen: (screenSizeInches: number) => void;
  adjustCalibration: (direction: 'up' | 'down') => void;
  confirmCardCalibration: () => void;
  resetCalibration: () => void;
  isCalibrated: boolean;
  calibrationMethod: CalibrationMethod;
  unit: 'cm' | 'mm' | 'inch';
  setUnit: (unit: 'cm' | 'mm' | 'inch') => void;
  orientation: 'horizontal' | 'vertical';
  setOrientation: (orientation: 'horizontal' | 'vertical') => void;
  getValueInSelectedUnit: (pixelValue: number) => number;
  getPixelsFromValue: (value: number) => number;
}

const CalibrationContext = createContext<CalibrationContextType | undefined>(undefined);

const CSS_PIXELS_PER_INCH = 96;
const CM_PER_INCH = 2.54;
const DEFAULT_PIXELS_PER_CM = CSS_PIXELS_PER_INCH / CM_PER_INCH;

export const CalibrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pixelsPerCm, setPixelsPerCm] = useState(DEFAULT_PIXELS_PER_CM);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [calibrationMethod, setCalibrationMethod] = useState<CalibrationMethod>(null);
  const [unit, setUnit] = useState<'cm' | 'mm' | 'inch'>('cm');
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  const updatePixelsPerCm = (value: number) => {
    if (Number.isFinite(value) && value > 0) {
      setPixelsPerCm(value);
      setIsCalibrated(false);
      setCalibrationMethod(null);
    }
  };

  const calibrateByScreen = (screenSizeInches: number) => {
    if (typeof window === 'undefined' || !Number.isFinite(screenSizeInches) || screenSizeInches <= 0) return;

    const screenDiagonalCssPixels = Math.hypot(window.screen.width, window.screen.height);
    const pixelsPerInch = screenDiagonalCssPixels / screenSizeInches;
    setPixelsPerCm(pixelsPerInch / CM_PER_INCH);
    setIsCalibrated(true);
    setCalibrationMethod('screen-diagonal');
  };

  const adjustCalibration = (direction: 'up' | 'down') => {
    const adjustmentFactor = direction === 'up' ? 1.01 : 0.99;
    setPixelsPerCm((current) => current * adjustmentFactor);
    setIsCalibrated(false);
    setCalibrationMethod(null);
  };

  const confirmCardCalibration = () => {
    setIsCalibrated(true);
    setCalibrationMethod('card');
  };

  const resetCalibration = () => {
    setPixelsPerCm(DEFAULT_PIXELS_PER_CM);
    setIsCalibrated(false);
    setCalibrationMethod(null);
  };

  const getValueInSelectedUnit = (pixelValue: number): number => {
    switch (unit) {
      case 'cm':
        return pixelValue / pixelsPerCm;
      case 'mm':
        return (pixelValue / pixelsPerCm) * 10;
      case 'inch':
        return pixelValue / (pixelsPerCm * CM_PER_INCH);
    }
  };

  const getPixelsFromValue = (value: number): number => {
    switch (unit) {
      case 'cm':
        return value * pixelsPerCm;
      case 'mm':
        return (value / 10) * pixelsPerCm;
      case 'inch':
        return value * pixelsPerCm * CM_PER_INCH;
    }
  };

  return (
    <CalibrationContext.Provider
      value={{
        pixelsPerCm,
        setPixelsPerCm: updatePixelsPerCm,
        calibrateByScreen,
        adjustCalibration,
        confirmCardCalibration,
        resetCalibration,
        isCalibrated,
        calibrationMethod,
        unit,
        setUnit,
        orientation,
        setOrientation,
        getValueInSelectedUnit,
        getPixelsFromValue,
      }}
    >
      {children}
    </CalibrationContext.Provider>
  );
};

export const useCalibration = (): CalibrationContextType => {
  const context = useContext(CalibrationContext);
  if (context === undefined) {
    throw new Error('useCalibration must be used within a CalibrationProvider');
  }
  return context;
};
