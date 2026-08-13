import type { MetadataRoute } from 'next';
import { LAST_REVIEWED_DATE, SITE_URL } from '@/lib/seo';
import { blogArticles } from '@/utils/internalLinks';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/print-ruler',
    '/about',
    '/contact',
    '/privacy',
    '/disclaimer',
    '/blog',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_REVIEWED_DATE,
  }));

  const articles = blogArticles
    .filter((article) => article.url !== '/')
    .map((article) => ({
      url: `${SITE_URL}${article.url}`,
      lastModified: article.modifiedDate || article.publishedDate,
    }));

  return [...staticPages, ...articles];
}
