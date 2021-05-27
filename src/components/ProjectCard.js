import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import { deleteProjects } from '../helpers/data/ProjectData';
import ProjectForm from './forms/ProjectForm';

const ProjectCard = ({
  firebaseKey,
  title,
  image,
  description,
  technologiesUsed,
  // available,
  netlify,
  githubUrl,
  loom,
  setProjects,
  type
}) => {
  const [update, setUpdate] = useState(false);

  const handleClick = (buttonType) => {
    switch (buttonType) {
      case 'update':
        setUpdate((prevState) => !prevState);
        break;
      case 'delete':
        deleteProjects(firebaseKey).then(setProjects);
        break;
      default:
        break;
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
      <CardText>Tech: {technologiesUsed}</CardText>
      <CardText>Type: {type}</CardText>
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
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Project</Button>
      <Button color="info" onClick={() => handleClick('update')}>{update ? 'Close Form' : 'Update Project'}</Button>
      {
        update && <ProjectForm
          formTitle='Update Project'
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          title={title}
          image={image}
          description={description}
          loom={loom}
          netlify={netlify}
          githubUrl={githubUrl}
          technologiesUsed={technologiesUsed}
          // available={available}
          type={type}
        />
      }
    </Card>
  );
};

ProjectCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologiesUsed: PropTypes.string.isRequired,
  // available: PropTypes.bool.isRequired,
  netlify: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  loom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setProjects: PropTypes.func.isRequired
};
export default ProjectCard;
