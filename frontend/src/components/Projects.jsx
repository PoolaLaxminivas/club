import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-[#00FFD1] text-black';
      case 'completed': return 'bg-white/20 text-white';
      default: return 'bg-white/20 text-white';
    }
  };

  return (
    <section id="projects" className="relative bg-black py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Our Projects
          </h2>
          <div className="h-1 w-20 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Innovative solutions built by our talented members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-[#121212] border border-white/25 p-8 hover:border-[#00FFD1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <span className={`text-xs font-medium px-3 py-1 ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium px-3 py-1 bg-white/10 text-[#00FFD1] border border-[#00FFD1]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="text-sm text-white/60">
                  <span className="text-white/40">Team:</span> {project.team}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00FFD1] hover:text-white transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
