import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ProjectsAdd from '../views/ProjectsAdd';
import TechnologyAdd from '../views/TechnologyAdd';
import Blog from '../views/Blog';
import { getAboutMe } from './data/AboutMeData';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (check) => (admin
    ? (<Component {...check} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: check.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default function Routes({
  projects, technology, setProjects, setTechnology, admin
}) {
  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
    getAboutMe().then(setAboutMe);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home aboutMe={aboutMe} projects={projects} setProjects={setProjects} admin={admin} technology={technology} setTechnology={setTechnology}/>} />
        <Route exact path='/blog' component={Blog}/>
        <PrivateRoute
          exact path='/project-add'
          admin={admin}
          component={() => <ProjectsAdd setProjects={setProjects}/>}
        />
        <PrivateRoute
          exact path='/tech-add'
          admin={admin}
          component={() => <TechnologyAdd setTechnology={setTechnology}/>}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  aboutMe: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  technology: PropTypes.array.isRequired,
  setAboutMe: PropTypes.func.isRequired,
  setProjects: PropTypes.func.isRequired,
  setTechnology: PropTypes.func.isRequired
};
