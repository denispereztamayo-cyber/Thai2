
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import DestinationCard from './components/DestinationCard.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import LiveVoiceCall from './components/LiveVoiceCall.tsx';
import Footer from './components/Footer.tsx';
import { DESTINATIONS, REVIEWS } from './constants.ts';
import { Star, Sparkles } from './components/Icon.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Live Experience Section - NEW */}
        <LiveVoiceCall />

        {/* Featured Destinations */}
        <section id="destinations" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Curated Selection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Top Rated Destinations</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Explore our hand-picked selection of the most breathtaking spots in Thailand, from ancient ruins to pristine islands.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESTINATIONS.map(dest => (
                <div key={dest.id} className="h-full">
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/800/800?random=20"
                  alt="Thai Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">Floating Market</p>
                    <p className="text-sm opacity-90">Experience local life on the water</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-secondary-500 font-bold text-sm uppercase tracking-wider mb-2 block">Cultural Immersion</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Embrace the Thai Way of Life</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">1</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Respect the Temples</h4>
                      <p className="text-slate-600 mt-1">Dress modestly covering shoulders and knees when visiting sacred sites.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">2</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">The Wai Greeting</h4>
                      <p className="text-slate-600 mt-1">Learn the traditional 'Wai' gesture to greet locals respectfully.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">3</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Street Food Etiquette</h4>
                      <p className="text-slate-600 mt-1">Don't be afraid to eat street food, but look for stalls with high turnover and fresh ingredients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Traveler Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map(review => (
                <div key={review.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "text-secondary-500 fill-secondary-500" : "text-slate-300"}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{review.comment}"</p>
                  <div className="flex items-center">
                    <img
                      src={review.avatarUrl}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                      <p className="text-xs text-slate-400">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="py-20 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-4">
                <Sparkles size={16} className="text-primary-400" />
                <span className="text-primary-300 text-xs font-bold uppercase tracking-widest">Atmospheric Journey</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Feel the Flow of Thailand</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                Immerse yourself in the vibrant energy and serene beauty that makes every moment in Thailand unforgettable.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-video max-w-5xl mx-auto">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="https://cdn.pixabay.com/video/2016/09/21/5523-183786520_medium.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* AI Chat Widget - Sticky */}
      <ChatWidget />
    </div>
  );
};

export default App;
