
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  className = ''
}: HeroSectionProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {subtitle && (
            <p className="text-blue-200 font-medium mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in">
              {description}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <Link
              to={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

export default HeroSection;
