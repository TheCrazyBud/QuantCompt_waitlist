import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Zap className="logo-icon" />
            <span className="logo-text gradient-text">QuantCompt</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#platform" className="nav-link">Platform</a>
            <a href="#teams" className="nav-link">Teams</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#waitlist" className="nav-link">Join Waitlist</a>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          position: relative;
          background: transparent;
          padding: 2rem 0 1rem;
          z-index: 100;
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .logo-icon {
          width: 28px;
          height: 28px;
          color: #667eea;
        }
        
        .logo-text {
          font-size: 24px;
          font-weight: 700;
        }
        
        .nav {
          display: flex;
          gap: 30px;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #667eea;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px;
        }
        
        @media (max-width: 768px) {
          .nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 20px;
            border-radius: 15px;
            margin-top: 10px;
          }
          
          .nav-open {
            display: flex;
          }
          
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
