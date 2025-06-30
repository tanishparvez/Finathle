
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

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
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
  className = ''
}: HeroSectionProps) => {
  return (
    <section className={`relative py-24 lg:py-40 overflow-hidden ${className}`}>
      {/* Enhanced 3D Background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-pink-900/90">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 hover:scale-110 transition-transform duration-1000"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-bounce float transform-gpu perspective-1000 hover:rotate-12 transition-transform duration-1000" />
          <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse float-delayed transform-gpu hover:-rotate-12 transition-transform duration-1000" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-br from-teal-400/15 to-blue-400/15 rounded-full blur-3xl float transform-gpu hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-2xl float-delayed transform-gpu hover:rotate-45 transition-transform duration-1000" />
          
          {/* 3D Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 transform rotate-45 animate-spin-slow blur-sm" />
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-br from-pink-400/30 to-red-400/30 rounded-full animate-bounce blur-sm" />
          <div className="absolute top-1/2 left-3/4 w-4 h-8 bg-gradient-to-br from-green-400/30 to-teal-400/30 transform -rotate-12 animate-pulse blur-sm" />
        </div>
      </div>

      {/* Enhanced Content with 3D text effects */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {subtitle && (
            <div className="mb-8 animate-fade-in opacity-0">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-blue-200 font-semibold text-lg">{subtitle}</span>
                <Star className="w-4 h-4 text-pink-300 animate-spin-slow" />
              </div>
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-10 animate-fade-in-up opacity-0">
            <div className="relative inline-block transform-gpu">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-delayed hover:scale-105 transition-transform duration-500 cursor-default"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(147,51,234,0.2)'
                  }}
                >
                  {word}
                </span>
              ))}
              {/* 3D text shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 bg-clip-text text-transparent transform translate-x-2 translate-y-2 -z-10 blur-sm">
                {title}
              </div>
            </div>
          </h1>
          
          {description && (
            <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-left opacity-0 font-light">
              <span className="bg-gradient-to-r from-blue-100 via-white to-purple-100 bg-clip-text text-transparent">
                {description}
              </span>
            </p>
          )}
          
          {ctaText && ctaLink && (
            <div className="animate-bounce-in opacity-0 mt-12">
              <Link
                to={ctaLink}
                className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 btn-animated shadow-2xl hover:shadow-3xl relative overflow-hidden"
              >
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                
                {/* 3D button effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/50 to-purple-600/50 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced 3D decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse pulse-glow transform-gpu hover:rotate-45 transition-transform duration-1000" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl float transform-gpu hover:scale-125 transition-transform duration-1000" />
      <div className="absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-xl float-delayed transform-gpu hover:-rotate-45 transition-transform duration-1000" />
      
      {/* Animated 3D grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse transform-gpu hover:scale-x-2 transition-transform duration-1000" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse transform-gpu hover:scale-x-2 transition-transform duration-1000" style={{ animationDelay: '1s' }} />
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse transform-gpu hover:scale-y-2 transition-transform duration-1000" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
