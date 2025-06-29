
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyLinks = [
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Culture', href: '/culture' },
    { label: 'Greenville Headquarters', href: '/greenville-headquarters' },
    { label: 'Cincinnati Location', href: '/cincinnati-location' },
    { label: 'Careers', href: '/careers' },
  ];

  const educationLinks = [
    { label: 'Intro to Debt & Credit', href: '/intro-to-debt-credit' },
    { label: 'Credit Reporting', href: '/credit-reporting' },
    { label: 'Debt Collection', href: '/debt-collection' },
    { label: 'Scams and Frauds', href: '/scams-and-frauds' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-xl">R</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              Resurgent
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50 group">
                <span className="font-medium">Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50 animate-fade-in-up opacity-0">
                  <div className="p-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl font-medium animate-fade-in-delayed"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('education')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50">
                <span className="font-medium">Consumer Education</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'education' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'education' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50 animate-fade-in-up opacity-0">
                  <div className="p-2">
                    {educationLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl font-medium animate-fade-in-delayed"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/faqs"
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50 font-medium ${
                location.pathname === '/faqs' ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact-us"
              className={`text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 py-2 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 btn-animated ${
                location.pathname === '/contact-us' ? 'from-blue-700 to-purple-700 shadow-xl' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200/50 py-4 mt-4 rounded-2xl shadow-xl">
            <div className="space-y-4">
              <div className="animate-fade-in-delayed">
                <h3 className="font-semibold text-gray-900 px-6 py-2 text-lg">Company</h3>
                {companyLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-8 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="animate-fade-in-delayed-2">
                <h3 className="font-semibold text-gray-900 px-6 py-2 text-lg">Consumer Education</h3>
                {educationLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-8 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed"
                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-6 space-y-2 animate-fade-in-delayed-3">
                <Link
                  to="/faqs"
                  className="block py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  to="/contact-us"
                  className="block py-3 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg font-medium text-center transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
