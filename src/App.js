import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white', padding: '50px'}}>QuantCompt Test - If you see this, React is working!</h1>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
