import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProjectForm from '../components/forms/ProjectForm';

export default function AboutMeUpdate({ setAboutMe }) {
  return (
    <Container className="card-container" maxWidth='md'>
      <Paper className='paper' elevation={3} variant="outlined">
        <ProjectForm
          formTitle='Update About Me'
          setAboutMe={setAboutMe}
        />
      </Paper>
    </Container>
  );
}

AboutMeUpdate.propTypes = {
  setAboutMe: PropTypes.func.isRequired
};
