
import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
  linkedin?: string;
}

const TeamMember = ({ name, title, imageUrl, bio, linkedin }: TeamMemberProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
  
  return (
    <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 card-hover">
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
        <img 
          src={imageUrl || defaultImage} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-8 left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-45 blur-xl" />
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{name}</h3>
        <p className="text-blue-600 font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">{title}</p>
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{bio}</p>
        )}
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-purple-600 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            LinkedIn Profile →
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
