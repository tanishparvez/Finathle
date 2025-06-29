
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Resurgent</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border py-2 z-50">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('education')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Consumer Education</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'education' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border py-2 z-50">
                  {educationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/faqs"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/faqs' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact-us"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/contact-us' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 px-4 py-2">Company</h3>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 px-4 py-2">Consumer Education</h3>
                {educationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/faqs"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/contact-us"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
