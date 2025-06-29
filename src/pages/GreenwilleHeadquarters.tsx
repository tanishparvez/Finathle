
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
        className="mt-16"
      />

      {/* Location Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">
                        123 Business Boulevard<br />
                        Greenville, SC 29601
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(864) 555-0100</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">greenville@resurgent.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
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

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About Our Greenville Office
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Greenville headquarters serves as the heart of our operations, housing our executive team, 
                  customer service department, and compliance division. This modern facility reflects our commitment 
                  to providing a professional and comfortable environment for both our employees and visiting clients.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    123 Business Boulevard, Greenville, SC 29601
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Office Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our Greenville headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                alt="Reception area"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Reception Area</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Open workspace"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Open Workspace</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"
                alt="Conference room"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Conference Room</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
                alt="Break room"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Break Room</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop"
                alt="Executive offices"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Executive Offices</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop"
                alt="Training room"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Training Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Greenville?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Greenville, South Carolina, offers the perfect blend of business opportunities and quality of life. 
                Known for its thriving downtown, excellent schools, and proximity to the Blue Ridge Mountains, 
                it's an ideal location for our headquarters.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Growing business community</li>
                <li>• Excellent transportation infrastructure</li>
                <li>• High quality of life for employees</li>
                <li>• Access to top talent from local universities</li>
                <li>• Beautiful natural surroundings</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Greenville cityscape"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenwilleHeadquarters;
