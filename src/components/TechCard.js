import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';

const TechCard = ({
  // firebaseKey,
  name,
  image,
  description
}) => (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{description}</CardText>
      <img width="110px" src={image} alt={name}/>
    </Card>
);

TechCard.propTypes = {
  // firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default TechCard;
