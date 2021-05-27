import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';

function Projects({ projects, setProjects, admin }) {
  return (
    <div className="card-container">
      {projects.map((projectInfo) => (
        <ProjectCard
          key={projectInfo.firebaseKey}
          firebaseKey={projectInfo.firebaseKey}
          title={projectInfo.title}
          image={projectInfo.image}
          description={projectInfo.description}
          technologiesUsed={projectInfo.technologiesUsed}
          netlify={projectInfo.netlify}
          githubUrl={projectInfo.githubUrl}
          loom={projectInfo.loom}
          type={projectInfo.type}
          setProjects={setProjects}
          admin={admin}
        />
      ))}
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Projects;
