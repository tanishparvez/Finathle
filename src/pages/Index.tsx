
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Shield, Users, Award, TrendingUp, Sparkles, Zap, Star } from 'lucide-react';

const Index = () => {
  const stats = [
    { number: '25+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '50K+', label: 'Accounts Managed', icon: <Users className="w-6 h-6" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Zap className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Debt Collection Services',
      description: 'Professional and ethical debt recovery solutions for businesses of all sizes with cutting-edge technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consumer Education',
      description: 'Comprehensive resources to help consumers understand their rights and financial options with expert guidance.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Compliance Expertise',
      description: 'Full FDCPA, FCRA, and state regulation compliance in all our operations with industry-leading standards.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Recovery Solutions',
      description: 'Innovative approaches to maximize recovery while maintaining positive relationships and trust.'
    }
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with 3D elements */}
      <HeroSection
        subtitle="Professional Financial Solutions & Consumer Education"
        title="Building Financial Futures with Innovation"
        description="We help businesses recover outstanding debts while educating consumers about their financial rights and responsibilities through cutting-edge technology and ethical practices."
        ctaText="Discover Our Solutions"
        ctaLink="/who-we-are"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop"
        className="mt-20"
      />

      {/* Enhanced Stats Section with 3D cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse float" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-bounce float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-blue-800 font-semibold">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 gradient-text">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 card-hover animate-fade-in-delayed"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white group-hover:rotate-12 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with 3D effects */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-bounce float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-purple-600 animate-spin-slow" />
              <span className="text-purple-800 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 gradient-text">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions for debt collection and consumer education with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-delayed hover-3d"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  hover={true}
                  className="h-full bg-gradient-to-br from-white to-blue-50/30 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-200 hover:to-purple-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section with parallax 3D effects */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 transform scale-105 hover:scale-110 transition-transform duration-1000"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-white/95 to-purple-50/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-6">
                <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
                <span className="text-blue-800 font-semibold">Why Choose Finathle?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 gradient-text">
                Innovation Meets Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 25 years of experience in the financial industry, we've built our reputation on ethical practices, innovative solutions, and exceptional results that transform businesses.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start space-x-4 group">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:rotate-12 transition-transform duration-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">FDCPA and FCRA compliant operations with cutting-edge security</span>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white group-hover:rotate-12 transition-transform duration-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">Experienced team of collection professionals with AI-powered insights</span>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="p-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl text-white group-hover:rotate-12 transition-transform duration-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">Industry-leading recovery rates with innovative technology solutions</span>
                </li>
              </ul>
              <Link
                to="/who-we-are"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <span>Learn More About Us</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </Link>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative transform-gpu perspective-1000">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Professional team meeting"
                  className="rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-700"
                />
                {/* 3D floating elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-70 animate-pulse float" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-60 animate-bounce float-delayed" />
                <div className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400/40 to-blue-400/40 rounded-full blur-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with 3D parallax */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110 hover:scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-pink-900/90"></div>
        </div>
        
        {/* 3D floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse float" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-bounce float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl animate-wiggle" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
              <Star className="w-5 h-5 text-yellow-300 animate-spin-slow" />
              <span className="text-blue-200 font-semibold text-lg">Ready to Transform Your Business?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 animate-fade-in-up text-3d">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Start Your Journey Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-slide-in-left">
              Contact us today to learn how we can help with your debt collection needs or find comprehensive educational resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in">
              <Link
                to="/contact-us"
                className="group inline-flex items-center space-x-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl"
              >
                <span>Contact Us Today</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
              </Link>
              <Link
                to="/intro-to-debt-credit"
                className="group inline-flex items-center space-x-3 px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl"
              >
                <span>Educational Resources</span>
                <Sparkles className="w-5 h-5 group-hover:animate-pulse transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
