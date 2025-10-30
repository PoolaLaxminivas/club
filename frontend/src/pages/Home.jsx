import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Members from '../components/Members';
import Events from '../components/Events';
import Projects from '../components/Projects';
import JoinForm from '../components/JoinForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Members />
      <Events />
      <Projects />
      <JoinForm />
      <Footer />
    </div>
  );
};

export default Home;
