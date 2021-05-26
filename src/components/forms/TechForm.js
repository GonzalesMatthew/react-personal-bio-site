import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTechnology } from '../../helpers/data/TechnologyData';

export default function TechForm({ setTechnology }) {
  const [tech, setTech] = useState({
    firebaseKey: '',
    name: '',
    description: '',
    image: '',
  });

  const inputHandler = (e) => {
    setTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createTechnology(tech).then(setTechnology);
  };

  return (
    <>
      <div className='tech-form'>
        <form
          id='addTechForm'
          autoComplete='off'
          onSubmit={submitHandler}
        >
          <h2>Add Tech</h2>
          <label>Name:</label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={tech.name}
            onChange={inputHandler}
          ></input>
          <label>Description:</label>
          <input
            name='description'
            type='text'
            placeholder='Wiki description'
            value={tech.description}
            onChange={inputHandler}
          ></input>
          <label>Image:</label>
          <input
            name='image'
            type='text'
            placeholder='Image URL'
            value={tech.image}
            onChange={inputHandler}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

TechForm.propTypes = {
  setTechnology: PropTypes.func.isRequired,
};
