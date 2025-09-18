import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          experience: formData.experience
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error && result.error.includes('duplicate')) {
          setError('This email is already on our waitlist!');
        } else {
          setError(result.error || 'Something went wrong. Please try again.');
        }
      } else {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', role: '', experience: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Network error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="waitlist" id="waitlist">
      <div className="container">
        <motion.div 
          className="waitlist-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="waitlist-header">
            <h2 className="waitlist-title">
              Join the <span className="gradient-text">Quantum Builders</span> Community
            </h2>
            <p className="waitlist-description">
              Connect with elite quantum developers, access expert consulting services, and collaborate 
              on breakthrough projects that shape the future of quantum computing.
            </p>
          </div>

          <div className="waitlist-form-container">
            <motion.form 
              className="waitlist-form glass"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <div className="input-wrapper">
                  <User className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="select-wrapper">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select Your Interest</option>
                    <option value="Quantum Developer">Quantum Developer (Join Teams)</option>
                    <option value="Quantum Consulting Services">Quantum Consulting Services</option>
                    <option value="Team Collaboration">Team Collaboration & Projects</option>
                    <option value="Enterprise Client">Enterprise Client</option>
                    <option value="Startup/SME">Startup/SME</option>
                    <option value="Research Institution">Research Institution</option>
                    <option value="Government/Defense">Government/Defense</option>
                    <option value="Quantum Enthusiast">Quantum Enthusiast</option>
                    <option value="Other">Other</option>
                  </select>
                  <Briefcase className="select-icon" />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="experience"
                  placeholder="Tell us about your quantum computing experience, project interests, or collaboration goals..."
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  rows="4"
                />
              </div>

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                className="submit-btn btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner" />
                    Joining...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="btn-icon" />
                    Added to Waitlist!
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="btn-icon" />
                  </>
                )}
              </motion.button>
            </motion.form>

            <motion.div 
              className="waitlist-benefits"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="benefits-title">What You'll Get</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Expert Consulting Access</h4>
                    <p>Priority access to quantum strategy and implementation services</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Builder Community</h4>
                    <p>Connect with elite quantum developers and form collaborative teams</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Exclusive Projects</h4>
                    <p>Access to cutting-edge quantum computing projects and opportunities</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Knowledge Sharing</h4>
                    <p>Industry insights, research updates, and collaborative learning</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .waitlist-section {
          padding: 100px 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        }
        
        .waitlist-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .waitlist-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .waitlist-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .waitlist-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .waitlist-form-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .waitlist-form {
          padding: 40px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 15px;
          width: 20px;
          height: 20px;
          color: rgba(255, 255, 255, 0.5);
          z-index: 1;
        }
        
        .form-input {
          width: 100%;
          padding: 15px 15px 15px 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .select-wrapper {
          position: relative;
        }
        
        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 40px;
          padding-left: 45px;
          color: white;
          cursor: pointer;
        }
        
        .form-select option {
          background: rgba(15, 15, 25, 0.95);
          color: white;
          padding: 10px;
        }
        
        .select-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: rgba(255, 255, 255, 0.6);
          pointer-events: none;
        }
        
        .form-textarea {
          padding: 15px;
          resize: vertical;
          min-height: 100px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 18px;
          font-size: 18px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .submit-btn:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
        }
        
        .waitlist-benefits {
          padding: 40px 0;
        }
        
        .benefits-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 30px;
          color: white;
        }
        
        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }
        
        .benefit-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        .benefit-content h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: white;
        }
        
        .benefit-content p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .waitlist-form-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .waitlist-form {
            padding: 30px;
          }
          
          .form-input {
            padding: 12px 12px 12px 45px;
          }
          
          .submit-btn {
            padding: 15px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Waitlist;
