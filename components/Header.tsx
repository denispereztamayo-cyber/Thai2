import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from './Icon.tsx';
import { APP_NAME } from '../constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Cultural Tips', href: '#culture' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary-500 text-white' : 'bg-white text-primary-600'}`}>
              <Compass size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Plan My Trip
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-medium py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary-600 text-white w-full py-3 rounded-lg font-semibold">
              Plan My Trip
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;