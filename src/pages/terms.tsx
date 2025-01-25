import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO

export default function TermsAndConditions() {

    const pageTitle = 'Terms and Conditions - User Guidelines | Trivia Master';
  const metaDescription =
    'Read the terms and conditions of Trivia Master. Learn about user responsibilities, prohibited activities, and our content ownership policy.';
  const canonicalUrl = `${window.location.origin}/terms-and-conditions`;


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
                    <FileText className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Please read these terms carefully before using Trivia Master.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <CheckCircle className="w-12 h-12 text-indigo-600 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-4">User Agreement</h3>
                        <p className="text-gray-600">
                            By using Trivia Master, you agree to abide by these terms and conditions.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <AlertCircle className="w-12 h-12 text-indigo-600 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Content Ownership</h3>
                        <p className="text-gray-600">
                            All quizzes and content are the property of Trivia Master and its contributors.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms Overview</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Usage</h3>
                                <p className="text-gray-600">
                                    Users must be at least 13 years old to create an account and use Trivia Master.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Activities</h3>
                                <p className="text-gray-600">
                                    Activities such as cheating, sharing answers, or attempting to disrupt the platform are strictly prohibited.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Changes to Terms</h3>
                                <p className="text-gray-600">
                                    We reserve the right to update these terms at any time. Users will be notified of significant changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
