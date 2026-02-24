import React from 'react';
import { MapPin, Star } from './Icon.tsx';
import { Destination } from '../types.ts';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl flex items-center shadow-xl border border-white/20">
          <Star size={16} className="text-accent-500 fill-accent-500 mr-2" />
          <span className="text-sm font-black text-slate-900">{destination.rating}</span>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="bg-primary-500/90 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-lg font-black uppercase tracking-widest shadow-lg">
            Precio {destination.priceRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-secondary-600 mb-3">
          <MapPin size={16} className="mr-2" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{destination.location}</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-3 leading-none tracking-tighter group-hover:text-primary-600 transition-colors">
          {destination.name}
        </h3>

        <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-3 flex-grow font-light">
          {destination.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {destination.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-100 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;