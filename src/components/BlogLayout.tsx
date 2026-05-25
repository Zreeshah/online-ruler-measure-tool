"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Clock, Share2, ArrowLeft } from 'lucide-react';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';

interface BlogLayoutProps {
  children: React.ReactNode;
  currentUrl: string;
  publishDate: string;
  imageUrl?: string;
  imageAlt?: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, currentUrl, publishDate, imageUrl, imageAlt }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-6">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to home page
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-1" />
                <span>Published: {publishDate}</span>
              </div>
              <button className="flex items-center text-gray-500 text-sm hover:text-ruler-primary">
                <Share2 size={16} className="mr-1" />
                <span>Share</span>
              </button>
            </div>
            
            <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              {imageUrl && (
                <div className="relative rounded-lg overflow-hidden mb-8 max-h-[400px]">
                  <img src={imageUrl} alt={imageAlt || ""} className="w-full h-auto object-cover" />
                </div>
              )}
              {children}
            </article>
            
            <RelatedArticlesSection currentUrl={currentUrl} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
