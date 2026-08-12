"use client";

import React from 'react';
import { Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'info@online-ruler.onl';

const ContactPageClient = () => {
  const subject = encodeURIComponent('Online Ruler feedback');

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h1 className="mb-4 text-3xl font-bold text-ruler-primary">Contact</h1>
          <p className="mb-6 text-gray-700">
            Questions, corrections, accessibility issues, and device-test feedback are welcome. Contact us directly by email so your message is sent through your own mail provider.
          </p>

          <div className="rounded-xl border bg-gray-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Email Online Ruler</h2>
            <p className="mb-4 break-all text-gray-700">{CONTACT_EMAIL}</p>
            <Button asChild className="min-h-11 bg-[#7E69AB] hover:bg-[#6b5796]">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>
                <Mail className="mr-2 h-4 w-4" /> Open your email app
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm leading-6 text-gray-600">
            This page does not submit or store a web form. When you use the email link, your email provider handles delivery and its own privacy terms apply.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPageClient;
