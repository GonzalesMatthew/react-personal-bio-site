import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/forms/ProjectForm';

export default function ProjectsAdd({ setProjects }) {
  return (
    <div>
      <ProjectForm
        formTitle='Add Project'
        setProjects={setProjects}
      />
    </div>
  );
}

ProjectsAdd.propTypes = {
  setProjects: PropTypes.func.isRequired
};
