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
          <p className="mb-6">If you need more information or have any questions about the disclaimer of our website, please feel free to contact us by email at contact@online-ruler.onl.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Online Ruler Disclaimer</h2>
          <p className="mb-6">All information on this website (https://www.online-ruler.onl) is published in good faith for general informational purposes. The on-screen scale is an estimate until a user completes calibration, and calibration cannot eliminate every source of display or placement error. Do not use the tool for medical, safety, construction, manufacturing-tolerance, legal, or other consequential measurements. Use a suitable calibrated physical instrument instead.</p>
          
          <p className="mb-6">From our website, you can visit other websites through external links. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation of all content found on them. Site owners and content may change without notice. Please be aware that when you leave our website, other sites may have different privacy policies and terms beyond our control. Please review the privacy policies and terms of service of those sites before conducting any business or uploading information.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Accuracy of the Guides</h2>
          <p className="mb-6">The measurement guides are educational and are checked against primary sources such as NIST and BIPM for unit definitions and conversion factors. Worked examples use exact conversion factors where they exist (1 in = 25.4 mm) and mark rounded figures as approximate. Instrument guides describe each instrument&apos;s resolution and typical error sources, but they cannot cover every model, condition, or use case. If a guide and a manufacturer&apos;s manual disagree, follow the manual for that instrument. Corrections are welcome through the contact page; accepted corrections are applied as real content changes, not cosmetic date changes.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Changes to This Disclaimer</h2>
          <p className="mb-6">This disclaimer may change when the tool or the guides change — for example, if a new instrument guide is added or a measurement method is revised. The current version on this page is the one that applies. We do not notify individual users of changes, so check this page if you rely on it. Questions about the disclaimer can be sent to contact@online-ruler.onl.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Third-Party Content and Advertising</h2>
          <p className="mb-6">This site displays advertising served by Google AdSense and uses Google Analytics to understand aggregate usage, as described in the Privacy Policy. Advertising content is selected by Google, not by the operator, and an advertisement does not imply that the operator endorses the advertised product or service. External links, including links to NIST and BIPM, are provided so readers can verify definitions and conversion factors; the operator does not control those sites and is not responsible for their content, availability, or privacy practices.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Consent</h2>
          <p className="mb-6">By using our website, you hereby consent to this disclaimer and agree to its terms.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Measurement Accuracy Limits</h2>
          <p className="mb-6">The on-screen ruler is an estimate until you complete calibration, and calibration cannot eliminate every source of error. Browser zoom, operating-system display scaling, display geometry, protective cases, viewing angle, and object placement can all shift a reading by millimetres. A printed ruler is only as accurate as the print settings; the 100 mm test line on the printable sheet must measure exactly 100 mm with a trusted physical ruler before the printed scales are used. Reported accuracy figures for any instrument on this site describe the instrument's resolution, not a guarantee for a particular measurement on a particular display.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">No Professional Advice</h2>
          <p className="mb-6">Content on this site is educational and general in nature. It is not engineering, medical, legal, surveying, or construction advice. Measurements taken with the on-screen or printable ruler must not be used as the basis for safety decisions, medical decisions, structural work, manufacturing tolerances, property boundaries, or legal matters. For those purposes, use a suitable calibrated physical instrument and, where required, a qualified professional.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Guides and External Sources</h2>
          <p className="mb-6">Measurement guides cite primary sources such as NIST and BIPM so readers can verify definitions and conversion factors. External sources may change without notice, and we do not control their content. A link to an external site does not imply endorsement of everything on that site. Worked examples use exact conversion factors where they exist (1 in = 25.4 mm); rounded figures in examples are marked as approximate.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Operator</h2>
          <p className="mb-6">Online-Ruler.Onl is operated by Connie D Johnson, 130 General Nelson Dr, Richmond, Kentucky 40475, United States. Contact: contact@online-ruler.onl.</p>

          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Limitation of Liability</h2>
          <p className="mb-6">The tool and guides are provided free of charge and "as is", without warranties of any kind. To the extent permitted by law, the operator is not liable for losses arising from reliance on screen or printed measurements, including incorrect cuts, wrong orders, or failed projects. Your remedy for a problem with the site is to stop using it and to report the issue through the contact page so it can be checked.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Update</h2>
          <p>Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
