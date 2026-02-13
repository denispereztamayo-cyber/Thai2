import React from 'react';
import { ArrowRight, Sparkles } from './Icon.tsx';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=99" 
          alt="Thailand Scenery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 animate-fade-in-up">
          <Sparkles size={16} className="text-secondary-500" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Discover the Land of Smiles</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          Experience the Magic <br /> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-400">Thailand</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          From the bustling streets of Bangkok to the serene beaches of Krabi. 
          Let our AI guide help you craft the perfect itinerary tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center group">
            Start Exploring
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
            View Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;