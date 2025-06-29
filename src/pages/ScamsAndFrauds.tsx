
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { AlertTriangle, Shield, Phone, Eye } from 'lucide-react';

const ScamsAndFrauds = () => {
  const commonScams = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Fake Debt Collectors',
      description: 'Scammers pose as debt collectors to steal money or personal information.',
      warning: 'They often demand immediate payment via wire transfer or prepaid cards.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Credit Repair Scams',
      description: 'Companies promise to fix your credit quickly for an upfront fee.',
      warning: 'Legitimate credit repair takes time and you can do it yourself for free.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Identity Theft',
      description: 'Criminals steal personal information to open accounts in your name.',
      warning: 'Monitor your credit reports and financial statements regularly.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Debt Settlement Scams',
      description: 'Fraudulent companies promise unrealistic debt reduction results.',
      warning: 'Be wary of guarantees and upfront fees before any work is done.'
    }
  ];

  const redFlags = [
    'Demands immediate payment',
    'Asks for payment via wire transfer, prepaid cards, or cryptocurrency',
    'Refuses to provide written information',
    'Won\'t verify your personal information',
    'Threatens arrest or legal action immediately',
    'Calls at unusual hours (before 8 AM or after 9 PM)',
    'Discusses your debt with family, friends, or coworkers',
    'Guarantees to remove accurate information from credit reports'
  ];

  const protectionTips = [
    {
      title: 'Verify the Collector',
      description: 'Ask for company name, address, and license number. Look them up online.',
      icon: '🔍'
    },
    {
      title: 'Request Written Validation',
      description: 'All legitimate collectors must provide debt validation in writing.',
      icon: '📋'
    },
    {
      title: 'Never Give Personal Info',
      description: 'Don\'t provide SSN, bank account, or credit card info over the phone.',
      icon: '🔒'
    },
    {
      title: 'Keep Detailed Records',
      description: 'Document all communications including dates, times, and conversations.',
      icon: '📝'
    },
    {
      title: 'Know Payment Methods',
      description: 'Legitimate collectors accept checks and money orders, not just wire transfers.',
      icon: '💳'
    },
    {
      title: 'Research Before Paying',
      description: 'Verify debts against your records before making any payments.',
      icon: '🔎'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Consumer Protection"
        title="Scams and Frauds"
        description="Learn to identify and protect yourself from debt collection scams and fraudulent practices."
        className="mt-16"
      />

      {/* Common Scams */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Debt Collection Scams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be aware of these fraudulent practices targeting consumers with debt concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonScams.map((scam, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-red-600">
                    {scam.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{scam.title}</h3>
                    <p className="text-gray-700 mb-3">{scam.description}</p>
                    <div className="bg-red-100 p-3 rounded">
                      <p className="text-sm text-red-800 font-medium">⚠️ {scam.warning}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warning Signs of Debt Collection Scams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be suspicious if a debt collector exhibits any of these behaviors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {redFlags.map((flag, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow border-l-4 border-red-500">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Protect Yourself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps to avoid falling victim to debt collection scams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectionTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do If Scammed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                If You've Been Scammed
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                If you suspect you've been targeted by a debt collection scam or have fallen victim to one, 
                take these immediate steps to protect yourself and report the incident.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stop All Communication</h4>
                    <p className="text-gray-600">Cease contact with the suspected scammer immediately.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Document Everything</h4>
                    <p className="text-gray-600">Gather all records of communications and any payments made.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Report to Authorities</h4>
                    <p className="text-gray-600">File complaints with the FTC, CFPB, and your state attorney general.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitor Your Credit</h4>
                    <p className="text-gray-600">Check your credit reports for any unauthorized accounts or changes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact Your Bank</h4>
                    <p className="text-gray-600">If you provided financial information, alert your bank immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Consumer protection"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where to Report Scams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Report fraudulent debt collection activities to these agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Federal Trade Commission (FTC)"
              description="Report fraud and get recovery assistance"
              className="text-center"
            >
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Website: reportfraud.ftc.gov</p>
                <p className="text-sm text-gray-600">Phone: 1-877-FTC-HELP</p>
              </div>
            </Card>

            <Card
              title="Consumer Financial Protection Bureau"
              description="File complaints about financial services"
              className="text-center"
            >
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Website: consumerfinance.gov</p>
                <p className="text-sm text-gray-600">Phone: 1-855-411-2372</p>
              </div>
            </Card>

            <Card
              title="State Attorney General"
              description="Contact your state's consumer protection office"
              className="text-center"
            >
              <div className="mt-4">
                <p className="text-sm text-gray-600">Search online for your state's AG office contact information</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Immediate Help Available
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            If you're being threatened or harassed by debt collectors, you don't have to handle it alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
            >
              Contact Us for Help
            </a>
            <a
              href="tel:+18645550100"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Call (864) 555-0100
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ScamsAndFrauds;
