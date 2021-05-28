import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';

const Div0 = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
// const Div1 = styled.div`
//   color: white;
//   background-color: #b7cfeb;
//   padding: 40px;
// `;
function Projects({ projects, setProjects, admin }) {
  return (
    <Div0 className="card-container">
      {projects.map((projectInfo) => (
        <div
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
        </div>
      ))}
    </Div0>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Projects;
