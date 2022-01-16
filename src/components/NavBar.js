import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Button
} from 'reactstrap';
import { Button } from '@material-ui/core';
import { signInUser, signOutUser } from '../helpers/auth';
import Contact from './Contact';

const NavBar = ({ admin, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticatedLinks = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/project-add">Add-Portolio</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/tech-add">Add-Tech</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar id='nav-bar' color="light" light expand="md">
        <NavbarBrand>Matthew G. Gonzales</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {
                (admin || user)
                  ? <Button size="medium" variant="outlined" color='primary' onClick={signOutUser}>Thank you!</Button>
                  : <Button size="medium" variant="outlined" color='primary' onClick={signInUser}>Sign Google Guestbook</Button>
              }
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="about-me">About Me</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="portfolio">Portfolio</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="technology">Technology</ScrollLink>
            </NavItem>
              { admin && authenticatedLinks()}
          </Nav>
          <Contact></Contact>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any
};

export default NavBar;
