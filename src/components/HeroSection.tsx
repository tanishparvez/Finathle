
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
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop", // Default AI-generated office background
  className = ''
}: HeroSectionProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-purple-900/90">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce float" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse float-delayed" />
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl float" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-400/10 rounded-full blur-xl float-delayed" />
        </div>
      </div>

      {/* Enhanced Content with staggered animations */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {subtitle && (
            <p className="text-blue-200 font-medium text-lg mb-6 animate-fade-in opacity-0">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                {subtitle}
              </span>
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up opacity-0">
            <span className="block">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-4 animate-fade-in-delayed"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-in-left opacity-0">
              {description}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <div className="animate-bounce-in opacity-0">
              <Link
                to={ctaLink}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-animated shadow-lg hover:shadow-2xl"
              >
                <span className="mr-2">{ctaText}</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced decorative elements with animations */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse pulse-glow" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-2xl float" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-lg float-delayed" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
