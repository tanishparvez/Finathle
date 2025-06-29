
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Users, Coffee, Award, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const Culture = () => {
  const culturalValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe great things happen when talented people work together towards common goals.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas that improve our services and processes.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'We support our team members in maintaining a healthy balance between professional and personal life.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth',
      description: 'We invest in our people through continuous learning and career development opportunities.'
    }
  ];

  const benefits = [
    'Comprehensive health insurance',
    'Retirement savings plan with company match',
    'Flexible work arrangements',
    'Professional development budget',
    'Wellness programs',
    'Team building activities',
    'Performance bonuses',
    'Paid time off and holidays'
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      position: 'Senior Account Manager',
      quote: 'Working at Resurgent has been incredibly rewarding. The company truly cares about its employees and provides excellent opportunities for growth.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Robert Kim',
      position: 'Collections Specialist',
      quote: 'The supportive culture here makes all the difference. Management is approachable, and there\'s a real sense of teamwork.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      position: 'Compliance Analyst',
      quote: 'I appreciate how the company maintains high ethical standards while still achieving great results. It\'s a place I\'m proud to work.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Company Culture"
        title="Where Great People Thrive"
        description="Discover what makes Resurgent a great place to work and grow your career."
        className="mt-16"
      />

      {/* Culture Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built a workplace where integrity, innovation, and collaboration drive everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalValues.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Office Life */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Life at Resurgent
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our offices are designed to foster collaboration and creativity. From open workspaces 
                to quiet zones for focused work, we've created an environment where everyone can do their best work.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4 text-blue-600" />
                  <span>Premium coffee bar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Collaborative spaces</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Recognition programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-blue-600" />
                  <span>Wellness initiatives</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
                alt="Office space"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
                alt="Modern workspace"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive benefits designed to support your health, wealth, and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our employees about their experience working at Resurgent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
