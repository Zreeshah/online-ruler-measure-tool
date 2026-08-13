import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';
import PageStructuredData from '@/components/PageStructuredData';

const pageDescription = 'How Online-Ruler.Onl uses Google Analytics, Google AdSense, cookies, calibration settings, and direct email contact.';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: pageDescription,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <PageStructuredData name="Privacy Policy" description={pageDescription} path="/privacy" />
      <main className="container flex-1 py-8">
        <article className="prose mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h1>Privacy Policy</h1>
          <p><strong>Effective date:</strong> August 12, 2026</p>
          <p>
            This policy explains the data handling that is visible in the current Online-Ruler.Onl implementation. The measurement tool does not require an account, and the contact page does not submit a web form.
          </p>

          <h2>Calibration data</h2>
          <p>
            Screen-calibration values are kept in page memory while you use the site. The current implementation does not save calibration values to our server or to browser local storage. Reloading the page resets the tool to an uncalibrated estimate.
          </p>

          <h2>Analytics</h2>
          <p>
            We use Google Analytics to understand aggregate site usage. Google Analytics may process information such as page views, approximate location derived from IP address, browser and device information, referral source, and interaction data. Google may use cookies or similar identifiers for this purpose.
          </p>

          <h2>Advertising</h2>
          <p>
            We use Google AdSense, which may display personalized or non-personalized advertising and may use cookies or similar technologies. Google and its advertising partners may process device, browser, IP-address, ad-interaction, and interest information according to their own policies and applicable consent requirements.
          </p>
          <p>
            Learn more in <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer">Google&apos;s explanation of data use on partner sites</a> and manage advertising choices through <a href="https://myadcenter.google.com/" rel="noopener noreferrer">Google My Ad Center</a>.
          </p>

          <h2>Cookies and browser controls</h2>
          <p>
            Analytics and advertising services may set or read cookies. You can block or delete cookies in your browser, use privacy protections offered by your device, or install the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer">Google Analytics opt-out add-on</a>. Blocking these technologies may change analytics or ad behavior but does not prevent use of the ruler itself.
          </p>

          <h2>Direct email</h2>
          <p>
            The contact page opens your email application with a <code>mailto:</code> link. We do not receive anything unless you choose to send the email. If you send a message, your email address, message, and any information you include are processed by your email provider and received in our mailbox. We use that information to respond and retain it only as reasonably needed for the conversation, security, or legal obligations.
          </p>

          <h2>Sharing and international processing</h2>
          <p>
            We do not sell calibration data. Google acts as a third-party analytics and advertising provider and may process data in countries other than your own. We may disclose information when legally required or necessary to protect the site and its users.
          </p>

          <h2>Your choices and requests</h2>
          <p>
            Depending on your location, you may have rights to request access, correction, deletion, restriction, or objection concerning personal information we control. Contact <a href="mailto:info@online-ruler.onl">info@online-ruler.onl</a>. We may need to verify the request and may retain information when legally required.
          </p>

          <h2>Children</h2>
          <p>
            The service is a general-audience utility and is not designed to knowingly collect personal information from children. If you believe a child sent us personal information, contact us so we can review and delete it where appropriate.
          </p>

          <h2>Changes</h2>
          <p>
            We will update the effective date and this page when our practices materially change. Questions can be sent to <a href="mailto:info@online-ruler.onl">info@online-ruler.onl</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
