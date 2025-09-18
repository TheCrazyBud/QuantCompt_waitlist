import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles className="badge-icon" />
            <span className="badge-text">Quantum Computing Consultancy & Solutions</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            BUILDING THE FUTURE OF
            <br />
            <span className="gradient-text">QUANTUM COMPUTING</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where quantum builders unite to create the future. We provide expert consultancy services 
            and bring together elite developers to form collaborative teams working on breakthrough 
            quantum computing projects for leading companies worldwide.
          </motion.p>
          
          <motion.div 
            className="hero-cards"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-card glass">
              <h3>Build Teams</h3>
              <p>Work on projects that shape the industry</p>
            </div>
            <div className="hero-card glass">
              <h3>Consultancy</h3>
              <p>Expert quantum computing guidance</p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href="#waitlist" className="btn btn-primary">
              Join Waitlist
              <ArrowRight className="btn-icon" />
            </a>
            <a href="#platform" className="btn btn-secondary">
              Learn More
            </a>
          </motion.div>
          
        </motion.div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          text-align: center;
          padding-top: 2rem;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .badge-icon {
          width: 16px;
          height: 16px;
          color: #667eea;
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
        }
        
        .hero-description {
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-cards {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .hero-card {
          padding: 40px;
          text-align: center;
          min-width: 300px;
          transition: all 0.3s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }
        
        .hero-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }
        
        .hero-card p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        
        .btn-icon {
          width: 18px;
          height: 18px;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .hero-cards {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          
          .hero-card {
            min-width: 280px;
            padding: 35px;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-stats {
            gap: 30px;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
