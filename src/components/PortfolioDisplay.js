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
      <h1 className="animated-text">{formData.name}'s Portfolio</h1>


        {/* Profile Picture */}
        {formData.picture && (
          <section id="profile-picture" className="portfolio-section">
            <h2>Profile Picture</h2>
            <img src={URL.createObjectURL(formData.picture)} alt="Profile" className="profile-picture" />
          </section>
        )}
        {/* Contact Information */}
        {formData.email || formData.linkedIn || formData.github ? (
          <section id="contact" className="portfolio-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
            <div style={{ display: 'flex', alignItems: 'center' }}>
  {/* Image */}
  <img 
    src="data:image/jpeg;base64,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"  style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} 
  />
  
  {/* Address */}
  <div>
    {/* <p><strong>Address:</strong> 1234 Street Name, City, Country</p> */}
    {formData.email && (
      <p><strong>Email:</strong> {formData.email}</p>
    )}
  </div>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
  {/* Image Section */}
  <img 
    src="data:image/png;base64,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" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }}  />  {/* LinkedIn Section */}
  {formData.linkedIn && (
    <p style={{ margin: 0 }}>
      <strong>LinkedIn:</strong>
      <a 
        href={formData.linkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#0077B5', fontWeight: 'bold', marginLeft: '5px' }}>
        LinkedIn Profile
      </a>
    </p>
  )}
</div>
<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  <img 
    src="data:image/png;base64,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" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }}  // Replace with your GitHub logo URL
    alt="GitHub Logo"
    width="30" // Adjust size as needed
    height="30" // Adjust size as needed
  // Space between the image and text
  />
  {formData.github && (
    <p style={{ margin: 0 }}>
      <strong>GitHub:</strong> 
      <a 
        href={formData.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: '#181717', marginLeft: '5px' }}>
        {formData.github}
      </a>
    </p>
  )}
</div>

            </div>
          </section>
        ) : null}

        {/* Journey Section */}
        {formData.journey.length > 0 && (
          <section id="journey" className="portfolio-section">
            <h2>Journey</h2>
            {formData.journey.map((journey, index) => (
              journey.companyName && (
                <div key={index} className="journey-item interactive-card">
                  <h3>{journey.companyName} ({journey.years})</h3>
                  {journey.description && <p>{journey.description}</p>}
                </div>
              )
            ))}
          </section>
        )}

        {/* Skills Section */}
        {formData.skills.length > 0 && (
          <section id="skills" className="portfolio-section">
            <h2>Skills</h2>
            {formData.skills.map((skill, index) => (
              skill.category && (
                <div key={index} className="skill-item interactive-card">
                  <strong>{skill.category}</strong>: {skill.details}
                </div>
              )
            ))}
          </section>
        )}


        {/* Projects Section */}
        {formData.projects.length > 0 && (
          <section id="projects" className="portfolio-section">
            <h2>Projects</h2>
            {formData.projects.map((project, index) => (
              project.title && (
                <div key={index} className="project-item interactive-card">
                  <h3>{project.title}</h3>
                  {project.projectImage && (
                    <div className="project-image-container">
                      {/* Correct Image Rendering */}
                      <img 
                        src={URL.createObjectURL(project.projectImage)} 
                        alt={project.title} 
                        className="project-image move-image" 
                      />
                    </div>
                  )}
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
                </div>
              )
            ))}
          </section>
        )}

        {/* CV Section */}
        {formData.cv && (
          <section id="cv" className="portfolio-section">
            <h2>Upload CV</h2>
            <a href={URL.createObjectURL(formData.cv)} download className="cv-link">Download CV</a>
          </section>
        )}
      </div>
    </div>
  );
};

export default PortfolioDisplay;
