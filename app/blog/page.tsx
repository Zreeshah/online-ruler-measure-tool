import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogArticles } from '@/utils/internalLinks';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Measurement Guides and Ruler Tutorials',
  description: 'Browse practical guides to ruler markings, screen calibration, phone measurement, metric and U.S. customary units, and measurement tools.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const guides = blogArticles.filter((article) => article.url !== '/');

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Measurement Guides</h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            Learn how to calibrate and read a ruler, compare measurement systems, and understand common measurement tools. For screen measurements, begin with the <Link href="/" className="text-ruler-primary hover:underline">calibrated online ruler</Link>.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.url} className="flex flex-col rounded-xl border bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  <Link href={guide.url} className="hover:text-ruler-primary">{guide.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">Topics: {guide.keywords.join(', ')}.</p>
                <Link href={guide.url} className="mt-5 inline-flex min-h-11 items-center font-semibold text-ruler-primary hover:underline">
                  Read guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
