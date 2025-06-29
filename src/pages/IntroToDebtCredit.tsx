
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { CreditCard, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

const IntroToDebtCredit = () => {
  const topics = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Understanding Credit',
      description: 'Learn the basics of credit scores, credit reports, and how credit affects your financial life.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Building Good Credit',
      description: 'Discover strategies to establish and improve your credit score over time.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Managing Debt',
      description: 'Learn effective methods for managing and reducing your debt burden.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Financial Planning',
      description: 'Create a solid foundation for your financial future with proper planning.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Consumer Education"
        title="Introduction to Debt & Credit"
        description="Essential knowledge to help you make informed financial decisions and build a stronger financial future."
        className="mt-16"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Financial Literacy Fundamentals
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
              Understanding debt and credit is crucial for financial success. This guide provides you 
              with the knowledge and tools needed to make informed decisions about your financial future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topics.map((topic, index) => (
                <Card
                  key={index}
                  icon={topic.icon}
                  title={topic.title}
                  description={topic.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credit Basics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Credit?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Credit is your ability to borrow money or access goods/services with the understanding 
                  that you'll pay later. Your creditworthiness is measured by your credit score, which 
                  ranges from 300 to 850.
                </p>
                <p>
                  A higher credit score indicates lower risk to lenders, which can result in better 
                  interest rates and loan terms. Understanding how credit works is the first step 
                  toward financial health.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Credit Score Ranges:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>Poor: 300-579</span>
                    <span className="text-red-600 font-medium">Needs Improvement</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span>Fair: 580-669</span>
                    <span className="text-yellow-600 font-medium">Below Average</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>Good: 670-739</span>
                    <span className="text-blue-600 font-medium">Good</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Excellent: 740-850</span>
                    <span className="text-green-600 font-medium">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                alt="Credit and financial planning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Debt Management */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Effective Debt Management Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn proven methods to manage and reduce your debt burden while building financial stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Debt Snowball Method</h3>
              <p className="text-gray-600 mb-4">
                Pay minimum amounts on all debts, then put extra money toward the smallest debt first.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quick psychological wins</li>
                <li>• Builds momentum</li>
                <li>• Simplifies debt management</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Debt Avalanche Method</h3>
              <p className="text-gray-600 mb-4">
                Pay minimums on all debts, then focus extra payments on highest interest rate debt.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Saves more money long-term</li>
                <li>• Mathematically optimal</li>
                <li>• Reduces total interest paid</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Debt Consolidation</h3>
              <p className="text-gray-600 mb-4">
                Combine multiple debts into a single payment, potentially with a lower interest rate.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Simplifies payments</li>
                <li>• May lower interest rates</li>
                <li>• Easier to track progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Top 10 Credit and Debt Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Pay all bills on time, every time',
                'Keep credit utilization below 30%',
                'Don\'t close old credit accounts',
                'Monitor your credit report regularly',
                'Only apply for credit when necessary',
                'Create and stick to a budget',
                'Build an emergency fund',
                'Pay more than minimum payments',
                'Avoid taking cash advances',
                'Seek help before problems escalate'
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore more educational content to deepen your financial knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Credit Reports</h3>
              <p className="text-gray-600">Get your free annual credit report from authorized sources.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Budgeting Tools</h3>
              <p className="text-gray-600">Use free online calculators and budgeting apps to track spending.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Credit Counseling</h3>
              <p className="text-gray-600">Find non-profit credit counseling services in your area.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IntroToDebtCredit;
