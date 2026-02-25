import React, { useState, useEffect } from 'react';
import { Menu, X } from './Icon.tsx';
import QuoteModal from './QuoteModal.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className={`transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-20 h-20'} overflow-hidden rounded-xl shadow-lg group-hover:scale-110 flex items-center justify-center bg-white/5`}>
                <img src="/logotailand.png" alt="Tailandia Travel Logo" className="w-full h-full object-contain" />
              </div>
              <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                TAILANDIA<span className="text-primary-500">TRAVEL</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary-500 relative group ${isScrolled ? 'text-slate-600' : 'text-white'
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-primary-500/40 transform hover:-translate-y-1"
              >
                Planear Viaje
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
              <button
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary-600 text-white w-full py-3 rounded-lg font-semibold"
              >
                Planear Viaje
              </button>
            </nav>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default Header;