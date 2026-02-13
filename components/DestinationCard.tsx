import React from 'react';
import { MapPin, Star } from './Icon.tsx';
import { Destination } from '../types.ts';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-md">
          <Star size={14} className="text-secondary-500 fill-secondary-500 mr-1" />
          <span className="text-xs font-bold text-slate-800">{destination.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4">
            <span className="bg-slate-900/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium tracking-wide">
                {destination.priceRange} Price
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-primary-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-xs font-semibold uppercase tracking-wider">{destination.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary-600 transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {destination.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {destination.tags.map(tag => (
            <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;