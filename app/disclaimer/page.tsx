import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';

const pageDescription = 'Measurement limitations and general-use disclaimer for the Online-Ruler.Onl screen ruler and educational content.';

export const metadata: Metadata = createPageMetadata({
  title: 'Disclaimer',
  description: pageDescription,
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <PageStructuredData name="Disclaimer" description={pageDescription} path="/disclaimer" />
      <main className="container flex-1 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Disclaimer</h1>
          <p className="mb-6">If you need more information or have any questions about the disclaimer of our website, please feel free to contact us by email at info@online-ruler.onl.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Online Ruler Disclaimer</h2>
          <p className="mb-6">All information on this website (https://www.online-ruler.onl) is published in good faith for general informational purposes. The on-screen scale is an estimate until a user completes calibration, and calibration cannot eliminate every source of display or placement error. Do not use the tool for medical, safety, construction, manufacturing-tolerance, legal, or other consequential measurements. Use a suitable calibrated physical instrument instead.</p>
          
          <p className="mb-6">From our website, you can visit other websites through external links. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation of all content found on them. Site owners and content may change without notice. Please be aware that when you leave our website, other sites may have different privacy policies and terms beyond our control. Please review the privacy policies and terms of service of those sites before conducting any business or uploading information.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Consent</h2>
          <p className="mb-6">By using our website, you hereby consent to this disclaimer and agree to its terms.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Update</h2>
          <p>Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
