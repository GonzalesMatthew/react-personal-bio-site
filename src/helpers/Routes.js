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

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread

const PrivateRoute = ({ component: Component, user, ...rest }) => {
// when we call this function in the return, it is looking for an argument. `props` here is taco.

  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes() {
// export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Projects} />
        <Route exact path='/technology' component={Technology} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Home} />
        {/* <PrivateRoute
          exact
          path='/about-edit'
          user={user}
          component={() => <AboutEdit racers={racers}
          setRacers={setRacers} user={user}/>}
        />
        <PrivateRoute
          path='/projects-edit'
          user={user}
          component=() => {<ProjectsEdit projects={projects} setProjects={setProjects}/>}}
        />
        <PrivateRoute
          path='/technologies-edit'
          user={user}
          component={TechnologyEdit}
        />
        <PrivateRoute
          path='/contact-edit'
          user={user}
          component={ContactEdit}
        />
        */}
        <Route path='*' component = {NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};
