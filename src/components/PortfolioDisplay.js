import React from 'react';
import './PortfolioDisplay.css';

const PortfolioDisplay = ({ formData }) => {
  return (
    <div className="portfolio-display">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#cv">CV</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>{formData.name}'s Portfolio</h1>

        {/* Contact Information */}
        <section id="contact">
          <h2>Contact Information</h2>
          <div className="contact-details">
            {formData.email && (
              <p><strong>Email:</strong> {formData.email}</p>
            )}
            {formData.linkedIn && (
              <p><strong>LinkedIn:</strong> <a href={formData.linkedIn} target="_blank" rel="noopener noreferrer">{formData.linkedIn}</a></p>
            )}
            {formData.github && (
              <p><strong>GitHub:</strong> <a href={formData.github} target="_blank" rel="noopener noreferrer">{formData.github}</a></p>
            )}
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey">
          <h2>Journey</h2>
          {formData.journey.length > 0 ? (
            formData.journey.map((journey, index) => (
              journey.companyName && (
                <div key={index} className="journey-item">
                  <h3>{journey.companyName} ({journey.years})</h3>
                  {journey.description && <p>{journey.description}</p>}
                </div>
              )
            ))
          ) : (
            <p>No journeys to display.</p>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              skill.category && (
                <div key={index} className="skill-item">
                  <strong>{skill.category}</strong>: {skill.details}
                </div>
              )
            ))
          ) : (
            <p>No skills to display.</p>
          )}
        </section>

        {/* Profile Picture */}
        <section id="profile-picture">
          <h2>Profile Picture</h2>
          {formData.picture && (
            <img src={URL.createObjectURL(formData.picture)} alt="Profile" className="profile-picture" />
          )}
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>
          {formData.projects.length > 0 ? (
            formData.projects.map((project, index) => (
              project.title && (
                <div key={index} className="project-item">
                  <h3>{project.title}</h3>
                  {project.description && <p>{project.description}</p>}
                  {project.technologies && (
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                  )}
                  {project.github && (
                    <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
                  )}
                  {project.liveDemo && (
                    <p><strong>Live Demo:</strong> <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">{project.liveDemo}</a></p>
                  )}
                  {project.projectImage && (
                    <img src={URL.createObjectURL(project.projectImage)} alt={project.title} className="project-image" />
                  )}
                </div>
              )
            ))
          ) : (
            <p>No projects to display.</p>
          )}
        </section>

        {/* CV Section */}
        <section id="cv">
          <h2>Upload CV</h2>
          {formData.cv && (
            <a href={URL.createObjectURL(formData.cv)} download className="cv-link">Download CV</a>
          )}
        </section>
      </div>
    </div>
  );
};

export default PortfolioDisplay;
