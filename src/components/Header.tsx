
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Zap } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-gradient-to-r from-blue-200/30 to-sky-200/30' 
          : 'bg-gradient-to-r from-white/90 via-blue-50/90 to-sky-50/90 backdrop-blur-xl'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-sky-300/10 rounded-full blur-3xl animate-pulse float" />
        <div className="absolute -top-4 right-1/3 w-24 h-24 bg-gradient-to-br from-sky-300/10 to-cyan-300/10 rounded-full blur-2xl animate-bounce float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Finathle Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* 3D Logo Container */}
              <div className="relative w-14 h-14 transform-gpu transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-600 to-teal-500 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-sky-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:-rotate-3 transition-transform duration-500">
                  <Sparkles className="text-white w-7 h-7 animate-pulse" />
                </div>
                {/* 3D depth effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/50 to-sky-600/50 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              {/* Floating particles around logo */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-sky-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-sky-600 group-hover:to-cyan-600 transition-all duration-500 transform group-hover:scale-105">
                Finathle
              </span>
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <Zap className="w-3 h-3 text-yellow-500" />
                <span className="text-xs text-gray-500 font-medium">Financial Solutions</span>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with 3D effects */}
          <nav className="hidden lg:flex space-x-2">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 group transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === 'company' ? 'rotate-180 text-sky-600' : ''}`} />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl border border-gray-100/50 py-3 z-50 transform scale-95 animate-scale-in opacity-0 animate-fade-in">
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                  <div className="p-3">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-sky-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 rounded-2xl font-medium transform hover:scale-105 hover:translate-x-2 animate-fade-in-delayed"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span>{link.label}</span>
                        </div>
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
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Consumer Education</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === 'education' ? 'rotate-180 text-sky-600' : ''}`} />
              </button>
              {activeDropdown === 'education' && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl border border-gray-100/50 py-3 z-50 transform scale-95 animate-scale-in opacity-0 animate-fade-in">
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                  <div className="p-3">
                    {educationLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-sky-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 rounded-2xl font-medium transform hover:scale-105 hover:translate-x-2 animate-fade-in-delayed"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span>{link.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/faqs"
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 font-semibold transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                location.pathname === '/faqs' ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50' : ''
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact-us"
              className={`text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:via-sky-700 hover:to-cyan-700 transition-all duration-500 py-3 px-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 btn-animated relative overflow-hidden ${
                location.pathname === '/contact-us' ? 'from-blue-700 via-sky-700 to-cyan-700 shadow-2xl scale-105' : ''
              }`}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button with 3D effect */}
          <button
            className="lg:hidden p-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu with 3D animations */}
        <div className={`lg:hidden transition-all duration-700 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible transform translate-y-0' 
            : 'max-h-0 opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/50 py-6 mt-4 rounded-3xl shadow-2xl transform-gpu">
            <div className="space-y-6">
              <div className="animate-fade-in-delayed">
                <h3 className="font-bold text-gray-900 px-6 py-2 text-lg bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Company</h3>
                {companyLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-8 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-sky-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed transform hover:translate-x-2 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="animate-fade-in-delayed-2">
                <h3 className="font-bold text-gray-900 px-6 py-2 text-lg bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Consumer Education</h3>
                {educationLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-8 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-sky-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 animate-fade-in-delayed transform hover:translate-x-2 hover:scale-105"
                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-6 space-y-3 animate-fade-in-delayed-3">
                <Link
                  to="/faqs"
                  className="block py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-600 transition-all duration-300 rounded-2xl font-semibold transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  to="/contact-us"
                  className="block py-4 px-4 text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 hover:from-blue-700 hover:via-sky-700 hover:to-cyan-700 transition-all duration-500 rounded-2xl font-semibold text-center transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
