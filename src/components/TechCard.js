import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import { deleteTechnology } from '../helpers/data/TechnologyData';

const TechCard = ({
  firebaseKey,
  name,
  image,
  description,
  setTechnology
}) => {
  const handleClick = () => {
    deleteTechnology(firebaseKey).then(setTechnology);
  };
  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{description}</CardText>
      <img width="110px" src={image} alt={name}/>
      <Button color="danger" onClick={handleClick}>Delete Tech</Button>
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
