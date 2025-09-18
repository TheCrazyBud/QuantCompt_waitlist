import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="stat-icon" />,
      number: "$50B+",
      label: "Quantum Market Size",
      description: "Expected by 2030 globally"
    },
    {
      icon: <Users className="stat-icon" />,
      number: "15%",
      label: "Annual Growth",
      description: "Quantum computing industry"
    },
    {
      icon: <CheckCircle className="stat-icon" />,
      number: "70%",
      label: "Enterprise Interest",
      description: "Fortune 500 exploring quantum"
    },
    {
      icon: <Globe className="stat-icon" />,
      number: "3+",
      label: "Quantum Advantage",
      description: "Years until commercial breakthrough"
    }
  ];

  return (
    <section className="stats-section section">
      <div className="container">
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .stats-section {
          padding: 60px 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .stat-card {
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }
        
        .stat-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          margin-bottom: 20px;
        }
        
        .stat-icon {
          width: 28px;
          height: 28px;
          color: white;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        
        .stat-label {
          font-size: 18px;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
        }
        
        .stat-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
