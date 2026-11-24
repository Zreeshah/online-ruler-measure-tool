import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';

const pageDescription = 'Terms of use for Online-Ruler.Onl: acceptable use, measurement limits, intellectual property, liability, and contact.';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Use',
  description: pageDescription,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <PageStructuredData name="Terms of Use" description={pageDescription} path="/terms" />
      <main className="container flex-1 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Terms of Use</h1>
          <p className="mb-6"><strong>Effective date:</strong> November 2026</p>
          <p className="mb-6">
            <strong>Operator:</strong> Online-Ruler.Onl is operated by Connie D Johnson, 130 General Nelson Dr, Richmond, Kentucky 40475, United States. Contact: <a href="mailto:contact@online-ruler.onl" className="text-blue-700 hover:underline">contact@online-ruler.onl</a>.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Acceptance</h2>
          <p className="mb-6">By using this website, you agree to these terms. If you do not agree, do not use the site. We may update these terms; the effective date above will change when we do, and continued use after an update means you accept the updated terms.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">The service</h2>
          <p className="mb-6">Online-Ruler.Onl provides a free on-screen ruler in centimetres, millimetres, and inches, a printable ruler, and educational measurement guides. The service is provided free of charge and &ldquo;as is&rdquo;. No account is required. We do not promise that the service will be available at all times, free of errors, or suitable for any particular purpose.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Measurement limits</h2>
          <p className="mb-6">The on-screen ruler is an estimate until you calibrate it with a standard card or a known screen diagonal, and calibration cannot eliminate every source of error. The printable ruler is usable only after the 100 mm test line is verified with a trusted physical ruler. Do not use the tool for medical, safety, construction, manufacturing-tolerance, legal, surveying, or other consequential measurements. Use a suitable calibrated physical instrument for those purposes. See the Disclaimer for the full statement of limits.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Acceptable use</h2>
          <p className="mb-6">You agree not to use the site to break the law, to attempt to access systems or data you are not authorized to access, to interfere with the site&apos;s operation, to copy the site&apos;s content in a way that misrepresents it as your own, or to use automated means to extract content at a scale that degrades the service for others. Normal browsing, printing the ruler for personal use, and linking to the site are welcome.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Intellectual property</h2>
          <p className="mb-6">The site&apos;s text, guides, images, and tool design are owned by the operator unless stated otherwise. You may print pages for personal use and share links to them. You may not reproduce substantial parts of the guides or images for commercial purposes without permission. Short quotations with attribution and a link are acceptable. Measurement facts, unit definitions, and conversion factors are public knowledge and are not claimed as property.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Availability and changes to the service</h2>
          <p className="mb-6">The service is provided free of charge and may be changed, suspended, or discontinued at any time without notice — for example, to fix a defect, to update the guides, or to change how the tool is delivered. We do not promise uninterrupted availability, and we are not liable for measurements you cannot take while the service is unavailable. If a guide is revised, the change is a real content update; the effective date of these terms changes only when the terms themselves change.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Third-party services</h2>
          <p className="mb-6">The site uses Google Analytics to understand aggregate usage and Google AdSense to display advertising. Both are operated by Google under its own terms and privacy policies, which are separate from these terms. Advertising content is served by Google and does not imply endorsement by the operator, and the operator does not control which advertisement is shown to a particular visitor. Links to external sites, including NIST and BIPM, are provided for verification and do not imply endorsement of those sites.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Advertising and analytics</h2>
          <p className="mb-6">The site uses Google AdSense for advertising and Google Analytics to understand aggregate usage. Advertising and analytics are described in the Privacy Policy. Advertising content is served by Google and does not imply endorsement by the operator.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Liability</h2>
          <p className="mb-6">To the extent permitted by law, the operator is not liable for any loss arising from use of the site, including losses from reliance on screen or printed measurements. Your remedy for a problem with the service is to stop using it and to report the issue through the contact page.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Governing law</h2>
          <p className="mb-6">These terms are governed by the laws of the Commonwealth of Kentucky, United States, without regard to conflict-of-law rules. Any dispute arising from these terms or the use of the site will be handled under those laws.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Severability and entire agreement</h2>
          <p className="mb-6">If any part of these terms is found unenforceable, the remaining parts continue to apply. These terms, together with the Privacy Policy and Disclaimer, are the entire agreement between you and the operator for the use of this site. No other statement, whether on the site or elsewhere, changes these terms. If the operator does not enforce a term on one occasion, that does not waive the right to enforce it later. Headings are for convenience only and do not change the meaning of the terms.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Contact</h2>
          <p className="mb-6">Questions about these terms can be sent to <a href="mailto:contact@online-ruler.onl" className="text-blue-700 hover:underline">contact@online-ruler.onl</a> or through the contact page. We aim to reply within 2 working days. When you write, include the section of the terms your question is about and, if it concerns a specific guide or tool, the page address — that lets us answer without asking for the same details twice.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
