import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <Zap className="logo-icon" />
                <span className="footer-brand gradient-text">QuantCompt</span>
              </div>
              <p className="brand-description">
                Building the future of quantum computing through collaborative development 
                and cutting-edge team coordination systems.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Github className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <Twitter className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <Linkedin className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <Mail className="social-icon" />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Platform</h4>
                <a href="#" className="footer-link">Features</a>
                <a href="#" className="footer-link">Quantum Tools</a>
                <a href="#" className="footer-link">Team Collaboration</a>
                <a href="#" className="footer-link">Project Management</a>
              </div>

              <div className="link-group">
                <h4 className="link-title">Community</h4>
                <a href="#" className="footer-link">Developers</a>
                <a href="#" className="footer-link">Researchers</a>
                <a href="#" className="footer-link">Projects</a>
                <a href="#" className="footer-link">Events</a>
              </div>

              <div className="link-group">
                <h4 className="link-title">Resources</h4>
                <a href="#" className="footer-link">Documentation</a>
                <a href="#" className="footer-link">API Reference</a>
                <a href="#" className="footer-link">Tutorials</a>
                <a href="#" className="footer-link">Blog</a>
              </div>

              <div className="link-group">
                <h4 className="link-title">Company</h4>
                <a href="#" className="footer-link">About</a>
                <a href="#" className="footer-link">Careers</a>
                <a href="#" className="footer-link">Contact</a>
                <a href="#" className="footer-link">Privacy</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <div className="footer-bottom-links">
                <a href="#" className="bottom-link">Privacy Policy</a>
                <a href="#" className="bottom-link">Terms of Service</a>
                <a href="#" className="bottom-link">Cookie Policy</a>
              </div>
              <p className="copyright">
                &copy; 2024 QuantCompt. All rights reserved. Building the quantum future together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .footer {
          background: transparent;
          padding: 60px 0 30px;
          margin-top: 0;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 40px;
        }
        
        .footer-brand {
          max-width: 350px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
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
        
        .brand-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 25px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }
        
        .social-icon {
          width: 18px;
          height: 18px;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        
        .link-group {
          display: flex;
          flex-direction: column;
        }
        
        .link-title {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin-bottom: 15px;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #667eea;
          transform: translateX(5px);
        }
        
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          margin-bottom: 25px;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 25px;
        }
        
        .bottom-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .bottom-link:hover {
          color: #667eea;
        }
        
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
