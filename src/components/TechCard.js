import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import { deleteTechnology } from '../helpers/data/TechnologyData';
import TechForm from './forms/TechForm';

const TechCard = ({
  firebaseKey,
  name,
  image,
  description,
  setTechnology
}) => {
  const [update, setUpdate] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'update':
        setUpdate((prevState) => !prevState);
        break;
      case 'delete':
        deleteTechnology(firebaseKey).then(setTechnology);
        break;
      default:
        break;
    }
  };
  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{description}</CardText>
      <img width="110px" src={image} alt={name}/>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Tech</Button>
      <Button color="info" onClick={() => handleClick('update')}>{update ? 'Close Form' : 'Update Tech'}</Button>
      {
        update && <TechForm
          formTitle='Update Tech'
          setTechnology={setTechnology}
          firebaseKey={firebaseKey}
          name={name}
          image={image}
          description={description}
        />
      }
    </Card>
  );
};

TechCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTechnology: PropTypes.func.isRequired
};
export default TechCard;
