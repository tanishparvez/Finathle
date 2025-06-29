import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import TeamMember from '../components/TeamMember';
import { Shield, Heart, Award, Users, Target, TrendingUp } from 'lucide-react';

const WhoWeAre = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our interactions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Empathy',
      description: 'We understand and respect the challenges faced by both businesses and consumers.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, delivering exceptional results.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We foster a collaborative environment, working together to achieve common goals.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace innovation, continuously seeking new and better ways to serve our clients.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth',
      description: 'We are committed to the growth and development of our employees and our company.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50K+', label: 'Accounts Managed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&face=center',
      bio: 'Experienced leader with a passion for ethical debt collection practices.'
    },
    {
      name: 'Alice Johnson',
      title: 'Director of Operations',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d674x?w=200&h=200&fit=crop&face=center',
      bio: 'Oversees daily operations and ensures compliance with industry regulations.'
    },
    {
      name: 'Bob Williams',
      title: 'Consumer Education Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&face=center',
      bio: 'Dedicated to educating consumers about their financial rights and responsibilities.'
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="About Resurgent"
        title="Building Financial Bridges with Integrity"
        description="For over 25 years, we've been committed to ethical debt collection practices while helping consumers understand their financial rights and responsibilities."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
        className="mt-16"
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-teal-50/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide ethical and effective debt collection services while empowering consumers with the knowledge and resources they need to achieve financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gray-50/90"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our impact and achievements at a glance
            </p>
          </div>

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

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gray-50/95"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
