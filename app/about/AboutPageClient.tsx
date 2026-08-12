"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Zap } from 'lucide-react';

const AboutPageClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold mb-6 text-ruler-primary">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Online-Ruler.Onl, a free screen-based measurement utility for situations where a physical ruler is not available.
            </p>
            <p className="text-gray-700 mb-6">
              A browser cannot determine a display&apos;s physical size reliably on its own. The tool therefore starts uncalibrated and asks you to match a standard card or enter a manufacturer-listed screen diagonal before measuring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-ruler-primary mr-3" size={32} />
                <h2 className="text-xl font-semibold text-ruler-primary">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To provide an accessible and transparent online measurement aid with clear calibration steps and limitations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="text-ruler-primary mr-3" size={32} />
                <h2 className="text-xl font-semibold text-ruler-primary">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To be the most trusted and widely used digital measurement tool in the world, helping millions of people in their daily measurement needs.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">Why Choose Online-Ruler.Onl?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Explicit Calibration</h3>
                  <p className="text-gray-700">The ruler identifies uncalibrated output and requires a physical reference or known display diagonal before showing a calibrated state.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">100% Free</h3>
                  <p className="text-gray-700">No sign-ups, no subscriptions, no hidden costs. Always free.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Easy to Use</h3>
                  <p className="text-gray-700">Intuitive interface designed so anyone can use it without complications.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Compatible with All Devices</h3>
                  <p className="text-gray-700">Designed for modern computers, tablets, and smartphones. Results vary with browser zoom, display scaling, and device geometry.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-ruler-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Transparent Data Use</h3>
                  <p className="text-gray-700">Calibration stays in page memory and resets on reload. Google Analytics and AdSense are disclosed in our Privacy Policy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-ruler-primary">How We Review Measurement Content</h2>
            <p className="text-gray-700 mb-4">
              Articles are maintained by the Online Ruler Editorial Team. For standards and unit definitions, we prioritize primary references from organizations such as the Bureau International des Poids et Mesures (BIPM) and the U.S. National Institute of Standards and Technology (NIST). Product pages state known limitations instead of promising universal accuracy.
            </p>
            <p className="text-gray-700">
              Corrections and device-test feedback can be sent through our Contact page. For critical measurements, use an appropriate certified physical instrument.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPageClient;
