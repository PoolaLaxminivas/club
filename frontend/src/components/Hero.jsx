import React, { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { clubInfo } from '../mock';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black pt-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.14]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
        backgroundSize: '100% 100%'
      }}></div>

      <div className="relative max-w-screen-2xl mx-auto px-[7.6923%] py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.62px' }}>
                {clubInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-white/85 font-medium">
                {clubInfo.tagline}
              </p>
            </div>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Join a community of passionate developers, innovators, and tech enthusiasts. Build, learn, and create the future together.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('join')}
                className="group bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all flex items-center gap-3 min-h-14"
              >
                Join Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="group bg-white/10 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3 min-h-14"
              >
                Our Events
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            {/* Floating Code Snippets Animation */}
            <div className="hidden lg:block space-y-3 mt-12 opacity-40">
              <div className="text-[#00FFD1] font-mono text-sm animate-pulse">
                &gt; npm install innovation
              </div>
              <div className="text-[#00FFD1] font-mono text-sm animate-pulse" style={{ animationDelay: '1s' }}>
                &gt; git commit -m "Building the future"
              </div>
              <div className="text-[#00FFD1] font-mono text-sm animate-pulse" style={{ animationDelay: '2s' }}>
                &gt; CodeNova.init()
              </div>
            </div>
          </div>

          {/* Right - Spline 3D Animation */}
          <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
            <div className="w-full h-full" style={{ overflow: 'visible', position: 'relative' }}>
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-[#00FFD1] text-lg animate-pulse">Loading 3D Experience...</div>
                </div>
              }>
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
