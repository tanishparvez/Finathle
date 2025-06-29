
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50K+', label: 'Accounts Managed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Debt Collection Services',
      description: 'Professional and ethical debt recovery solutions for businesses of all sizes.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consumer Education',
      description: 'Comprehensive resources to help consumers understand their rights and options.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Compliance Expertise',
      description: 'Full FDCPA, FCRA, and state regulation compliance in all our operations.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Recovery Solutions',
      description: 'Innovative approaches to maximize recovery while maintaining positive relationships.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Professional Debt Collection & Consumer Education"
        title="Building Financial Bridges with Integrity"
        description="We help businesses recover outstanding debts while educating consumers about their financial rights and responsibilities."
        ctaText="Learn About Our Services"
        ctaLink="/who-we-are"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop"
        className="mt-16"
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for debt collection and consumer education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Resurgent?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 years of experience in the debt collection industry, we've built our reputation on ethical practices, innovative solutions, and exceptional results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">FDCPA and FCRA compliant operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Experienced team of collection professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Industry-leading recovery rates</span>
                </li>
              </ul>
              <Link
                to="/who-we-are"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Professional team meeting"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 rounded-lg opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can help with your debt collection needs or find educational resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/intro-to-debt-credit"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Educational Resources
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
