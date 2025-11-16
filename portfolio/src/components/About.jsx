import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = {
    'Programming & Backend': [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 80 },
      { name: '.NET', level: 75 },
    ],
    'AI & Data Science': [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 75 },
      { name: 'RAG Systems', level: 80 },
      { name: 'LLM Integration', level: 85 },
    ],
    'DevOps & Cloud': [
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 65 },
      { name: 'Linux', level: 75 },
      { name: 'Shell Scripting', level: 70 },
      { name: 'Automation', level: 80 },
    ],
    'Databases & Tools': [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'ChromaDB', level: 75 },
      { name: 'Power BI', level: 70 },
      { name: 'Tableau', level: 70 },
      { name: 'Anaconda', level: 85 },
    ],
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="about-text animate-on-scroll">
          <h3 className="about-heading">Who I Am</h3>
          <p className="about-description">
            I'm a final-year Computer Science student at Anurag University, specializing in
            Data Science with a passion for backend development and AI/ML technologies.
            My journey in software engineering has been driven by curiosity and a desire
            to build solutions that make a real impact.
          </p>
          <p className="about-description">
            With experience in developing scalable REST APIs, multimodal RAG systems,
            and deep learning models, I bring a unique blend of backend expertise and
            AI/ML knowledge. I'm particularly interested in reliability engineering,
            automation, and cloud infrastructure.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h4 className="stat-number">3+</h4>
              <p className="stat-label">Major Projects</p>
            </div>
            <div className="stat-card">
              <h4 className="stat-number">92.5%</h4>
              <p className="stat-label">DeepFake Detection Accuracy</p>
            </div>
            <div className="stat-card">
              <h4 className="stat-number">7+</h4>
              <p className="stat-label">Certifications</p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <div key={category} className="skill-category animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4 className="skill-category-title">{category}</h4>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="certifications animate-on-scroll">
        <h3 className="certifications-title">Certifications & Learning</h3>
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-icon">📊</div>
            <h4>Data Structures & Algorithms</h4>
            <p>Udemy - Python</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🐍</div>
            <h4>PCAP Python Essentials</h4>
            <p>Cisco Networking Academy</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🤖</div>
            <h4>Generative AI & ChatGPT</h4>
            <p>GeeksforGeeks</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">💻</div>
            <h4>Full-Stack Development</h4>
            <p>Wipro TalentNext - .NET</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🌐</div>
            <h4>JavaScript Essentials</h4>
            <p>Cisco Networking Academy</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🔧</div>
            <h4>CCNA: Intro to Networks</h4>
            <p>Cisco Networking Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
