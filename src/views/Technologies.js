import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import TechCard from '../components/TechCard';

function Technology({ technology, setTechnology, admin }) {
  return (
    <div className="card-container">
      <Row>
        {technology.map((techInfo) => (
          <Col sm="6" key={techInfo.firebaseKey}>
            <TechCard
              key={techInfo.firebaseKey}
              firebaseKey={techInfo.firebaseKey}
              name={techInfo.name}
              description={techInfo.description}
              image={techInfo.image}
              setTechnology={setTechnology}
              admin={admin}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

Technology.propTypes = {
  technology: PropTypes.array.isRequired,
  setTechnology: PropTypes.func.isRequired,
  admin: PropTypes.any
};

export default Technology;
