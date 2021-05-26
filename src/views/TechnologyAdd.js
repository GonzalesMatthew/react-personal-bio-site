import React from 'react';
import PropTypes from 'prop-types';
import TechForm from '../components/forms/TechForm';

export default function TechnologyAdd({ setTechnology }) {
  return (
    <div>
      <TechForm
        formTitle='Add Tech'
        setTechnology={setTechnology}
      />
    </div>
  );
}

TechnologyAdd.propTypes = {
  setTechnology: PropTypes.func.isRequired
};
