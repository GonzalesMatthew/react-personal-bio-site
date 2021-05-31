import React from 'react';
import PropTypes from 'prop-types';
import { Container, Paper, Box } from '@material-ui/core';
import TechCard from '../components/TechCard';

function Technology({ technology, setTechnology, admin }) {
  return (
    <Container className="card-container" maxWidth="sm">
      <Paper elevation={3} variant="outlined">
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
