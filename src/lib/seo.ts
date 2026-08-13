import type { Metadata } from 'next';
import { blogArticles } from '@/utils/internalLinks';

export const SITE_URL = 'https://www.online-ruler.onl';
export const SITE_NAME = 'Online-Ruler.Onl';
export const SOCIAL_IMAGE_URL = `${SITE_URL}/ruler-preview.png`;
export const LAST_REVIEWED_DATE = '2026-08-13';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = new URL(path, `${SITE_URL}/`).toString();
  const article = type === 'article' ? blogArticles.find((item) => item.url === path) : undefined;
  const socialImageUrl = article
    ? `${SITE_URL}/images/blog/${path.split('/').filter(Boolean).at(-1)}-social.jpg`
    : SOCIAL_IMAGE_URL;
  const displayTitle = path === '/' ? title : `${title} | Online Ruler`;

  return {
    title: { absolute: displayTitle },
    description,
    keywords,
    authors: [{ name: 'Online Ruler Editorial Team', url: `${SITE_URL}/about` }],
    creator: 'Online Ruler Editorial Team',
    publisher: SITE_NAME,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      ...(article?.publishedDate && {
        publishedTime: article.publishedDate,
        authors: [`${SITE_URL}/about`],
      }),
      ...(article?.modifiedDate && { modifiedTime: article.modifiedDate }),
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: article?.title || 'Online Ruler screen measurement and calibration tool',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: socialImageUrl, alt: article?.title || 'Online Ruler screen measurement and calibration tool' }],
    },
  };
}

type WebPageSchemaOptions = {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  name: string;
  description: string;
  path: string;
};

export function createWebPageSchema({
  type = 'WebPage',
  name,
  description,
  path,
}: WebPageSchemaOptions) {
  const url = new URL(path, `${SITE_URL}/`).toString();

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
    dateModified: LAST_REVIEWED_DATE,
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, `${SITE_URL}/`).toString(),
    })),
  };
}
