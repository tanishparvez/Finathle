import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const GreenwilleHeadquarters = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Our Headquarters"
        title="Greenville, South Carolina"
        description="Visit our main office located in the heart of beautiful Greenville, SC."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
        className="mt-16"
      />

      {/* Location Info with 3D background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
        {/* Animated 3D background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-sky-200/20 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-sky-200/20 to-cyan-200/20 rounded-full blur-2xl float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-xl float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-100/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-sky-700 bg-clip-text text-transparent mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 transition-all duration-300 transform hover:scale-105">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">
                        123 Business Boulevard<br />
                        Greenville, SC 29601
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 hover:from-sky-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-105">
                    <div className="p-2 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(864) 555-0100</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 transform hover:scale-105">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">greenville@finathle.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 transition-all duration-300 transform hover:scale-105">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Business Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-sky-100/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 animate-fade-in-delayed">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-800 to-cyan-700 bg-clip-text text-transparent mb-4">
                  About Our Greenville Office
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Greenville headquarters serves as the heart of our operations, housing our executive team, 
                  customer service department, and compliance division. This modern facility reflects our commitment 
                  to providing a professional and comfortable environment for both our employees and visiting clients.
                </p>
              </div>
            </div>

            {/* Enhanced Map Placeholder with 3D effects */}
            <div className="animate-fade-in-delayed">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-cyan-100/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <div className="h-96 bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 flex items-center justify-center relative overflow-hidden">
                  {/* Floating 3D elements in map */}
                  <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-300/30 to-sky-300/30 rounded-full blur-xl float" />
                  <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-sky-300/30 to-cyan-300/30 rounded-full blur-lg float-delayed" />
                  
                  <div className="text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl shadow-xl mb-4 inline-block transform hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">Interactive Map</p>
                    <p className="text-sm text-gray-600">
                      123 Business Boulevard, Greenville, SC 29601
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery with enhanced 3D effects */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-sky-50/50 relative overflow-hidden">
        {/* 3D background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-br from-blue-200/15 to-sky-200/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-br from-sky-200/15 to-cyan-200/15 rounded-full blur-2xl animate-bounce" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-sky-700 to-cyan-600 bg-clip-text text-transparent mb-4">
              Office Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our Greenville headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ... keep existing code (gallery images with enhanced 3D hover effects) */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-blue-100/50">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                alt="Reception area"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Reception Area</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-sky-100/50">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Open workspace"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Open Workspace</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-cyan-100/50">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"
                alt="Conference room"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Conference Room</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-blue-100/50">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
                alt="Break room"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Break Room</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-sky-100/50">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop"
                alt="Executive offices"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Executive Offices</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group card-hover bg-white/80 backdrop-blur-xl border border-cyan-100/50">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop"
                alt="Training room"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Training Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area with enhanced 3D styling */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
        {/* 3D background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-to-br from-blue-200/20 to-sky-200/20 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-sky-200/20 to-cyan-200/20 rounded-full blur-2xl float-delayed" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-100/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-sky-700 bg-clip-text text-transparent mb-6">
                  Why Greenville?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Greenville, South Carolina, offers the perfect blend of business opportunities and quality of life. 
                  Known for its thriving downtown, excellent schools, and proximity to the Blue Ridge Mountains, 
                  it's an ideal location for our headquarters.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3 p-2 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
                    <span>Growing business community</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-xl hover:bg-sky-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
                    <span>Excellent transportation infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-xl hover:bg-cyan-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span>High quality of life for employees</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full"></div>
                    <span>Access to top talent from local universities</span>
                  </li>
                  <li className="flex items-center space-x-3 p-2 rounded-xl hover:bg-sky-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
                    <span>Beautiful natural surroundings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                  alt="Greenville cityscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-sky-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenwilleHeadquarters;
