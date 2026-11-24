import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogArticles } from '@/utils/internalLinks';
import { createBreadcrumbSchema, createPageMetadata, createWebPageSchema, SITE_URL } from '@/lib/seo';

const pageDescription = 'Browse practical guides to ruler markings, screen calibration, phone measurement, metric and U.S. customary units, and measurement tools.';

export const metadata: Metadata = createPageMetadata({
  title: 'Measurement Guides and Ruler Tutorials',
  description: pageDescription,
  path: '/blog',
});

export default function BlogIndexPage() {
  const guides = blogArticles.filter((article) => article.url !== '/');
  const guideGroups = [
    {
      title: 'Ruler Use and Screen Measurement',
      description: 'Start here for ruler markings, measuring technique, and phone-screen calibration.',
      paths: ['/blog/how-to-read-a-ruler', '/blog/how-to-use-a-ruler', '/blog/how-to-measure-on-phone'],
    },
    {
      title: 'Measurement Systems and Units',
      description: 'Compare common systems and learn how SI, MKS, Imperial, and U.S. customary units relate.',
      paths: ['/blog/metric-vs-imperial', '/blog/metric-system-explained', '/blog/measurement-units-guide', '/blog/mks-system', '/blog/imperial-measurement-system'],
    },
    {
      title: 'Instruments and Scientific Concepts',
      description: 'Explore specialist tools and the unit conventions used in science and engineering.',
      paths: ['/blog/clinometer-guide', '/blog/depth-gauge-guide', '/blog/dimensionless-numbers', '/blog/natural-units-system'],
    },
  ].map((group) => ({
    ...group,
    guides: group.paths.map((path) => guides.find((guide) => guide.url === path)).filter((guide): guide is (typeof guides)[number] => Boolean(guide)),
  }));
  const collectionSchema = createWebPageSchema({
    type: 'CollectionPage',
    name: 'Measurement Guides',
    description: pageDescription,
    path: '/blog',
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Measurement Guides', path: '/blog' },
  ]);
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Online Ruler measurement guides',
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}${guide.url}`,
      name: guide.title,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-ruler-primary hover:underline">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">Measurement Guides</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Measurement Guides</h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            Learn how to calibrate and read a ruler, compare measurement systems, and understand common measurement tools. For screen measurements, begin with the <Link href="/" className="text-ruler-primary hover:underline">calibrated online ruler</Link>.
          </p>

          <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">How to Use These Guides</h2>
            <p className="mt-3 leading-7 text-gray-700">
              Start with the ruler itself: <a href="/blog/how-to-read-a-ruler" className="text-ruler-primary hover:underline">How to Read a Ruler</a> explains the markings, <a href="/blog/how-to-use-a-ruler" className="text-ruler-primary hover:underline">How to Use a Ruler</a> covers technique, and <a href="/blog/how-to-measure-on-phone" className="text-ruler-primary hover:underline">How to Measure on Your Phone Screen</a> covers calibration — the step that makes a screen ruler meaningful at all. The three guides are written to be read in that order, and each one links to the next where the topics overlap.
            </p>
            <p className="mt-3 leading-7 text-gray-700">
              The systems guides answer a different question: which units to use and how they convert. <a href="/blog/metric-system-explained" className="text-ruler-primary hover:underline">Metric System Basics</a> explains SI and its prefixes, <a href="/blog/metric-vs-imperial" className="text-ruler-primary hover:underline">Metric vs U.S. Customary</a> compares the two systems in practice, <a href="/blog/imperial-measurement-system" className="text-ruler-primary hover:underline">Imperial vs U.S. Customary</a> explains where British and American units differ, and <a href="/blog/measurement-units-guide" className="text-ruler-primary hover:underline">Common Measurement Units</a> is the quick reference for length, mass, volume, and temperature. <a href="/blog/mks-system" className="text-ruler-primary hover:underline">MKS System</a> covers the coherent mechanical core of SI for readers who want the physics behind the units.
            </p>
            <p className="mt-3 leading-7 text-gray-700">
              The instruments and concepts group is for specialist tools and ideas: the <a href="/blog/clinometer-guide" className="text-ruler-primary hover:underline">clinometer guide</a> and the <a href="/blog/depth-gauge-guide" className="text-ruler-primary hover:underline">depth gauge guide</a> explain how each instrument works, how to take a reading, and where its errors come from, while <a href="/blog/dimensionless-numbers" className="text-ruler-primary hover:underline">Dimensionless Numbers</a> and <a href="/blog/natural-units-system" className="text-ruler-primary hover:underline">Natural Units in Physics</a> explain the unit conventions used in science and engineering. Every guide cites primary sources — NIST and BIPM for units, and instrument manuals or agency publications for tools — so any claim can be checked.
            </p>
            <p className="mt-3 leading-7 text-gray-700">
              A note on accuracy: no guide on this site promises precision a ruler cannot deliver. Each one states its instrument's resolution and its error sources, and each one says when to verify a result with a physical tool. Corrections are welcome through the <a href="/contact" className="text-ruler-primary hover:underline">contact page</a>.
            </p>
          </div>

          <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">How the Guides Are Reviewed</h2>
            <p className="mt-3 leading-7 text-gray-700">
              Every guide is written and maintained by the Online Ruler Editorial Team and checked against primary sources before publication. Unit definitions and conversion factors are verified against the Bureau International des Poids et Mesures (BIPM) and the U.S. National Institute of Standards and Technology (NIST); instrument guides are checked against manufacturer documentation and agency publications. Worked examples show their arithmetic so readers can reproduce them, and exact conversion factors are used where they exist (1 in = 25.4 mm exactly), with rounded figures marked as approximate.
            </p>
            <p className="mt-3 leading-7 text-gray-700">
              When a guide is revised, the change is a real content update — a corrected definition, a new worked example, or a rewritten procedure — not a cosmetic date change. Corrections from readers are checked against the primary source before anything is changed, and accepted corrections are applied to the guide itself. If you spot an error, send it through the <a href="/contact" className="text-ruler-primary hover:underline">contact page</a> with the page address and the sentence you believe is wrong. Device-test feedback is used the same way: it is checked against the calibration instructions and, where it reveals a gap, the guide is updated to cover it.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {guideGroups.map((group) => (
              <section key={group.title} aria-labelledby={`group-${group.title.toLowerCase().replaceAll(' ', '-')}`}>
                <h2 id={`group-${group.title.toLowerCase().replaceAll(' ', '-')}`} className="text-2xl font-bold text-gray-900">{group.title}</h2>
                <p className="mt-2 max-w-3xl text-gray-600">{group.description}</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.guides.map((guide) => (
                    <article key={guide.url} className="flex flex-col rounded-xl border bg-white p-5 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900">
                        <Link href={guide.url} className="hover:text-ruler-primary">{guide.title}</Link>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{guide.description}</p>
                      <Link href={guide.url} className="mt-5 inline-flex min-h-12 items-center font-semibold text-ruler-primary hover:underline">
                        Read guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
