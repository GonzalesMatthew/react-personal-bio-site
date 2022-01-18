import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Tooltip
} from 'reactstrap';
import { Button } from '@material-ui/core';
import { deleteTechnology } from '../helpers/data/TechnologyData';
import TechForm from './forms/TechForm';

const TechCard = ({
  firebaseKey,
  name,
  image,
  description,
  setTechnology,
  admin
}) => {
  const [update, setUpdate] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleClick = (type) => {
    switch (type) {
      case 'update':
        setUpdate((prevState) => !prevState);
        break;
      case 'delete':
        // eslint-disable-next-line
        const result = window.confirm('Delete this tech card?');
        if (result) deleteTechnology(firebaseKey).then(setTechnology);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <img className='tech-icon' id={firebaseKey} src={image} alt={name}/>
      <Tooltip isOpen={tooltipOpen} placement="bottom-start" target={firebaseKey} toggle={toggle}>
        <h5>{name}</h5>
        <p>{description}</p>
      </Tooltip>
      {admin && <Button variant="contained" color="secondary" onClick={() => handleClick('delete')}>Delete Tech</Button>}
      {admin && <Button variant="contained" color="primary" onClick={() => handleClick('update')}>{update ? 'Close Form' : 'Update Tech'}</Button>}
      {
        update && <TechForm
          formTitle='Update Tech'
          setTechnology={setTechnology}
          firebaseKey={firebaseKey}
          name={name}
          image={image}
          description={description}
          admin={admin}
        />
      }
    </div>
  );
};

TechCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTechnology: PropTypes.func.isRequired,
  admin: PropTypes.any
};
export default TechCard;
