import React from 'react';
import { ArrowRight, Sparkles } from './Icon.tsx';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Tailandia.jpg"
          alt="Tailandia Travel - Paisaje Majestuoso"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-primary-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 animate-fade-in-up">
          <Sparkles size={16} className="text-secondary-400" />
          <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">Explora la Tierra de las Sonrisas</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter drop-shadow-2xl">
          Vive la Magia <br /> de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-400">Tailandia</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Desde los templos dorados de Bangkok hasta las playas cristalinas de Krabi.
          Nuestra IA experta diseña el viaje de tus sueños a medida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl hover:shadow-primary-500/40 flex items-center justify-center group transform hover:scale-105">
            Empezar Aventura
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-xl transition-all hover:border-white/60">
            Ver Destinos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;