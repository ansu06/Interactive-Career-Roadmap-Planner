// LandingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function useCountUp(target, duration, shouldStart) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const steps = Math.ceil(duration / 16);
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);
  return count;
}

export default function LandingPage({ onNavigate }) {
  const [demoProgress, setDemoProgress] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setDemoProgress(62), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const topicCount = useCountUp(120, 1200, statsVisible);
  const pathCount = useCountUp(6, 800, statsVisible);
  const rateCount = useCountUp(95, 1000, statsVisible);
  const userCount = useCountUp(500, 1400, statsVisible);

  const demoSteps = [
    { text: 'HTML & CSS Foundations', done: true },
    { text: 'JavaScript Essentials', done: true },
    { text: 'Version Control (Git)', done: true },
    { text: 'Modern React', done: true },
    { text: 'State Management', done: true },
    { text: 'CSS Frameworks', done: false },
    { text: 'Testing (Jest/Cypress)', done: false },
    { text: 'Build & Deploy', done: false },
  ];

  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1 className="hero-title">Engineer Your Future.</h1>
        <p className="hero-subtitle">Interactive, personalized developer roadmaps bridging the gap from beginner tutorials to production-ready engineering.</p>
        <div className="hero-cta-group">
          <button className="primary-cta-btn" onClick={() => onNavigate('login')}>Get Started for Free</button>
          <a href="#features" className="secondary-cta-btn">Explore Features</a>
        </div>
      </div>

      {/* Live Stats Counter */}
      <div className="stats-counter" ref={statsRef}>
        <div className="stat-block">
          <span className="stat-number">🚀 {topicCount}+</span>
          <span className="stat-label-text">Topics Covered</span>
        </div>
        <div className="stat-block">
          <span className="stat-number">👨‍💻 {pathCount}</span>
          <span className="stat-label-text">Career Paths</span>
        </div>
        <div className="stat-block">
          <span className="stat-number">🔥 {rateCount}%</span>
          <span className="stat-label-text">Completion Rate</span>
        </div>
        <div className="stat-block">
          <span className="stat-number">🌍 {userCount}+</span>
          <span className="stat-label-text">Active Learners</span>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1️⃣</div>
            <h3>Choose Career</h3>
            <p>Select from curated, industry-standard learning paths.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2️⃣</div>
            <h3>Follow Roadmap</h3>
            <p>Master specific topics scaled natively by difficulty.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3️⃣</div>
            <h3>Track Progress</h3>
            <p>Monitor your daily streaks and modules completed.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4️⃣</div>
            <h3>Become Job Ready 🚀</h3>
            <p>Build confidence and export your progress for recruiters!</p>
          </div>
        </div>
      </div>

      {/* Live Demo Preview */}
      <div className="demo-preview-section">
        <h2 className="section-title">📊 See Your Progress in Real-Time</h2>
        <p className="demo-subtitle">Here's what your personalized dashboard looks like once you start tracking.</p>

        <div className="demo-window">
          <div className="demo-titlebar">
            <div className="demo-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="demo-url">roadmaptracker.app/dashboard</span>
          </div>

          <div className="demo-body">
            <div className="demo-header-row">
              <div>
                <h3 className="demo-dash-title">Frontend Developer</h3>
                <p className="demo-dash-sub">👋 Welcome back, Ansuman! Keep building your future 🚀</p>
              </div>
              <div className="demo-badges">
                <span className="demo-streak">🔥 12 Day Streak</span>
                <span className="demo-milestone">🔵 Intermediate</span>
              </div>
            </div>

            <div className="demo-progress-area">
              <div className="demo-progress-label">
                <span>Progress</span>
                <span className="demo-pct">{demoProgress}%</span>
              </div>
              <div className="demo-progress-track">
                <div className="demo-progress-fill" style={{ width: `${demoProgress}%` }}></div>
              </div>
              <div className="demo-stats-row">
                <div className="demo-stat"><span className="demo-stat-emoji">🎯</span> Goal: 8</div>
                <div className="demo-stat"><span className="demo-stat-emoji">✅</span> Done: 5</div>
                <div className="demo-stat demo-stat-highlight"><span className="demo-stat-emoji">⏳</span> Left: 3</div>
              </div>
            </div>

            <div className="demo-cards-list">
              {demoSteps.map((s, i) => (
                <div key={i} className={`demo-card-item ${s.done ? 'demo-done' : ''}`}>
                  <span className="demo-card-num">{i + 1}</span>
                  <span className="demo-card-text">{s.text}</span>
                  <span className="demo-card-check">{s.done ? '✅' : '⬜'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="primary-cta-btn demo-cta" onClick={() => onNavigate('login')}>
          Try It Yourself →
        </button>
      </div>

      <div id="features" className="features-section">
        <h2 className="section-title">Features Breakdown</h2>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-glow"></div>
            <span className="feature-icon">🔥</span>
            <h3>Daily Streak Engine</h3>
            <p>Gamify your learning with daily check-ins. Build unstoppable momentum through consistency—watch your streak counter climb and never break the chain.</p>
            <button className="feature-learn-more" onClick={() => onNavigate('login')}>
              Learn More <span className="learn-more-arrow">→</span>
            </button>
          </div>
          <div className="feature-box">
            <div className="feature-glow"></div>
            <span className="feature-icon">🧠</span>
            <h3>AI-Curated Paths</h3>
            <p>From Frontend to Generative AI, follow structured modules vetted by industry engineers. Each path is layered from beginner fundamentals to advanced mastery.</p>
            <button className="feature-learn-more" onClick={() => onNavigate('login')}>
              Learn More <span className="learn-more-arrow">→</span>
            </button>
          </div>
          <div className="feature-box">
            <div className="feature-glow"></div>
            <span className="feature-icon">⏳</span>
            <h3>Smart Estimation</h3>
            <p>Our dynamic engine recalculates your remaining time to mastery in real-time as you check off modules—so you always know exactly where you stand.</p>
            <button className="feature-learn-more" onClick={() => onNavigate('login')}>
              Learn More <span className="learn-more-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Learning Gap Section */}
      <section className="learning-gap-section">
        <div className="gap-content-wrapper">
          
          <div className="gap-left-side">
            <span className="gap-label-badge">The Learning Gap</span>
            <h2 className="gap-main-title">Breaking Free from 'Tutorial Hell'</h2>
            <p className="gap-main-desc">
              Most learners start with enthusiasm but end up lost in a sea of disconnected YouTube videos and blogs. Our platform provides the missing structure you need to become a job-ready engineer.
            </p>
            <div className="gap-hero-image-box">
              <img 
                src="/frustrated_learner.png" 
                alt="Frustrated student using AI" 
                className="gap-hero-img" 
              />
            </div>
            <button className="gap-action-btn" onClick={() => onNavigate('login')}>
              Get Your Learning Path →
            </button>
          </div>
          
          <div className="gap-right-side">
            <div className="gap-timeline-path"></div>
            
            <div className="gap-step-item">
              <div className="gap-step-icon">😵</div>
              <div className="gap-step-card">
                <h3>Disconnected Learning</h3>
                <p>Jumping between random topics without a clear dependency map. You're learning things, but they don't connect.</p>
              </div>
            </div>

            <div className="gap-step-item">
              <div className="gap-step-icon">📉</div>
              <div className="gap-step-card">
                <h3>The Persistence Gap</h3>
                <p>Standard courses don't track your progress across different platforms. Our system creates a single source of truth for your career.</p>
              </div>
            </div>

            <div className="gap-step-item">
              <div className="gap-step-icon">🔥</div>
              <div className="gap-step-card">
                <h3>Motivation Decay</h3>
                <p>Without visual progress or milestones, it's easy to stop. We use streaks and badges to keep you engaged every single day.</p>
              </div>
            </div>

            <div className="gap-step-item">
              <div className="gap-step-icon">🎯</div>
              <div className="gap-step-card">
                <h3>Lack of Focus</h3>
                <p>Spending weeks on syntax while ignoring the real-world architecture you need to actually land a professional job.</p>
              </div>
            </div>

            <div className="gap-step-item gap-final-solution">
              <div className="gap-step-icon solution-check">✅</div>
              <div className="gap-step-card solution-card-active">
                <h3>The Career Roadmap Solution</h3>
                <p>We combine industry-curated paths with real-time tracking and gamified motivation to move you from tutorial learner to professional pro.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why This Project */}
      <div className="why-section">
        <div className="why-content">
          <div className="why-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why This Project?</h2>
            <p className="why-description">
              Most learners fail not because of difficulty — but because of <strong>lack of direction</strong>. 
              Free tutorials are scattered, unstructured, and overwhelming. This platform solves that by giving you 
              a <strong>single, clear, trackable path</strong> from zero to job-ready — with built-in motivation systems 
              to keep you going.
            </p>
          </div>
          <div className="why-checklist">
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Structured learning paths designed by industry standards</span>
            </div>
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Real-time progress tracking with visual analytics</span>
            </div>
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Daily streak motivation to build consistent habits</span>
            </div>
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Beginner → Intermediate → Advanced roadmap flow</span>
            </div>
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Export progress reports for resumes & interviews</span>
            </div>
            <div className="why-check-item">
              <span className="why-check-icon">✔</span>
              <span>Multi-user accounts with isolated cloud-ready storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call-To-Action */}
      <div className="final-cta-section">
        <h2 className="final-cta-title">Start Your Journey Today 🚀</h2>
        <p className="final-cta-sub">Join hundreds of learners building real careers through structured, trackable roadmaps.</p>
        <button className="final-cta-btn" onClick={() => onNavigate('login')}>
          Get Started — It's Free
        </button>
      </div>

      {/* Keyboard Shortcut Hints */}
      <div className="shortcut-hints">
        <span className="shortcut-label">💡 Pro Tips:</span>
        <div className="shortcut-keys">
          <div className="shortcut-item"><kbd>R</kbd> Reset Progress</div>
          <div className="shortcut-item"><kbd>C</kbd> Complete Next</div>
          <div className="shortcut-item"><kbd>E</kbd> Export Report</div>
        </div>
      </div>
      
    </div>
  );
}
