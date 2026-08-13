"use client";

import { Share2 } from 'lucide-react';

type ShareButtonProps = {
  title: string;
  url: string;
};

export default function ShareButton({ title, url }: ShareButtonProps) {
  const shareArticle = async () => {
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <button type="button" onClick={shareArticle} className="flex min-h-12 shrink-0 items-center text-sm text-gray-500 hover:text-ruler-primary">
      <Share2 size={16} className="mr-1" />
      <span>Share</span>
    </button>
  );
}
