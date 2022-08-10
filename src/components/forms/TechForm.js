import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTechnology, updateTechnology } from '../../helpers/data/TechnologyData';

export default function TechForm({
  formTitle, setTechnology, firebaseKey, name, image, description, user
}) {
  const [tech, setTech] = useState({
    firebaseKey: firebaseKey || null,
    name: name || '',
    description: description || '',
    image: image || '',
  });

  const inputHandler = (e) => {
    setTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (tech.firebaseKey) {
      updateTechnology(tech, user.uid).then(setTechnology);
    } else {
      createTechnology(tech, user.uid).then(setTechnology);
    }
  };

  return (
    <>
      <div className='tech-form'>
        <form
          id='addTechForm'
          autoComplete='off'
          onSubmit={submitHandler}
        >
          <h2>{formTitle}</h2>
          <label>Name:</label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={tech.name}
            onChange={inputHandler}
          ></input><br/>
          <label>Description:</label>
          <input
            name='description'
            type='text'
            placeholder='Wiki description'
            value={tech.description}
            onChange={inputHandler}
          ></input><br/>
          <label>Image:</label>
          <input
            name='image'
            type='text'
            placeholder='Image URL'
            value={tech.image}
            onChange={inputHandler}
          ></input><br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

TechForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setTechnology: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.any
};
