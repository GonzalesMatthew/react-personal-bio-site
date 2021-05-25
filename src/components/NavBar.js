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

  const authenticatedLinks = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/techn-edit">Edit-Tech</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/projects-edit">Edit-Portolio</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Matthew G. Gonzales</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {
                admin
                  ? <Button color='info' onClick={signOutUser}>Thank you!</Button>
                  : <Button color='info' onClick={signInUser}>Share Google Info</Button>
              }
            </NavItem>
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
              { admin && authenticatedLinks()}
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
