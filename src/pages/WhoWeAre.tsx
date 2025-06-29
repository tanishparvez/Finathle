
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import TeamMember from '../components/TeamMember';
import Card from '../components/Card';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const WhoWeAre = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: 'With over 20 years in financial services, Sarah leads our company with a focus on ethical practices and innovation.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      bio: 'Michael oversees our day-to-day operations, ensuring compliance and efficiency across all departments.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Amanda Rodriguez',
      position: 'Chief Compliance Officer',
      bio: 'Amanda ensures all our operations meet and exceed industry regulations and ethical standards.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      position: 'Chief Technology Officer',
      bio: 'David leads our technology initiatives, implementing cutting-edge solutions for better client service.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We conduct all business with the highest ethical standards and transparency.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We treat all individuals with respect and understanding, recognizing their unique circumstances.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for exceptional results while maintaining the highest quality standards.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We believe in clear communication and honest relationships with all stakeholders.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="About Resurgent"
        title="Who We Are"
        description="A leading debt collection and consumer education company built on integrity, innovation, and results."
        className="mt-16"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              To provide ethical, effective debt collection services while empowering consumers with 
              education and resources to make informed financial decisions. We bridge the gap between 
              creditors and consumers through transparent communication and fair practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's vision and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 1999, Resurgent began as a small debt collection agency with a big vision: 
                  to change the industry's reputation through ethical practices and genuine care for all parties involved.
                </p>
                <p>
                  Over the years, we've grown from a local operation to a nationally recognized leader in 
                  debt collection and consumer education, always maintaining our commitment to integrity and excellence.
                </p>
                <p>
                  Today, we serve hundreds of clients across various industries while continuing to educate 
                  consumers about their financial rights and responsibilities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop"
                alt="Company history"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
