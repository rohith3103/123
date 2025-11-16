import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);

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

    const elements = projectsRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Multimodal RAG System',
      category: 'AI/ML',
      description: 'Full-stack multimodal Retrieval-Augmented Generation system using Python, Flask, and Google Gemini to answer queries from diverse data sources including documents, images, and audio/video.',
      technologies: ['Python', 'Flask', 'Google Gemini', 'ChromaDB', 'OpenAI Whisper', 'Tesseract OCR'],
      github: 'https://github.com/rohith3103/coastal-seven-multimodal-project',
      highlights: [
        'Processes PDF, DOCX, images, and YouTube videos',
        'Vector storage with ChromaDB',
        'Context-aware information retrieval',
      ],
      date: 'Sep 2025 - Oct 2025',
      color: 'purple',
    },
    {
      id: 2,
      title: 'DeepFake Detection System',
      category: 'AI/ML',
      description: 'Advanced deep learning system achieving 92.5% accuracy in detecting deepfake videos using ResNeXt CNN and Bi-directional LSTM with heatmap visualization and spectrogram analysis.',
      technologies: ['Python', 'PyTorch', 'ResNeXt', 'LSTM', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/rohith3103/DeepFake',
      highlights: [
        '92.5% detection accuracy',
        'Multi-modal analysis (video, image, audio)',
        'Heatmap and spectrogram visualization',
      ],
      date: 'Aug 2024 - Mar 2025',
      color: 'blue',
    },
    {
      id: 3,
      title: 'E-commerce Product & Order API',
      category: 'Backend',
      description: 'Scalable backend REST API service built with Java and Spring Boot to manage e-commerce product inventory and user orders with MongoDB as the database.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'REST API', 'NoSQL'],
      github: 'https://github.com/rohith3103/flipkart-api',
      highlights: [
        'Complete CRUD functionality',
        'Efficient NoSQL data modeling',
        'RESTful API design',
      ],
      date: '2024',
      color: 'green',
    },
  ];

  const categories = ['all', 'AI/ML', 'Backend'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  const getColorClass = (color) => {
    return `project-card-${color}`;
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore my recent work and innovations</p>
      </div>

      <div className="project-filters animate-on-scroll">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card animate-on-scroll ${getColorClass(project.color)}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-header">
              <div className="project-icon">
                {project.category === 'AI/ML' ? '🤖' : '⚙️'}
              </div>
              <span className="project-date">{project.date}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              <h4>Key Features:</h4>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta animate-on-scroll">
        <p>Want to see more of my work?</p>
        <a
          href="https://github.com/rohith3103"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
