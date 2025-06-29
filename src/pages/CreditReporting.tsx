
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { FileText, Eye, AlertTriangle, Shield } from 'lucide-react';

const CreditReporting = () => {
  const reportElements = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Personal Information',
      description: 'Your name, address, Social Security number, and employment information.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Credit Accounts',
      description: 'Details about your credit cards, loans, and other credit accounts.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Payment History',
      description: 'Records of your payment behavior, including late or missed payments.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Public Records',
      description: 'Bankruptcies, foreclosures, tax liens, and court judgments.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Consumer Education"
        title="Understanding Credit Reporting"
        description="Learn how credit reports work, what information they contain, and how to maintain accurate credit records."
        className="mt-16"
      />

      {/* What is Credit Reporting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What is Credit Reporting?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
              Credit reporting is the system that tracks and records your credit history. Understanding 
              how it works is essential for maintaining good financial health and making informed decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reportElements.map((element, index) => (
                <Card
                  key={index}
                  icon={element.icon}
                  title={element.title}
                  description={element.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credit Bureaus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Three Major Credit Bureaus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three main companies collect and maintain credit information about consumers in the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equifax</h3>
              <p className="text-gray-600 mb-4">
                One of the oldest credit reporting agencies, founded in 1899. Maintains credit information 
                on over 800 million consumers worldwide.
              </p>
              <div className="text-sm text-gray-500">
                Website: equifax.com
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experian</h3>
              <p className="text-gray-600 mb-4">
                The largest credit bureau globally, serving over 1 billion consumers and businesses. 
                Offers additional services beyond credit reporting.
              </p>
              <div className="text-sm text-gray-500">
                Website: experian.com
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">T</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">TransUnion</h3>
              <p className="text-gray-600 mb-4">
                Founded in 1968, TransUnion provides credit information and identity protection services 
                to millions of consumers and businesses.
              </p>
              <div className="text-sm text-gray-500">
                Website: transunion.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Credit Report Rights
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Under the Fair Credit Reporting Act (FCRA), you have specific rights regarding 
                your credit information. Understanding these rights helps you protect your financial reputation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Annual Credit Report</h4>
                    <p className="text-gray-600">Get one free credit report per year from each bureau at annualcreditreport.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dispute Inaccurate Information</h4>
                    <p className="text-gray-600">Challenge any errors you find on your credit report</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Know Who Accessed Your Report</h4>
                    <p className="text-gray-600">See who has viewed your credit report in recent years</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Limit Prescreened Offers</h4>
                    <p className="text-gray-600">Opt out of prescreened credit card and insurance offers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Place Security Alerts</h4>
                    <p className="text-gray-600">Add fraud alerts or security freezes to protect against identity theft</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                alt="Credit report review"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Read Your Report */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Read Your Credit Report
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the different sections of your credit report helps you spot errors and track your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Account type and status</li>
                <li>• Credit limit or loan amount</li>
                <li>• Current balance</li>
                <li>• Payment history</li>
                <li>• Date opened and last activity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment History Codes</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">OK or 1</span>
                  <span className="text-green-600">Paid on time</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">30, 60, 90</span>
                  <span className="text-yellow-600">Days late</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">CO</span>
                  <span className="text-red-600">Charge-off</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">R9</span>
                  <span className="text-red-600">Bad debt/collection</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Current and previous names</li>
                <li>• Current and previous addresses</li>
                <li>• Social Security number</li>
                <li>• Date of birth</li>
                <li>• Employment information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inquiries Section</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hard inquiries (affect credit score)</li>
                <li>• Soft inquiries (don't affect score)</li>
                <li>• Date of inquiry</li>
                <li>• Company that made inquiry</li>
                <li>• Reason for inquiry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Credit Report Best Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Regularly</h3>
              <p className="text-gray-600">Review your credit reports at least once per year from all three bureaus.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dispute Errors</h3>
              <p className="text-gray-600">Challenge any inaccurate information you find as soon as possible.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitor Changes</h3>
              <p className="text-gray-600">Keep track of changes to your credit report and score over time.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditReporting;
