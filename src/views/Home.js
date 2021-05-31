import React from 'react';
import PropTypes from 'prop-types';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Technology from '../components/Technologies';

function Home({
  projects, setProjects, admin, technology, setTechnology
}) {
  return (
    <>
      <AboutMe/>
      <Projects
        admin={admin}
        projects={projects}
        setProjects={setProjects}/>
      <Technology
        admin={admin}
        technology={technology}
        setTechnology={setTechnology}/>
    </>
  );
}

Home.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  technology: PropTypes.array.isRequired,
  setTechnology: PropTypes.func.isRequired,
};

export default Home;
