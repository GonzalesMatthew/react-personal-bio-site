import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import TechForm from '../components/forms/TechForm';

export default function TechnologyAdd({ setTechnology, user }) {
  return (
    <Container className="card-container" maxWidth='md'>
      <Paper className='paper' elevation={3} variant="outlined">
        <TechForm
          formTitle='Add Tech'
          setTechnology={setTechnology}
          user={user}
        />
      </Paper>
    </Container>
  );
}

TechnologyAdd.propTypes = {
  setTechnology: PropTypes.func.isRequired,
  user: PropTypes.any
};
