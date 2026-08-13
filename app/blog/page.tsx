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
