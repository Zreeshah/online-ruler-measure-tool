import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Target, Zap } from 'lucide-react';

const AboutPageClient = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumb current="About Us" className="mb-4" />
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
                  <h3 className="font-semibold mb-1 text-gray-900">Designed for Modern Screens</h3>
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

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">Who Runs This Site</h2>
            <p className="text-gray-700 mb-4">
              Online-Ruler.Onl is operated by Connie D Johnson, based at 130 General Nelson Dr, Richmond, Kentucky 40475, United States. The site is an independent project: it is not affiliated with any ruler manufacturer, printer company, or standards body.
            </p>
            <p className="text-gray-700 mb-4">
              Questions, corrections, and device-test feedback can be sent to <a href="mailto:contact@online-ruler.onl" className="text-blue-700 hover:underline">contact@online-ruler.onl</a> or through the <a href="/contact" className="text-blue-700 hover:underline">contact page</a>. We aim to reply within 2 working days.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">What This Site Does — and Does Not Do</h2>
            <p className="text-gray-700 mb-4">
              The site provides a free on-screen ruler in centimetres, millimetres, and inches, a printable ruler with a 100 mm scale check, and practical measurement guides covering ruler markings, metric and U.S. customary units, and instruments such as clinometers and depth gauges.
            </p>
            <p className="text-gray-700 mb-4">
              It does not provide certified measurements. The on-screen scale is an estimate until you calibrate it, and even a calibrated screen ruler is a quick-check tool, not a substitute for a certified physical instrument. Do not use it for medical, safety, construction, manufacturing-tolerance, legal, or other consequential measurements. The guides are educational: they explain how instruments work and where their limits lie, and they cite primary sources such as NIST and BIPM so readers can verify the underlying definitions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">Editorial Standards</h2>
            <p className="text-gray-700 mb-4">
              Articles are written and maintained by the Online Ruler Editorial Team. Unit definitions and standards-based claims are checked against primary sources — the Bureau International des Poids et Mesures (BIPM) and the U.S. National Institute of Standards and Technology (NIST) — rather than secondary summaries. Worked examples use exact conversion factors (1 in = 25.4 mm) and show their working so readers can check them.
            </p>
            <p className="text-gray-700 mb-4">
              When a guide is revised, the change is a real content update, not a cosmetic date change. Corrections are welcome: send them through the contact page with the page address and the sentence you believe is wrong, and we will check it against the primary source.
            </p>
            <p className="text-gray-700">
              The site is funded by advertising through Google AdSense and uses Google Analytics to understand aggregate usage. Both are disclosed in the <a href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</a>. Advertising does not influence editorial content.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">How the Ruler Is Built and Tested</h2>
            <p className="text-gray-700 mb-4">
              The on-screen ruler is a browser tool, not a downloaded program. It draws its scale from the display&apos;s reported pixel density and asks you to calibrate it against a physical reference — a standard card or a manufacturer-listed screen diagonal — because browsers cannot reliably determine a display&apos;s physical size on their own. Calibration values stay in page memory and reset when the page reloads, so a fresh calibration is needed after a browser restart, a monitor change, or a zoom change.
            </p>
            <p className="text-gray-700 mb-4">
              The printable ruler is generated with CSS physical units (millimetres and inches) rather than a pixel-sized image, so its accuracy depends on the print pipeline, not on screen resolution. That is why the sheet carries a 100 mm test line: the print settings, driver, and paper must be verified with a trusted physical ruler before any measurement from the sheet is used. The guides on this site are checked the same way — worked examples show their arithmetic, conversion factors are exact where they exist (1 in = 25.4 mm), and claims about units cite NIST and BIPM so readers can verify them independently.
            </p>
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
