import React from 'react';
import { Shield, Lock, EyeOff } from 'lucide-react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO


export default function PrivacyPolicy() {

  const pageTitle = 'Privacy Policy - How We Protect Your Data | Trivia Master';
  const metaDescription =
    'Learn how Trivia Master collects, uses, and protects your personal data. Read about our commitment to transparency and user privacy.';
  const canonicalUrl = `${window.location.origin}/privacy-policy`;


  return (
    <Layout>
      {/* Add SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how Trivia Master collects, uses, and protects your personal data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Lock className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Data is Secure</h3>
            <p className="text-gray-600">
              We use industry-standard security measures to protect your personal information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <EyeOff className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency First</h3>
            <p className="text-gray-600">
              We are committed to being transparent about the data we collect and how we use it.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What Data Do We Collect?</h3>
                <p className="text-gray-600">
                  We collect information such as your name, email, and quiz scores to improve your experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How Do We Use Your Data?</h3>
                <p className="text-gray-600">
                  Your data is used to personalize your experience, improve our services, and for analytics purposes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                <p className="text-gray-600">
                  You have the right to access, update, or delete your personal information at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
