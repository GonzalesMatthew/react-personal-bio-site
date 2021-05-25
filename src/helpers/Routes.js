import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Projects from '../views/Projects';
import Technology from '../views/Technologies';
import Contact from '../views/Contact';
import ProjectsEdit from '../views/ProjectsEdit';
import TechnologyEdit from '../views/TechnologyEdit';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
// when we call this function in the return, it is looking for an argument. `props` here is taco.

  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default function Routes({
  projects, technology, setProjects, setTechnology, admin
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={() => <Projects projects={projects} setProjects={setProjects}/>} />
        <Route exact path='/technology' component={() => <Technology technology={technology} setTechnology={setTechnology}/>} />
        <Route exact path='/contact' component={Contact} />
        <PrivateRoute
          exact path='/project-edit'
          admin={admin}
          component={ProjectsEdit}
        />
        <PrivateRoute
          exact path='/tech-edit'
          admin={admin}
          component={TechnologyEdit}
        />
        <Route path='*' component = {NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array.isRequired,
  technology: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
  setTechnology: PropTypes.func.isRequired
};
