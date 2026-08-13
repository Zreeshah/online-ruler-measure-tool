import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import { blogArticles } from '@/utils/internalLinks';
import { SITE_URL } from '@/lib/seo';
import ShareButton from '@/components/ShareButton';

interface BlogLayoutProps {
  children: React.ReactNode;
  currentUrl: string;
  publishDate: string;
  imageUrl?: string;
  imageAlt?: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, currentUrl, publishDate, imageUrl, imageAlt }) => {
  const slug = currentUrl.split('/').filter(Boolean).at(-1) || '';
  const article = blogArticles.find((item) => item.url === currentUrl);
  const canonicalUrl = `${SITE_URL}${currentUrl}`;
  const publishedIso = article?.publishedDate || new Date(publishDate).toISOString().slice(0, 10);
  const optimizedImage = `${SITE_URL}/images/blog/${slug}-1200.webp`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}/#article`,
        headline: article?.title,
        description: article?.description,
        datePublished: publishedIso,
        ...(article?.modifiedDate && { dateModified: article.modifiedDate }),
        mainEntityOfPage: canonicalUrl,
        image: {
          '@type': 'ImageObject',
          url: optimizedImage,
          contentUrl: optimizedImage,
          width: 1200,
          height: 630,
          caption: imageAlt || article?.title,
        },
        thumbnailUrl: `${SITE_URL}/images/blog/${slug}-social.jpg`,
        author: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#editorial-team`,
          name: 'Online Ruler Editorial Team',
          url: `${SITE_URL}/about`,
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
        keywords: article?.keywords.join(', '),
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Measurement Guides', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article?.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="flex-grow py-6">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-ruler-primary mb-4 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            All measurement guides
          </Link>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-ruler-primary hover:underline">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/blog" className="hover:text-ruler-primary hover:underline">Guides</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">{article?.title}</span>
          </nav>
          
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-8">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-1" />
                <span>
                  Published: <time dateTime={publishedIso}>{publishDate}</time>
                  {article?.modifiedDate && <> · Updated: <time dateTime={article.modifiedDate}>August 12, 2026</time></>}
                </span>
              </div>
              <ShareButton title={article?.title || 'Online Ruler measurement guide'} url={canonicalUrl} />
            </div>
            
            <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              {imageUrl && (
                <div className="relative mb-8 aspect-[1200/630] overflow-hidden rounded-lg bg-gray-100">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`/images/blog/${slug}-480.avif 480w, /images/blog/${slug}-768.avif 768w, /images/blog/${slug}-1200.avif 1200w`}
                      sizes="(max-width: 640px) calc(100vw - 3rem), 768px"
                    />
                    <img
                      src={`/images/blog/${slug}-768.webp`}
                      srcSet={`/images/blog/${slug}-480.webp 480w, /images/blog/${slug}-768.webp 768w, /images/blog/${slug}-1200.webp 1200w`}
                      sizes="(max-width: 640px) calc(100vw - 3rem), 768px"
                      width="1200"
                      height="630"
                      alt={imageAlt || ''}
                      className="h-full w-full object-cover"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </picture>
                </div>
              )}
              {children}
            </article>

            <aside className="mt-8 rounded-lg border border-purple-100 bg-purple-50 p-4 text-sm leading-6 text-gray-700">
              <p className="font-semibold text-gray-900">About this guide</p>
              <p>
                Written and maintained by the Online Ruler Editorial Team. Unit definitions and standards-based claims are checked against primary sources such as NIST and BIPM. See our <Link href="/about" className="text-blue-700 hover:underline">editorial and measurement methodology</Link>. Corrections are welcome through the <Link href="/contact" className="text-blue-700 hover:underline">contact page</Link>.
              </p>
            </aside>
            
            <RelatedArticlesSection currentUrl={currentUrl} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
