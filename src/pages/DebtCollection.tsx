
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Clock, FileText, Phone, Shield } from 'lucide-react';

const DebtCollection = () => {
  const collectionProcess = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'First communication about the debt, including validation notice with your rights.',
      timeframe: 'Within 5 days'
    },
    {
      step: 2,
      title: 'Validation Period',
      description: 'You have 30 days to dispute the debt or request validation.',
      timeframe: '30 days from initial contact'
    },
    {
      step: 3,
      title: 'Active Collection',
      description: 'Ongoing collection efforts through calls, letters, and payment arrangements.',
      timeframe: 'Varies by situation'
    },
    {
      step: 4,
      title: 'Resolution',
      description: 'Debt is paid in full, settled, or other resolution is reached.',
      timeframe: 'Based on agreement'
    }
  ];

  const yourRights = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fair Treatment',
      description: 'Collectors must treat you fairly and cannot use abusive or deceptive practices.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Debt Validation',
      description: 'You can request proof that the debt is yours and the amount is correct.'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Communication Control',
      description: 'You can request collectors stop calling you or only contact you in writing.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Limits',
      description: 'Collectors can only call during reasonable hours and must respect your schedule.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Consumer Education"
        title="Understanding Debt Collection"
        description="Learn about the debt collection process, your rights as a consumer, and how to navigate collection situations effectively."
        className="mt-16"
      />

      {/* Collection Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Collection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding each step of the debt collection process helps you know what to expect and how to respond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {collectionProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      Timeframe: {step.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Rights Under the FDCPA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The Fair Debt Collection Practices Act protects consumers from abusive debt collection practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yourRights.map((right, index) => (
              <Card
                key={index}
                icon={right.icon}
                title={right.title}
                description={right.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Collectors Cannot Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Debt Collectors Cannot Do
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Debt collectors must follow specific rules when attempting to collect debts. 
                Here are some prohibited practices:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Call before 8 AM or after 9 PM</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Use abusive, profane, or threatening language</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Contact you at work if prohibited by employer</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Discuss your debt with third parties</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Threaten actions they don't intend to take</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Misrepresent the amount you owe</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Continue contacting you after written cease request</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                alt="Consumer rights protection"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dealing with Collectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Handle Collection Calls
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tips for productive communication with debt collectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Calm</h3>
              <p className="text-gray-600">
                Keep your emotions in check and maintain a professional tone throughout the conversation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Take Notes</h3>
              <p className="text-gray-600">
                Record the date, time, name of caller, and details of what was discussed during each call.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Verify the Debt</h3>
              <p className="text-gray-600">
                Ask for written validation if you don't recognize the debt or believe the amount is incorrect.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Know Your Options</h3>
              <p className="text-gray-600">
                Understand that you can arrange payment plans, settle for less, or dispute the debt if appropriate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Get Agreements in Writing</h3>
              <p className="text-gray-600">
                Any payment arrangements or settlements should be documented in writing before you pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Report Violations</h3>
              <p className="text-gray-600">
                File complaints with the CFPB, FTC, or your state attorney general if collectors violate the law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resources available if you're experiencing collection issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumer Financial Protection Bureau</h3>
              <p className="text-gray-600 text-sm">File complaints online at consumerfinance.gov</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State Attorney General</h3>
              <p className="text-gray-600 text-sm">Contact your state's consumer protection office</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Aid</h3>
              <p className="text-gray-600 text-sm">Find free or low-cost legal assistance in your area</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DebtCollection;
