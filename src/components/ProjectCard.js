import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';

const ProjectCard = ({
  // firebaseKey,
  title,
  image,
  description,
  technologiesUsed,
  // available,
  netlify,
  githubUrl,
  loom,
  // type
}) => (
    <Card body>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <CardText>Tech: {technologiesUsed}</CardText>
      <img src={image} alt={title}/>
      <Button color="info">
        <a href={loom}>Video</a>
      </Button>
      <Button color="info">
        <a href={netlify}>Live</a>
      </Button>
      <Button color="info">
        <a href={githubUrl}>GitHub</a>
      </Button>
    </Card>
);

ProjectCard.propTypes = {
  // firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  // available: PropTypes.bool.isRequired,
  netlify: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  loom: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired
};
export default ProjectCard;
