import type { Metadata } from 'next';

export const SITE_URL = 'https://www.online-ruler.onl';
export const SITE_NAME = 'Online-Ruler.Onl';
export const SOCIAL_IMAGE_URL = `${SITE_URL}/ruler-preview.png`;

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

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: 'Online Ruler screen measurement and calibration tool',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}
