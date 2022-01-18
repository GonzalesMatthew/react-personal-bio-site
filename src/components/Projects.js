import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProjectCard from './cards/ProjectCard';

function Projects({ projects, setProjects, admin }) {
  return (
    <Container id='portfolio' className='portfolio card-container' maxWidth='md'>
      <h1 className="heading1">Portfolio</h1>
      <Paper className='portfolio-color paper' elevation={3} variant="outlined">
      {projects.map((projectInfo) => (
        <Container
          className="card-container"
          maxWidth="sm"
          key={projectInfo.firebaseKey}>
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
        </Container>
      ))}
      </Paper>
    </Container>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Projects;
