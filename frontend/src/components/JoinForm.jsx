import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { joinAPI } from '../services/api';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    github: '',
    linkedin: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name || !formData.email || !formData.year) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Submit to backend
      await joinAPI.submit(formData);
      
      setIsSubmitted(true);
      toast.success('Application submitted successfully!');

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          year: '',
          github: '',
          linkedin: '',
          reason: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="relative bg-black py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-[7.6923%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Join CodeNova
          </h2>
          <div className="h-1 w-20 bg-[#00FFD1] mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Become part of our innovative community. Fill out the form below to get started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#121212] border border-white/25 p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="text-[#00FFD1] mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-3">Application Submitted!</h3>
                <p className="text-white/70">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Year of Study *</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">GitHub Profile</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                      placeholder="https://github.com/username"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                      placeholder="https://linkedin.com/in/username"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Why do you want to join CodeNova?</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black border border-white/40 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors resize-none"
                    placeholder="Tell us about your interest in joining..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all flex items-center justify-center gap-3 min-h-14 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
