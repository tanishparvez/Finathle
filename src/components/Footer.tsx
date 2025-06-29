
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">Resurgent</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional debt collection and consumer education services, helping individuals and businesses navigate financial challenges with integrity and expertise.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/who-we-are" className="text-gray-300 hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/culture" className="text-gray-300 hover:text-white transition-colors">Culture</Link></li>
              <li><Link to="/greenville-headquarters" className="text-gray-300 hover:text-white transition-colors">Greenville HQ</Link></li>
              <li><Link to="/cincinnati-location" className="text-gray-300 hover:text-white transition-colors">Cincinnati</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Education Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Consumer Education</h3>
            <ul className="space-y-2">
              <li><Link to="/intro-to-debt-credit" className="text-gray-300 hover:text-white transition-colors">Debt & Credit Basics</Link></li>
              <li><Link to="/credit-reporting" className="text-gray-300 hover:text-white transition-colors">Credit Reporting</Link></li>
              <li><Link to="/debt-collection" className="text-gray-300 hover:text-white transition-colors">Debt Collection</Link></li>
              <li><Link to="/scams-and-frauds" className="text-gray-300 hover:text-white transition-colors">Scams & Frauds</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Business Blvd</p>
              <p>Greenville, SC 29601</p>
              <p className="pt-2">Phone: (864) 555-0100</p>
              <p>Email: info@resurgent.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Resurgent. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/faqs" className="text-gray-400 hover:text-white text-sm transition-colors">FAQs</Link>
            <Link to="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
            <span className="text-gray-400 text-sm">Privacy Policy</span>
            <span className="text-gray-400 text-sm">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
