import React, { useState, useEffect } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { eventsAPI } from '../services/api';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const eventTypes = ['all', 'Hackathons', 'Workshops', 'Talks', 'Coding Challenges'];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const filterType = filter === 'all' ? null : filter;
        const response = await eventsAPI.getAll(filterType);
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [filter]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'upcoming': return 'bg-[#00FFD1] text-black';
      case 'ongoing': return 'bg-yellow-500 text-black';
      case 'past': return 'bg-white/20 text-white';
      default: return 'bg-white/20 text-white';
    }
  };

  return (
    <section id="events" className="relative bg-black py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Events & Workshops
          </h2>
          <div className="h-1 w-20 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join our exciting events, workshops, and competitions throughout the year.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-white/70">
            <Filter size={20} />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-[#00FFD1] text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {type === 'all' ? 'All Events' : type}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="text-[#00FFD1] text-xl animate-pulse">Loading events...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="text-red-500 text-xl">{error}</div>
          </div>
        )}

        {/* Events Grid */}
        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group bg-[#121212] border border-white/25 overflow-hidden hover:border-[#00FFD1] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]"
              >
                <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-white/10 text-white">
                      {event.type}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Events Found */}
        {!loading && !error && events.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/70 text-lg">No events found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
