import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProjectForm from '../components/forms/ProjectForm';

export default function ProjectsAdd({ setProjects }) {
  return (
    <Container className="card-container" maxWidth='md'>
      <Paper className='paper' elevation={3} variant="outlined">
        <ProjectForm
          formTitle='Add Project'
          setProjects={setProjects}
        />
      </Paper>
    </Container>
  );
}

ProjectsAdd.propTypes = {
  setProjects: PropTypes.func.isRequired
};
