import React from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Box } from '@material-ui/core';
import TechCard from './TechCard';

function Technology({ technology, setTechnology, admin }) {
  return (
    <Container id='technology' className="technology card-container" maxWidth='md'>
      <h1 className='heading1'>Technology</h1>
      <Paper className='paper' elevation={3} variant="outlined">
        <Box display="flex" flexWrap="wrap" flexDirection="row">
        {technology.map((techInfo) => (
          <TechCard
            key={techInfo.firebaseKey}
            firebaseKey={techInfo.firebaseKey}
            name={techInfo.name}
            description={techInfo.description}
            image={techInfo.image}
            setTechnology={setTechnology}
            admin={admin}
          />
        ))}
        </Box>
      </Paper>
    </Container>
  );
}

Technology.propTypes = {
  technology: PropTypes.array.isRequired,
  setTechnology: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Technology;
