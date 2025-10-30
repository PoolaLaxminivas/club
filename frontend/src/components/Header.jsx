import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { clubInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/25 h-20">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%] h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-[#00FFD1]">{clubInfo.name}</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg font-normal">
            About
          </button>
          <button onClick={() => scrollToSection('members')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg font-normal">
            Members
          </button>
          <button onClick={() => scrollToSection('events')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg font-normal">
            Events
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg font-normal">
            Projects
          </button>
          <button onClick={() => scrollToSection('join')} className="bg-[#00FFD1] text-black px-6 py-3 font-medium text-lg hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all">
            Join Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/25 p-6">
          <nav className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg text-left">
              About
            </button>
            <button onClick={() => scrollToSection('members')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg text-left">
              Members
            </button>
            <button onClick={() => scrollToSection('events')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg text-left">
              Events
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-[#4D4D4D] hover:text-white transition-colors text-lg text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection('join')} className="bg-[#00FFD1] text-black px-6 py-3 font-medium text-lg hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all mt-2">
              Join Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
