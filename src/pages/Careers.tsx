
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Careers = () => {
  const jobListings = [
    {
      title: 'Senior Collections Specialist',
      department: 'Collections',
      location: 'Greenville, SC',
      type: 'Full-time',
      salary: '$45,000 - $55,000',
      description: 'Lead collection efforts on complex accounts while mentoring junior staff members.'
    },
    {
      title: 'Compliance Analyst',
      department: 'Compliance',
      location: 'Cincinnati, OH',
      type: 'Full-time',
      salary: '$50,000 - $60,000',
      description: 'Ensure all operations meet regulatory requirements and industry best practices.'
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Service',
      location: 'Greenville, SC',
      type: 'Full-time',
      salary: '$35,000 - $42,000',
      description: 'Provide exceptional service to consumers and assist with payment arrangements.'
    },
    {
      title: 'Data Analyst',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      salary: '$55,000 - $65,000',
      description: 'Analyze collection data and create reports to improve operational efficiency.'
    },
    {
      title: 'Account Manager',
      department: 'Client Services',
      location: 'Cincinnati, OH',
      type: 'Full-time',
      salary: '$48,000 - $58,000',
      description: 'Manage client relationships and ensure satisfaction with our services.'
    },
    {
      title: 'Junior Collections Specialist',
      department: 'Collections',
      location: 'Greenville, SC',
      type: 'Full-time',
      salary: '$32,000 - $38,000',
      description: 'Entry-level position with comprehensive training and growth opportunities.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries with performance-based bonuses and regular reviews.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision insurance, retirement plans, and paid time off.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your personal life.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Growth Opportunities',
      description: 'Clear career advancement paths with professional development support.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="Join Our Team"
        title="Build Your Career with Resurgent"
        description="Discover exciting opportunities to grow your career in a supportive, ethical, and dynamic environment."
        ctaText="View Open Positions"
        ctaLink="#jobs"
        className="mt-16"
      />

      {/* Why Work Here */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Resurgent?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to creating an environment where talented individuals can thrive and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for your skills and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined hiring process is designed to help us get to know you and find the perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application and resume through our online portal.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600">Our HR team reviews your qualifications and experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Meet with our team to discuss your skills and career goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Our Team</h3>
              <p className="text-gray-600">Start your new career with comprehensive onboarding and training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Submit General Application
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
