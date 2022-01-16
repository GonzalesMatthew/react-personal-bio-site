import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import {
//   Button,
//   Card,
//   CardText,
//   CardTitle,
// } from 'reactstrap';
import {
  Card, CardHeader, CardMedia, CardContent, Button
} from '@material-ui/core';
import ProjectForm from '../Forms/ProjectForm';
import { deleteProjects } from '../../helpers/data/ProjectData';

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
  type,
  admin
}) => {
  const [update, setUpdate] = useState(false);

  const handleClick = (buttonType) => {
    switch (buttonType) {
      case 'update':
        setUpdate((prevState) => !prevState);
        break;
      case 'delete':
        // eslint-disable-next-line
        const result = window.confirm('Delete this project card?');
        if (result) deleteProjects(firebaseKey).then(setProjects);
        break;
      default:
        break;
    }
  };

  return (
    <Card className="project-card">
      <CardHeader
        title={title}
        subheader={`Tech: ${technologiesUsed}`}
      />
      <CardMedia
        component="img"
        alt={title}
        image={image}
        title={title}
      />
      <CardContent>{type} Project</CardContent>
      <CardContent>{description}</CardContent>
      <Button color="default">
        <a href={loom}>Video</a>
      </Button>
      <Button color="default">
        <a href={netlify}>Live App</a>
      </Button>
      <Button color="default">
        <a href={githubUrl}>GitHub</a>
      </Button>
      {admin && <Button variant="contained" color="secondary" onClick={() => handleClick('delete')}>Delete Project</Button>}
      {admin && <Button variant="contained" color="primary" onClick={() => handleClick('update')}>{update ? 'Close Form' : 'Update Project'}</Button>}
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
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any
};
export default ProjectCard;
