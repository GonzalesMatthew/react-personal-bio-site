import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/technology-edit">About Me Edit</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/projects-edit">Portfolio Edit</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/technology-edit">Technology Edit</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/technology-edit">Contact Edit</Link>
      </NavItem>
      <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Matthew G. Gonzales</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { admin && authenticated()}
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                }
              </NavItem>
            }
            <NavItem>
              <Link className="nav-link" to="/">About Me</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/technology">Technology</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
