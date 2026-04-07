import React from 'react';
import './App.css';

export default function Footer({ onNavigate }) {
  return (
    <footer className="complex-footer">
      <div className="footer-top">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Career Roadmap Planner</h2>
          <p>Your personalized GPS through the world of engineering. Stop drowning in tutorial hell and start building your career with structured, trackable progress.</p>
        </div>
        
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#features">Key Features</a></li>
            <li><a href="#gap-section">Tutorial Hell Gap</a></li>
            <li><a href="#why-this-project">Why This Project?</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Roadmaps</h3>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Frontend Engineer</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Backend Engineer</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Fullstack Developer</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Android Developer</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Join The Journey</h3>
          <ul>
            <li><a href="#" onClick={() => onNavigate('login')}>Sign In</a></li>
            <li><a href="#" onClick={() => onNavigate('login')}>Create Account</a></li>
            <li><a href="#" onClick={() => onNavigate('login')}>View Demo Dashboard</a></li>
          </ul>
          
          <h3 className="social-heading" style={{ marginTop: '1.5rem' }}>Socials</h3>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Career Roadmap Planner. Built with ❤️ for Future Engineers. &nbsp;|&nbsp; Developed by <span className="dev-name">Ansuman Singh</span></p>
      </div>
    </footer>
  );
}
