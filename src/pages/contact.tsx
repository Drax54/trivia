import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend/API)
    setSubmitted(true);
  };

  const pageTitle = 'Contact Us - Get in Touch | Trivia Master';
  const metaDescription =
    'Have questions or feedback? Get in touch with the Trivia Master team. Contact us via email, phone, or our contact form.';
  const canonicalUrl = `${window.location.origin}/contact`;

  return (
    <Layout>
      {/* Add SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <MapPin className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Address</h3>
            <p className="text-gray-600">
              Trivia Master HQ, 123 Knowledge Street, London, UK
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Phone className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-600">+44 123 456 789</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          {submitted ? (
            <p className="text-lg text-green-600">Thank you for your message! We'll get back to you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
