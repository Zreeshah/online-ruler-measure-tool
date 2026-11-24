"use client";

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'contact@online-ruler.onl';

const SUBJECTS = [
  'General question',
  'Correction',
  'Accessibility report',
  'Device-test feedback',
  'Other',
];

const ContactPageClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: SUBJECTS[0],
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Online Ruler] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-2xl">
          <PageBreadcrumb current="Contact" className="mb-4" />
          <div className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h1 className="mb-4 text-3xl font-bold text-ruler-primary">Contact</h1>
            <p className="mb-6 text-gray-700">
              Questions, corrections, accessibility issues, and device-test feedback are welcome. Contact us directly by email so your message is sent through your own mail provider.
            </p>

            <h2 className="mb-4 text-xl font-semibold text-gray-900">Send us a message</h2>
            {sent ? (
              <p className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                Your email app should now be open with a message addressed to {CONTACT_EMAIL}.
                Press send in your email app to deliver it. We aim to reply within 2 working days (48 hours).
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-ruler-primary focus:ring-2 focus:ring-ruler-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-ruler-primary focus:ring-2 focus:ring-ruler-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-ruler-primary focus:ring-2 focus:ring-ruler-primary/20"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Include the page address if your message is about a specific guide."
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-ruler-primary focus:ring-2 focus:ring-ruler-primary/20"
                  />
                </div>
                <Button type="submit" className="min-h-12 w-full bg-[#7E69AB] hover:bg-[#6b5796]">
                  <Mail className="mr-2 h-4 w-4" /> Open your email app to send
                </Button>
              </form>
            )}

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Your message opens in your own email app addressed to {CONTACT_EMAIL}. Nothing is submitted to or stored on our servers; your email provider handles delivery under its own privacy terms. We aim to reply within 2 working days (48 hours).
            </p>

            <div className="mt-8 rounded-xl border bg-gray-50 p-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Prefer to write directly?</h2>
              <p className="mb-4 text-gray-700">
                Email us at {CONTACT_EMAIL} — the same address the form uses.
              </p>
              <Button asChild className="min-h-12 bg-[#7E69AB] hover:bg-[#6b5796]">
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Online Ruler feedback')}`}>
                  <Mail className="mr-2 h-4 w-4" /> Open your email app
                </a>
              </Button>
            </div>

            <h2 className="mb-3 mt-8 text-xl font-semibold text-gray-900">What to include in your message</h2>
            <p className="mb-6 leading-7 text-gray-700">
              For a correction: the page address, the sentence you think is wrong, and the source that supports the correction (NIST or BIPM pages are ideal). For a device-test report: the device model, browser and version, display size or diagonal, and the calibration method you used. For an accessibility report: the assistive technology and browser you used and the step that failed. The more specific the report, the faster it can be checked — a message that says only &ldquo;the ruler is wrong&rdquo; cannot be investigated.
            </p>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">What happens after you send</h2>
            <p className="mb-6 leading-7 text-gray-700">
              Your message arrives in our mailbox and is read by the site operator. Corrections are checked against the primary source before any change is made, so a reply may take the full 2 working days while the check runs. If a correction is accepted, the guide is updated with a real content change. Device-test feedback is used to improve the calibration instructions. We do not sell, share, or add your address to any list; it is used only to reply to your message and is retained only as long as the conversation, security, or a legal obligation requires.
            </p>

            <h2 className="mb-3 mt-8 text-xl font-semibold text-gray-900">Check the ruler before you report a problem</h2>
            <p className="mb-4 leading-7 text-gray-700">
              Most measurement reports turn out to be calibration problems, not ruler errors, and a few checks before you write in will usually find the cause. First, confirm the calibration: the ruler is an estimate until you match a standard card or enter a known screen diagonal, and browser zoom, operating-system display scaling, and a changed monitor all invalidate an earlier calibration. Second, check the zero point — measurements must start at the zero mark, not at the edge of the ruler or the edge of the screen. Third, view the scale straight on; a viewing angle shifts the apparent position of the object against the marks (parallax), which is the most common cause of a reading that looks a few millimetres out.
            </p>
            <p className="mb-6 leading-7 text-gray-700">
              If the reading is still wrong after those checks, tell us the device model, the browser and its version, the display size or diagonal, the calibration method you used, and the object you measured, with a screenshot if you can. That combination lets us reproduce the problem on a similar setup instead of guessing. Reports about the printable ruler should also include the paper size, the printer model, and whether the 100 mm test line measured exactly 100 mm with a physical ruler — a wrong test line means the print was scaled, and no reading from that sheet can be trusted.
            </p>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">What we cannot help with</h2>
            <p className="mb-6 leading-7 text-gray-700">
              We cannot recover a measurement you took, certify a result, or advise on a specific project, purchase, or medical, safety, or legal decision — the tool is a quick-check aid, not a certified instrument, and the guides explain its limits in detail. We also cannot provide phone support or respond to messages sent to any address other than contact@online-ruler.onl. If your message is about a different website or a product you bought elsewhere, we cannot help; check that site&apos;s own contact page instead.
            </p>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">If you do not hear back</h2>
            <p className="mb-6 leading-7 text-gray-700">
              We aim to reply within 2 working days. If you have not heard back after that, first check your spam or junk folder — replies from a small site are sometimes filtered there. If there is still nothing, send the message again with the same subject line and the word &ldquo;follow-up&rdquo; added, so it is easy to match with your first message. Do not send the same report to several addresses at once; there is only one mailbox, and duplicates slow down the reply to everyone.
            </p>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4 leading-7 text-gray-700">
              <p>
                <strong className="text-gray-900">How quickly will I get a reply?</strong>{' '}
                We aim to reply within 2 working days. Complex corrections can take longer while they are verified.
              </p>
              <p>
                <strong className="text-gray-900">Can I report a wrong measurement on the ruler?</strong>{' '}
                Yes — include the device, browser, calibration method, and the object you measured. Screenshots help.
              </p>
              <p>
                <strong className="text-gray-900">Do you offer phone support?</strong>{' '}
                No. Email is the only contact route, so every report is written down and can be checked.
              </p>
              <p>
                <strong className="text-gray-900">Will my email address be shared?</strong>{' '}
                No. It is used only to reply to you, as explained in the Privacy Policy.
              </p>
              <p>
                <strong className="text-gray-900">Can I suggest a new guide?</strong>{' '}
                Yes. Tell us the topic and what the existing guides do not cover; suggestions that fill a real gap in the measurement guides are the ones most likely to be written.
              </p>
            </div>

            <p className="mt-8 text-sm leading-6 text-gray-600">
              Online-Ruler.Onl is operated by Connie D Johnson, 130 General Nelson Dr, Richmond, Kentucky 40475, United States.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPageClient;
