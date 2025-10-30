import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { membersAPI } from '../services/api';

const MemberCard = ({ member }) => (
  <div className="group bg-[#121212] border border-white/25 overflow-hidden hover:border-[#00FFD1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]">
    <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
      <p className="text-[#00FFD1] text-sm mb-4">{member.role}</p>
      <div className="flex gap-3">
        <a 
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#00FFD1] transition-colors"
        >
          <Github size={20} />
        </a>
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#00FFD1] transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </div>
);

const Members = () => {
  const [coreTeam, setCoreTeam] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const [coreResponse, activeResponse] = await Promise.all([
          membersAPI.getCore(),
          membersAPI.getActive()
        ]);
        setCoreTeam(coreResponse.data);
        setMembers(activeResponse.data);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to load members. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <section id="members" className="relative bg-black py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
          <div className="text-center">
            <div className="text-[#00FFD1] text-xl animate-pulse">Loading members...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="members" className="relative bg-black py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
          <div className="text-center">
            <div className="text-red-500 text-xl">{error}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="members" className="relative bg-black py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Meet Our Team
          </h2>
          <div className="h-1 w-20 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Passionate individuals driving innovation and building the future of technology.
          </p>
        </div>

        {/* Core Team */}
        {coreTeam.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Core Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreTeam.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Members */}
        {members.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Active Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;
