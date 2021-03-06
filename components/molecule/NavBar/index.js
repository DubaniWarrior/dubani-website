import React , { useState }from 'react';
import { Navbar,Form, Nav, NavItem, NavLink } from 'react-bootstrap';
import NavbarStc from './NavBar.stc';

import {Container} from "react-bootstrap";
import Overlay from '../Overlay';
const NavBar = (props) => {

  const openNav=()=>{
      document.getElementById("myNav").style.height = "100vh";
  }
  const closeNav=()=>{
      document.getElementById("myNav").style.height = "0%";
  }

  return (
   
        <NavbarStc variant="dark" fixed="top" collapseOnSelect expand="lg">
           <Container>
              <Navbar.Brand href="/" >DUBANI</Navbar.Brand>
              <Nav className="ml-auto menu_hamburger">
                  <Overlay openNav={openNav} closeNav={closeNav} />
              </Nav>
            </Container>
            
        </NavbarStc>
    
  );
}

export default NavBar;