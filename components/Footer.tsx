import React from 'react';
import { Compass } from './Icon.tsx';
import { APP_NAME } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 text-white mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 flex items-center justify-center p-1">
                <img src="/logotailand.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter">TAILANDIA<span className="text-primary-500">TRAVEL</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Tu portal inteligente a la Tierra de las Sonrisas. Descubre tesoros ocultos y planifica tu viaje perfecto con nuestra IA experta.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explora</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#destinations" className="hover:text-primary-400 transition-colors">Destinos</a></li>
              <li><a href="#culture" className="hover:text-primary-400 transition-colors">Experiencias</a></li>
              <li><a href="#reviews" className="hover:text-primary-400 transition-colors">Opiniones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Soporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Términos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Recibe consejos de viaje y alertas de lugares secretos.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-slate-800 text-white px-4 py-3 rounded-l-xl w-full text-sm border border-slate-700 focus:outline-none focus:border-primary-500 transition-all font-light"
              />
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-3 rounded-r-xl text-sm font-bold transition-all shadow-lg shadow-primary-500/20">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados. Impulsado por IA de Gemini.
        </div>
      </div>
    </footer>
  );
};

export default Footer;