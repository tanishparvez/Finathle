
import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What services does Resurgent provide?',
          answer: 'Resurgent specializes in debt collection services and consumer education. We help businesses recover outstanding debts while providing educational resources to help consumers understand their rights and responsibilities.'
        },
        {
          question: 'How long has Resurgent been in business?',
          answer: 'Resurgent has been operating for over 25 years, building a reputation for ethical practices and effective results in the debt collection industry.'
        },
        {
          question: 'Where are your offices located?',
          answer: 'We have two main locations: our headquarters in Greenville, South Carolina, and a regional office in Cincinnati, Ohio. We also offer remote services to clients nationwide.'
        }
      ]
    },
    {
      title: 'For Consumers',
      faqs: [
        {
          question: 'What are my rights as a consumer?',
          answer: 'Under the Fair Debt Collection Practices Act (FDCPA), you have the right to be treated fairly, request validation of debts, dispute inaccurate information, and be free from harassment or abusive practices.'
        },
        {
          question: 'Can I dispute a debt?',
          answer: 'Yes, you have the right to dispute any debt within 30 days of receiving initial contact. We will provide verification of the debt and pause collection activities until the dispute is resolved.'
        },
        {
          question: 'What if I can\'t afford to pay the full amount?',
          answer: 'We understand financial hardships and offer payment plan options. Contact us to discuss arrangements that work within your budget. We\'re committed to finding solutions that work for everyone.'
        },
        {
          question: 'How will debt collection affect my credit score?',
          answer: 'Collection accounts can impact your credit score. However, paying off or settling debts can help prevent further damage and may improve your score over time. We recommend monitoring your credit report regularly.'
        }
      ]
    },
    {
      title: 'For Clients',
      faqs: [
        {
          question: 'What types of businesses do you work with?',
          answer: 'We work with businesses of all sizes across various industries including healthcare, financial services, telecommunications, utilities, and retail. Our services are customized to meet specific industry needs.'
        },
        {
          question: 'What is your success rate?',
          answer: 'Our success rates vary by industry and debt type, but we consistently achieve above-average recovery rates while maintaining full compliance with all regulations. We provide detailed reporting on all collection activities.'
        },
        {
          question: 'How do you ensure compliance?',
          answer: 'We have a dedicated compliance team that stays current with all federal and state regulations. Our staff receives regular training, and we conduct internal audits to ensure all activities meet or exceed industry standards.'
        },
        {
          question: 'What reporting do you provide?',
          answer: 'We provide comprehensive reporting including account status updates, payment tracking, detailed activity logs, and customizable reports. Clients have access to our online portal for real-time account information.'
        }
      ]
    },
    {
      title: 'Legal & Compliance',
      faqs: [
        {
          question: 'Are you licensed to collect debts?',
          answer: 'Yes, we are fully licensed in all states where we operate and maintain all required bonds and certifications. We are members of professional associations and adhere to industry best practices.'
        },
        {
          question: 'What laws govern debt collection?',
          answer: 'Debt collection is governed by federal laws like the FDCPA and FCRA, as well as state-specific regulations. We ensure full compliance with all applicable laws and regulations.'
        },
        {
          question: 'How do you handle consumer complaints?',
          answer: 'We take all consumer complaints seriously and have established procedures for prompt investigation and resolution. Consumers can contact us directly or through regulatory agencies.'
        }
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, consumer rights, and debt collection processes."
        className="mt-16"
      />

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors"
                          onClick={() => toggleItem(itemIndex)}
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+18645550100"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call (864) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
