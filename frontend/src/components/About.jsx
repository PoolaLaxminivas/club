import React from 'react';
import { Code2, Users, Rocket, Target } from 'lucide-react';
import { clubInfo } from '../mock';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Learn & Grow",
      description: "Master cutting-edge technologies through hands-on workshops and expert-led sessions."
    },
    {
      icon: <Users size={32} />,
      title: "Collaborate",
      description: "Connect with like-minded developers and work on exciting projects together."
    },
    {
      icon: <Rocket size={32} />,
      title: "Build Projects",
      description: "Turn your ideas into reality with team support and mentorship."
    },
    {
      icon: <Target size={32} />,
      title: "Compete",
      description: "Challenge yourself in hackathons and coding competitions."
    }
  ];

  return (
    <section id="about" className="relative bg-black py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                About CodeNova
              </h2>
              <div className="h-1 w-20 bg-[#00FFD1]"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/85 leading-relaxed">
                {clubInfo.mission}
              </p>
              <p className="text-lg text-white/85 leading-relaxed">
                {clubInfo.vision}
              </p>
            </div>

            <div className="pt-6">
              <div className="text-[#00FFD1] text-5xl font-bold">200+</div>
              <div className="text-white/70 text-lg mt-2">Active Members</div>
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-[#121212] border border-white/25 p-8 hover:border-[#00FFD1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]"
              >
                <div className="text-[#00FFD1] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
