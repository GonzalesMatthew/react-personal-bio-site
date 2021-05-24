import React from 'react';
import PropTypes from 'prop-types';
import TechCard from '../components/TechCard';

function Technology({ technology }) {
  return (
    <div className="card-container">
      {technology.map((techInfo) => (
        <TechCard
          key={techInfo.firebaseKey}
          name={techInfo.name}
          description={techInfo.description}
          image={techInfo.image}
        />
      ))}
    </div>
  );
}

Technology.propTypes = {
  technology: PropTypes.array.isRequired
};

export default Technology;
