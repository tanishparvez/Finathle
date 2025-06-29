
import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  linkedin?: string;
}

const TeamMember = ({ name, position, image, bio, linkedin }: TeamMemberProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-64 bg-gray-200 overflow-hidden">
        <img 
          src={image || defaultImage} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{position}</p>
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        )}
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
          >
            LinkedIn Profile →
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
