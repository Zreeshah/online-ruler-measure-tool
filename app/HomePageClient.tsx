"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import MobileRuler from '@/components/MobileRuler';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, Square, Pencil, Book, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogArticles } from '@/utils/internalLinks';
import calibrationGuide from '@/assets/calibration-guide.png';
import reglaOnline from '@/assets/regla-online.jpg';
import reglaPrecision from '@/assets/regla-precision.jpg';
import HomeContent from '@/components/HomeContent';
import Image from 'next/image';
import CalibrationPanel from '@/components/CalibrationPanel';

import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';

const HomePageClient = () => {
  const { t } = useLanguage();
  
  const featuredArticles = blogArticles.filter(article => article.url !== "/").slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mb-6 mt-8 text-center">
        <h1 className="text-3xl font-bold text-[#9b87f5] md:text-4xl">
          Online Ruler — Real Size After Calibration
        </h1>
        <p className="mt-2 text-base text-gray-600 md:text-lg">
          Digital ruler for screen measurements after you calibrate it with a physical reference
        </p>
      </div>

      <CalibrationPanel />

      <div className="md:hidden">
        <MobileRuler />
      </div>
      <div className="mt-4 hidden w-full md:block">
          <Ruler className="mb-4" />
      </div>
      
      <main className="container relative mt-6 flex-1 pb-6">
              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#9b87f5] flex items-center">
                      <Book size={20} className="mr-2" />
                      Featured Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {featuredArticles.map((article, index) => (
                        <Link 
                          key={index} 
                          href={article.url}
                          className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-[#9b87f5]">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {article.keywords.slice(0, 3).join(', ')}
                          </p>
                          <div className="flex items-center text-[#9b87f5] text-sm font-medium">
                            Read more
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <Image 
                      src={calibrationGuide} 
                      alt="Calibration guide: Adjusts to the width of a standard plastic card" 
                      className="w-full h-auto rounded-lg object-cover"
                      loading="eager"
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <HomeContent />
                  </CardContent>
                </Card>
              </div>
              
                <div className="mb-10">
                  <Card className="bg-white p-6">
                    <CardContent className="p-0">
                      <p className="mb-4">{t('rulerDescription')}</p>
                      <p className="mb-4">{t('contentIntro')}</p>
                      
                      <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">{t('moreInfo')}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <RulerIcon className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase1')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase1Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Pencil className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase2')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase2Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Square className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase3')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase3Description')}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                          <Maximize className="text-[#9b87f5] mr-2 mt-1" size={20} />
                          <div>
                            <h3 className="font-semibold mb-1">{t('useCase4')}</h3>
                            <p className="text-sm text-gray-600">{t('useCase4Description')}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <HowToUseSection />
                  <WhyPerfectSection />
                </div>

                <section
                  className="-mx-6 mb-10 sm:mx-0"
                  aria-label="Online ruler measurement guide"
                >
                  <Card className="overflow-hidden bg-white p-2 sm:p-4 md:p-6">
                    <CardContent className="p-0">
                      <figure className="mx-auto w-full max-w-6xl">
                        <a
                          href="/images/infographic/online-ruler-1536.webp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2"
                          aria-label="Open the online ruler infographic at full size"
                        >
                          <picture>
                            <source
                              type="image/avif"
                              srcSet="/images/infographic/online-ruler-640.avif 640w, /images/infographic/online-ruler-960.avif 960w, /images/infographic/online-ruler-1152.avif 1152w, /images/infographic/online-ruler-1536.avif 1536w"
                              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 6rem), 1152px"
                            />
                            <img
                              src="/images/infographic/online-ruler-1152.webp"
                              srcSet="/images/infographic/online-ruler-640.webp 640w, /images/infographic/online-ruler-960.webp 960w, /images/infographic/online-ruler-1152.webp 1152w, /images/infographic/online-ruler-1536.webp 1536w"
                              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 6rem), 1152px"
                              width="1536"
                              height="2752"
                              alt="Online ruler infographic explaining units, screen calibration, measurement steps, common use cases, and accuracy checks"
                              className="h-auto w-full rounded-lg object-contain shadow-sm"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                        </a>
                        <figcaption className="mt-2 text-center text-xs text-gray-500 sm:text-sm">
                          Tap or click the infographic to view it at full resolution.
                        </figcaption>
                      </figure>
                    </CardContent>
                  </Card>
                </section>
              
                <FaqSection />
              
                <RulerSizesTable />

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">How to Use the Online Ruler Correctly</h2>
                    <p className="mb-6 text-gray-700">
                      Follow these steps to reduce screen-scaling errors and understand when a physical measuring tool is still required.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Choose the unit of measurement</h3>
                        <p className="text-gray-700">
                          Select the unit you need: millimeters (mm), centimeters (cm), or inches (in). You can change it at any time from the ruler menu.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Calibrate the screen (recommended method)</h3>
                        <p className="text-gray-700 mb-3">
                          Before using the scale for a physical object, complete one of these calibration methods:
                        </p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold mb-2 text-gray-800">Option A — Standard card calibration (recommended):</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Place a credit or debit card on the screen.</li>
                            <li>Adjust the calibration control until the on-screen card length matches 85.6 mm (standard size).</li>
                            <li>Confirm the match. The page will then mark the ruler as calibrated.</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-gray-800">Option B — Screen diagonal calibration:</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>If you know your screen diagonal in inches, enter it in the calibration field.</li>
                            <li>The site will automatically calculate the pixel-to-mm ratio.</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Prepare the device and the object to measure</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Place the device (phone/tablet/PC) on a flat, stable surface.</li>
                          <li>Make sure the screen is clean and free of reflections that make reading difficult.</li>
                          <li>Place the object to measure as parallel as possible to the on-screen ruler.</li>
                        </ul>
                      </div>

                      <div className="my-6">
                        <Image
                          src={reglaOnline}
                          alt="Digital caliper on a dark surface used as a physical measurement instrument"
                          className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Measure correctly</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Place the edge of the object at the 0 point of the virtual ruler.</li>
                          <li>Read the measurement in the selected unit.</li>
                          <li>If the object is longer than the on-screen ruler, note the visible measurement and move the object to measure the rest.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">5. Tips for greater precision</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Verify that the browser zoom is at 100% (no zoom).</li>
                          <li>Avoid measuring through thick cases or protectors that alter the object&apos;s position.</li>
                          <li>Recalibrate if you change devices or after a browser update.</li>
                          <li>For critical measurements (engineering, construction), use certified physical instruments.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">6. Common problems and quick solutions</h3>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Incorrect measurements:</strong> Recalibrate with the standard card.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>The ruler looks distorted:</strong> Make sure there is no zoom on the page or in accessibility settings.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Doesn&apos;t work in my browser:</strong> Update your browser or try Chrome/Firefox/Safari in their latest version.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Start Measuring Now!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      After calibration, your screen can help with quick, non-critical measurements without downloading an app. Verify important results with a suitable physical instrument.
                    </p>

                    <div className="my-6">
                      <Image
                        src={reglaPrecision}
                          alt="Person using a physical ruler on paper for design work"
                        className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">⚡ Fast, easy, and free</h3>
                        <p className="text-gray-700">
                          Calibrate for the current display and keep browser zoom at 100%. Recalibrate after changing display, zoom, or operating-system scaling.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">✓ Ready to start</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Click the &quot;Calibrate Screen&quot; button.</li>
                          <li>Adjust the ruler according to your screen size or with a standard card.</li>
                          <li>Start measuring right away any object you have on hand!</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">🎯 Why wait?</h3>
                        <p className="text-gray-700">
                          Measure, compare, and calculate instantly from any device. Ideal for students, designers, craftspeople, and anyone who needs a quick and reliable measurement.
                        </p>
                      </div>
                    </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
  );
};

export default HomePageClient;
