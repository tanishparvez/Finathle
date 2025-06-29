
import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ 
  title, 
  description, 
  image, 
  icon, 
  children, 
  className = '',
  hover = true 
}: CardProps) => {
  return (
    <div className={`
      group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
      ${hover ? 'card-hover hover-glow cursor-pointer' : ''}
      ${className}
    `}>
      {/* Gradient overlay for enhanced visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="h-full w-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
            style={{ backgroundImage: `url(${image})` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="relative p-6 z-10">
        {icon && (
          <div className="mb-4 text-blue-600 transform group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300">
            <div className="inline-block p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:shadow-lg transition-all duration-300">
              {icon}
            </div>
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        )}
        
        {children}
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default Card;
