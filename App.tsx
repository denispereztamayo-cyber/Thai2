
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
        <section id="destinations" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-primary-500 font-black tracking-[0.3em] uppercase text-[10px]">Selección Exclusiva</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 tracking-tighter">Destinos Imperdibles</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">Explora nuestra selección curada de los rincones más impresionantes de Tailandia, desde templos milenarios hasta islas vírgenes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {DESTINATIONS.map(dest => (
                <div key={dest.id} className="h-full transform hover:-translate-y-2 transition-transform duration-500">
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-4 bg-primary-500/10 rounded-[2rem] blur-2xl group-hover:bg-primary-500/20 transition-all"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1000&q=80"
                    alt="Cultura Tailandesa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                    <div className="text-white">
                      <p className="font-black text-2xl tracking-tight">Tradición Viva</p>
                      <p className="text-sm opacity-80 font-light mt-2">Sumérgete en la esencia de Siam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-accent-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Inmersión Cultural</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Abraza el Estilo <br /> de Vida Thai</h2>
                <div className="space-y-10">
                  <div className="flex group">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 font-black text-xl group-hover:bg-primary-600 group-hover:text-white transition-all shadow-lg">1</div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">Respeto en los Templos</h4>
                      <p className="text-slate-500 mt-2 font-light leading-relaxed">Viste con modestia, cubriendo hombros y rodillas al visitar lugares sagrados.</p>
                    </div>
                  </div>
                  <div className="flex group">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-secondary-100 flex items-center justify-center text-secondary-600 font-black text-xl group-hover:bg-secondary-600 group-hover:text-white transition-all shadow-lg">2</div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-secondary-600 transition-colors">El Saludo 'Wai'</h4>
                      <p className="text-slate-500 mt-2 font-light leading-relaxed">Aprende el gesto tradicional 'Wai' para saludar a los locales con respeto.</p>
                    </div>
                  </div>
                  <div className="flex group">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-accent-100 flex items-center justify-center text-accent-600 font-black text-xl group-hover:bg-accent-600 group-hover:text-white transition-all shadow-lg">3</div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-accent-600 transition-colors">Delicias Callejeras</h4>
                      <p className="text-slate-500 mt-2 font-light leading-relaxed">Explora los mercados de comida; busca puestos con gran rotación e ingredientes frescos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Voces de Viajeros</h2>
              <div className="w-24 h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {REVIEWS.map(review => (
                <div key={review.id} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-shadow duration-500 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < review.rating ? "text-accent-500 fill-accent-500" : "text-slate-200"}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-10 text-lg font-light leading-relaxed line-clamp-4">"{review.comment}"</p>
                  </div>
                  <div className="flex items-center border-t border-slate-50 pt-8">
                    <img
                      src={review.avatarUrl}
                      alt={review.author}
                      className="w-14 h-14 rounded-2xl object-cover mr-4 ring-4 ring-slate-50 shadow-md"
                    />
                    <div>
                      <p className="font-black text-slate-900 text-sm tracking-tight">{review.author}</p>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="py-32 bg-slate-950 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-6 py-2 rounded-full mb-8">
                <Sparkles size={18} className="text-primary-400" />
                <span className="text-primary-300 text-[10px] font-black uppercase tracking-[0.4em]">Experiencia Atmósferica</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Siente el Flujo de Tailandia</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                Sumérgete en la energía vibrante y la belleza serena que hace que cada momento en Tailandia sea inolvidable.
              </p>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 aspect-video max-w-6xl mx-auto group">
              <video
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                src="https://cdn.pixabay.com/video/2016/09/21/5523-183786520_medium.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none transition-opacity group-hover:opacity-40"></div>
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
