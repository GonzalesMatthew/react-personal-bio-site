import React from 'react';
import PropTypes from 'prop-types';
import TechCard from '../components/TechCard';

function Technology({ technology, setTechnology, admin }) {
  return (
    <div className="card-container">
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
    </div>
  );
}

Technology.propTypes = {
  technology: PropTypes.array.isRequired,
  setTechnology: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Technology;
