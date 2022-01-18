import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createProjects, updateProjects } from '../../helpers/data/ProjectData';

export default function ProjectForm({
  formTitle, setProjects, firebaseKey, description, githubUrl, image, loom, netlify, technologiesUsed, title, type, available
}) {
  const [project, setProject] = useState({
    firebaseKey: firebaseKey || null,
    title: title || '',
    image: image || '',
    description: description || '',
    technologiesUsed: technologiesUsed || '',
    type: type || '',
    loom: loom || '',
    netlify: netlify || '',
    githubUrl: githubUrl || '',
    available: available || '',
  });

  const inputHandler = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProjects(project).then(setProjects);
    } else {
      createProjects(project).then(setProjects);
    }
  };

  return (
    <>
      <div className='project-form'>
        <form
          id='addProjectForm'
          autoComplete='off'
          onSubmit={submitHandler}
        >
          <h2>{formTitle}</h2>
          <label>Title:</label>
          <input
            name='title'
            type='text'
            placeholder='Title'
            value={project.title}
            onChange={inputHandler}
          ></input><br/>
          <label>Image:</label>
          <input
            name='image'
            type='text'
            placeholder='Image'
            value={project.image}
            onChange={inputHandler}
          ></input><br/>
          <label>Description:</label>
          <input
            name='description'
            type='text'
            placeholder='Description'
            value={project.description}
            onChange={inputHandler}
          ></input><br/>
          <label>Tech Used:</label>
          <input
            name='technologiesUsed'
            type='text'
            placeholder='Tech Used'
            value={project.technologiesUsed}
            onChange={inputHandler}
          ></input><br/>
          <label>Type:</label>
          <input
            name='type'
            type='text'
            placeholder='Type:(Personal, Group)'
            value={project.type}
            onChange={inputHandler}
          ></input><br/>
          <label>Loom:</label>
          <input
            name='loom'
            type='text'
            placeholder='Loom Video'
            value={project.loom}
            onChange={inputHandler}
          ></input><br/>
          <label>Netlify:</label>
          <input
            name='netlify'
            type='text'
            placeholder='Netlify deploy'
            value={project.netlify}
            onChange={inputHandler}
          ></input><br/>
          <label>GitHub:</label>
          <input
            name='githubUrl'
            type='text'
            placeholder='GitHub URL'
            value={project.githubUrl}
            onChange={inputHandler}
          ></input><br/>
          <label>Available:</label>
          <input
            name='available'
            type='text'
            placeholder='Visible? (true, false)'
            value={project.available}
            onChange={inputHandler}
          ></input><br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  type: PropTypes.string,
  loom: PropTypes.string,
  netlify: PropTypes.string,
  githubUrl: PropTypes.string,
  available: PropTypes.string,
};
