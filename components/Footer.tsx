import React from 'react';
import { Compass } from './Icon.tsx';
import { APP_NAME } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Compass size={24} />
              <span className="text-xl font-bold">{APP_NAME}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your intelligent guide to the Land of Smiles. Discover hidden gems and plan your perfect trip with AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Experiences</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Hotels</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Flights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">Get the latest travel tips and hidden gem alerts.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l-lg w-full text-sm border border-slate-700 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-r-lg text-sm font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved. Built with React & Gemini AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;