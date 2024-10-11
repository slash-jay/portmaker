import React, { useState } from 'react';
import './PortfolioForm.css'; // Import the updated CSS file for styles
// Define reusable input components
const InputField = ({ label, type = 'text', ...props }) => (
  <div className="input-field">
    <label>{label}</label>
    <input type={type} {...props} />
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div className="input-field">
    <label>{label}</label>
    <textarea {...props} />
  </div>
);

// PortfolioForm component
const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedIn: '',
    github: '',
    college: '',
    journey: [{ companyName: '', years: '', description: '' }],
    skills: [{ category: '', details: '' }],
    picture: null,
    cv: null,
    projects: [{ title: '', description: '', technologies: '', github: '', liveDemo: '', projectImage: null }],
  });

  const handleChange = (e, index, field) => {
    const value = e.target.value;
    if (index !== undefined) {
      const updatedProjects = formData.projects.map((project, idx) =>
        idx === index ? { ...project, [field]: value } : project
      );
      setFormData({ ...formData, projects: updatedProjects });
    } else {
      setFormData({ ...formData, [e.target.name]: value });
    }
  };

  const handleJourneyChange = (e, index, field) => {
    const value = e.target.value;
    const updatedJourneys = formData.journey.map((journey, idx) =>
      idx === index ? { ...journey, [field]: value } : journey
    );
    setFormData({ ...formData, journey: updatedJourneys });
  };

  const handleSkillsChange = (e, index, field) => {
    const value = e.target.value;
    const updatedSkills = formData.skills.map((skill, idx) =>
      idx === index ? { ...skill, [field]: value } : skill
    );
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', description: '', technologies: '', github: '', liveDemo: '', projectImage: null }],
    });
  };

  const addJourney = () => {
    setFormData({
      ...formData,
      journey: [...formData.journey, { companyName: '', years: '', description: '' }],
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { category: '', details: '' }],
    });
  };

  const handleFileChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="portfolio-form">
      <h2>Personal Information</h2>
      <InputField label="Name:" name="name" value={formData.name} onChange={handleChange} required />
      <InputField label="Email:" type="email" name="email" value={formData.email} onChange={handleChange} required />
      <InputField label="LinkedIn:" type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
      <InputField label="GitHub:" type="url" name="github" value={formData.github} onChange={handleChange} />
      <InputField label="College/Company Name:" name="college" value={formData.college} onChange={handleChange} />

      <h2>Journey</h2>
      {formData.journey.map((journey, index) => (
        <div key={index}>
          <InputField label="Company Name:" value={journey.companyName} onChange={(e) => handleJourneyChange(e, index, 'companyName')} />
          <InputField label="Years:" value={journey.years} onChange={(e) => handleJourneyChange(e, index, 'years')} />
          <TextAreaField label="Description:" value={journey.description} onChange={(e) => handleJourneyChange(e, index, 'description')} />
        </div>
      ))}
      <button type="button" onClick={addJourney}>Add Journey</button>

      <h2>Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index}>
          <InputField label="Skill Category:" value={skill.category} onChange={(e) => handleSkillsChange(e, index, 'category')} />
          <InputField label="Details:" value={skill.details} onChange={(e) => handleSkillsChange(e, index, 'details')} />
        </div>
      ))}
      <button type="button" onClick={addSkill}>Add Skill</button>

      <h2>Picture Upload</h2>
      <InputField label="Profile Picture:" type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'picture')} />

      <h2>Projects</h2>
      {formData.projects.map((project, index) => (
        <div key={index}>
          <InputField label="Project Title:" value={project.title} onChange={(e) => handleChange(e, index, 'title')} required />
          <TextAreaField label="Description:" value={project.description} onChange={(e) => handleChange(e, index, 'description')} required />
          <InputField label="Technologies:" value={project.technologies} onChange={(e) => handleChange(e, index, 'technologies')} required />
          <InputField label="Github Link:" type="url" value={project.github} onChange={(e) => handleChange(e, index, 'github')} />
          <InputField label="Live Demo Link:" type="url" value={project.liveDemo} onChange={(e) => handleChange(e, index, 'liveDemo')} />
          <InputField label="Project Image (Optional):" type="file" accept="image/*" onChange={(e) => handleFileChange(e, index, 'projectImage')} />
        </div>
      ))}
      <button type="button" onClick={addProject}>Add Another Project</button>

      <InputField label="Upload CV:" type="file" accept=".pdf" onChange={(e) => handleFileChange(e, 'cv')} />

      <button type="submit">Generate Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
