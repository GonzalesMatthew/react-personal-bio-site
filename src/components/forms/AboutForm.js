import React from 'react';
import PropTypes from 'prop-types';
// import { createProjects, updateProjects } from '../../helpers/data/ProjectData';

export default function AboutForm() {
  // formTitle, setAboutMe

  // const [aboutObj, setAboutObj] = useState({
  //   firebaseKey: firebaseKey || null,
  //   title: title || '',
  //   image: image || '',
  //   description: description || '',
  //   technologiesUsed: technologiesUsed || '',
  //   type: type || '',
  //   loom: loom || '',
  //   netlify: netlify || '',
  //   githubUrl: githubUrl || '',
  //   available: available || '',
  // });

  // const inputHandler = (e) => {
  //   setAboutMe((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (aboutObj.firebaseKey) {
  //     updateProjects(aboutObj).then(setAboutObj);
  //   } else {
  //     createProjects(aboutObj).then(setAboutObj);
  //   }
  // };

  return (
    <>
      {/* <div className='project-form'>
        <form
          id='updateAboutMe'
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
          ></input>
          <label>Image:</label>
          <input
            name='image'
            type='text'
            placeholder='Image'
            value={project.image}
            onChange={inputHandler}
          ></input>
          <label>Description:</label>
          <input
            name='description'
            type='text'
            placeholder='Description'
            value={project.description}
            onChange={inputHandler}
          ></input>
          <label>Tech Used:</label>
          <input
            name='technologiesUsed'
            type='text'
            placeholder='Tech Used'
            value={project.technologiesUsed}
            onChange={inputHandler}
          ></input>
          <label>Type:</label>
          <input
            name='type'
            type='text'
            placeholder='Type:(Personal, Group)'
            value={project.type}
            onChange={inputHandler}
          ></input>
          <label>Loom:</label>
          <input
            name='loom'
            type='text'
            placeholder='Loom Video'
            value={project.loom}
            onChange={inputHandler}
          ></input>
          <label>Netlify:</label>
          <input
            name='netlify'
            type='text'
            placeholder='Netlify deploy'
            value={project.netlify}
            onChange={inputHandler}
          ></input>
          <label>GitHub:</label>
          <input
            name='githubUrl'
            type='text'
            placeholder='GitHub URL'
            value={project.githubUrl}
            onChange={inputHandler}
          ></input>
          <label>Available:</label>
          <input
            name='available'
            type='text'
            placeholder='Visible? (true, false)'
            value={project.available}
            onChange={inputHandler}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div> */}
    </>
  );
}

AboutForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAboutMe: PropTypes.func,
};
