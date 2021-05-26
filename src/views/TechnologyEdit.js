import React from 'react';
import PropTypes from 'prop-types';
import TechForm from '../components/forms/TechForm';

export default function TechnologyEdit({ setTechnology }) {
  // const [techObj, setTechObj] = useState({
  //   firebaseKey: '',
  //   name: '',
  //   description: '',
  //   image: '',
  // });

  return (
    <div>
      Tech Edit
      <TechForm
        setTechnology={setTechnology}
      />
    </div>
  );
}

TechnologyEdit.propTypes = {
  setTechnology: PropTypes.func.isRequired
};
