import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks, clubInfo } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/25 py-16">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00FFD1]">{clubInfo.name}</h3>
            <p className="text-white/70 leading-relaxed">
              Building the future of technology, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="block text-white/60 hover:text-[#00FFD1] transition-colors">
                About
              </button>
              <button onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })} className="block text-white/60 hover:text-[#00FFD1] transition-colors">
                Members
              </button>
              <button onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} className="block text-white/60 hover:text-[#00FFD1] transition-colors">
                Events
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="block text-white/60 hover:text-[#00FFD1] transition-colors">
                Projects
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 hover:bg-[#00FFD1] hover:text-black transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 hover:bg-[#00FFD1] hover:text-black transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 hover:bg-[#00FFD1] hover:text-black transition-all"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="bg-white/10 p-3 hover:bg-[#00FFD1] hover:text-black transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4">{socialLinks.email}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-[#00FFD1]" /> by {clubInfo.name}
          </p>
          <p className="text-white/60 text-sm">
            © 2025 {clubInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
