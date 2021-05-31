import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';

function Projects({ projects, setProjects, admin }) {
  return (
    <Container>
      <Paper elevation={3} variant="outlined">
      {projects.map((projectInfo) => (
        <Container
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
