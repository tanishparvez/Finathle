
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import TeamMember from '../components/TeamMember';
import Card from '../components/Card';
import { Target, Eye, Heart, Shield, TrendingUp, Users, Award } from 'lucide-react';

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

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl translate-x-32 translate-y-32" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-16 animate-fade-in-delayed">
              To provide ethical, effective debt collection services while empowering consumers with 
              education and resources to make informed financial decisions. We bridge the gap between 
              creditors and consumers through transparent communication and fair practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-bounce-in opacity-0 hover-lift" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mt-4" />
                </div>
              </div>
              <div className="animate-bounce-in opacity-0 hover-lift" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Team Members</div>
                  <Users className="w-8 h-8 text-blue-500 mx-auto mt-4" />
                </div>
              </div>
              <div className="animate-bounce-in opacity-0 hover-lift" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Satisfied Clients</div>
                  <Award className="w-8 h-8 text-blue-500 mx-auto mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delayed">
              Meet the experienced professionals who guide our company's vision and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up opacity-0 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <TeamMember
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-2xl float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-2xl float-delayed" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delayed">
              The principles that guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="animate-slide-in-left opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  className="text-center h-full bg-gradient-to-br from-white to-blue-50/30"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced History Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="animate-fade-in-delayed">
                  Founded in 1999, Resurgent began as a small debt collection agency with a big vision: 
                  to change the industry's reputation through ethical practices and genuine care for all parties involved.
                </p>
                <p className="animate-fade-in-delayed-2">
                  Over the years, we've grown from a local operation to a nationally recognized leader in 
                  debt collection and consumer education, always maintaining our commitment to integrity and excellence.
                </p>
                <p className="animate-fade-in-delayed-3">
                  Today, we serve hundreds of clients across various industries while continuing to educate 
                  consumers about their financial rights and responsibilities.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right opacity-0">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop"
                  alt="Company history"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
