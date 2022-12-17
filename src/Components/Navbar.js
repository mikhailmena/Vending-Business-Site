import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



const NavBar = () => {
 

  

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
         
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/Transition_Website"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
                           
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/Contact"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/About"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                 
               
               
            </Nav>
            
              
                

              
            
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
