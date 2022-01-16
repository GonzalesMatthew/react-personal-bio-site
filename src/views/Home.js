import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Technology from '../components/Technologies';
import Contact from '../components/Contact';

function Home({
  projects, setProjects, admin, technology, setTechnology, user,
  aboutMe, setAboutMe
}) {
  return (
    <>
      <AboutMe
        admin={admin}
        user={user}
        aboutMe={aboutMe}
        setAboutMe={setAboutMe}
      />
      <Projects
        admin={admin}
        projects={projects}
        setProjects={setProjects}/>
      <Technology
        admin={admin}
        technology={technology}
        setTechnology={setTechnology}/>
      <Container className='card-container' maxWidth='md'>
        <h1 className='heading1'>Contact</h1>
        <Paper className='paper' elevation={3} variant='outlined'>
          <Contact/>
        </Paper>
      </Container>
    </>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  technology: PropTypes.array.isRequired,
  setTechnology: PropTypes.func.isRequired,
};

export default Home;
