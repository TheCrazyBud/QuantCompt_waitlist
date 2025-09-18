import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Users,
  Briefcase,
  Code,
  BookOpen,
  Shield,
  Zap,
  BarChart3,
  GitBranch,
  Brain
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="feature-icon" />,
      title: "Strategic Quantum Consulting",
      description: "Expert consultation on quantum strategy, technology roadmaps, and implementation planning for enterprise quantum adoption.",
      tags: ["Strategy", "Roadmaps", "Planning", "Enterprise"],
      gradient: "gradient-primary"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Collaborative Team Formation",
      description: "Connect quantum builders and form elite teams to work on cutting-edge projects. Build the future together.",
      tags: ["Team Building", "Collaboration", "Networking", "Innovation"],
      gradient: "gradient-secondary"
    },
    {
      icon: <Code className="feature-icon" />,
      title: "Quantum Project Incubation",
      description: "Support and guidance for quantum computing projects from ideation to implementation with expert mentorship.",
      tags: ["Project Support", "Mentorship", "Guidance", "Innovation"],
      gradient: "gradient-tertiary"
    },
    {
      icon: <Cpu className="feature-icon" />,
      title: "Enterprise Solutions",
      description: "Deliver production-ready quantum applications for Fortune 500 companies through our collaborative development approach.",
      tags: ["Enterprise", "Production Ready", "Applications", "Solutions"],
      gradient: "gradient-primary"
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Quantum Security Expertise",
      description: "Specialized consulting and development in quantum-safe cryptography and security protocols with expert teams.",
      tags: ["Cryptography", "Security", "Expertise", "Protocols"],
      gradient: "gradient-secondary"
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Knowledge Sharing Platform",
      description: "Access to cutting-edge quantum research, best practices, and collaborative learning within our builder community.",
      tags: ["Knowledge", "Research", "Learning", "Community"],
      gradient: "gradient-tertiary"
    }
  ];

  return (
    <section className="features" id="platform">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
Where Quantum <span className="gradient-text">Builders Unite</span> & Innovate
          </h2>
          <p className="section-description">
Expert consultancy services meet collaborative innovation. Join a community of quantum builders 
            forming teams to shape the future of quantum computing for leading enterprises.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`feature-icon-wrapper ${feature.gradient}`}>
                {feature.icon}
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-tags">
                  {feature.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="feature-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div 
          className="platform-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cta-content glass">
            <h3 className="cta-title">Ready to Build the Quantum Future?</h3>
            <p className="cta-description">
              Join our exclusive community of quantum builders and get access to consulting services, 
              collaborative projects, and elite development opportunities.
            </p>
            <button className="btn btn-primary">
              <Zap className="btn-icon" />
              Join Waitlist Now
            </button>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .features-section {
          padding: 100px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .feature-card {
          padding: 40px;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
        }
        
        .feature-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        
        .feature-icon {
          width: 32px;
          height: 32px;
          color: white;
        }
        
        .feature-content {
          margin-bottom: 25px;
        }
        
        .feature-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: white;
        }
        
        .feature-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }
        
        .feature-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        
        .platform-cta {
          text-align: center;
        }
        
        .cta-content {
          padding: 60px 40px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: white;
        }
        
        .cta-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .btn-icon {
          width: 18px;
          height: 18px;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-card {
            padding: 30px;
          }
          
          .cta-content {
            padding: 40px 20px;
          }
          
        }
      `}</style>
    </section>
  );
};

export default Features;
