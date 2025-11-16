import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    const elements = experienceRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'Data Science Intern',
      company: 'CODTECH IT Solutions',
      location: 'Virtual',
      period: 'May 2024 - Jun 2024',
      description: [
        'Built an 85% accurate churn prediction model, enabling earlier identification of at-risk telecom customers and supporting proactive retention strategies.',
        'Conducted anomaly detection and exploratory data analysis on large datasets using Python, R, SQL, and Matplotlib, generating actionable insights for business teams.',
        'Developed visualizations in Matplotlib to present trends and patterns clearly, improving decision-making support.',
        'Optimized analysis workflows with automation, reducing manual reporting time by 30% and accelerating business decisions.',
      ],
      icon: '💼',
      color: 'blue',
    },
    {
      type: 'volunteer',
      title: 'Hospitality Team Member',
      company: 'GeeksforGeeks Anurag University Student Chapter',
      location: 'Hyderabad',
      period: 'Jan 2023 - Jan 2024',
      description: [
        'Contributed to the organization and execution of technical workshops, coding competitions, and events for the university community.',
        'Collaborated with a team to manage event logistics, ensuring a positive and engaging experience for all attendees and guest speakers.',
      ],
      icon: '🤝',
      color: 'green',
    },
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science & Engineering (Data Science)',
    university: 'Anurag University',
    location: 'Hyderabad, Telangana',
    period: 'Oct 2021 - Jul 2025',
    gpa: '7.23',
    icon: '🎓',
  };

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My professional journey and academic background</p>
      </div>

      <div className="experience-content">
        {/* Education Section */}
        <div className="education-card animate-on-scroll">
          <div className="education-icon">{education.icon}</div>
          <div className="education-details">
            <h3 className="education-degree">{education.degree}</h3>
            <div className="education-info">
              <p className="education-university">{education.university}</p>
              <span className="education-separator">•</span>
              <p className="education-location">{education.location}</p>
            </div>
            <div className="education-meta">
              <span className="education-period">{education.period}</span>
              <span className="education-gpa">GPA: {education.gpa}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item animate-on-scroll ${exp.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{exp.icon}</span>
              </div>

              <div className="timeline-content">
                <div className="timeline-badge">
                  {exp.type === 'work' ? 'Work Experience' : 'Volunteer'}
                </div>

                <h3 className="timeline-title">{exp.title}</h3>

                <div className="timeline-meta">
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-separator">•</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>

                <p className="timeline-period">{exp.period}</p>

                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="skills-summary animate-on-scroll">
        <h3 className="skills-summary-title">Core Competencies</h3>
        <div className="competencies-grid">
          <div className="competency-card">
            <div className="competency-icon">🔧</div>
            <h4>Backend Development</h4>
            <p>Java, Python, Flask, Spring Boot, REST APIs</p>
          </div>
          <div className="competency-card">
            <div className="competency-icon">🧠</div>
            <h4>AI & Machine Learning</h4>
            <p>Deep Learning, RAG Systems, LLM Integration</p>
          </div>
          <div className="competency-card">
            <div className="competency-icon">📊</div>
            <h4>Data Science</h4>
            <p>Python, R, SQL, Data Visualization, Analytics</p>
          </div>
          <div className="competency-card">
            <div className="competency-icon">☁️</div>
            <h4>Cloud & DevOps</h4>
            <p>AWS, Git, Automation, Linux, Shell Scripting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
