
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
      bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
      ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
      ${className}
    `}>
      {image && (
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      )}
      
      <div className="p-6">
        {icon && (
          <div className="mb-4 text-blue-600">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default Card;
