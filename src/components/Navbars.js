import React, { useState, Component, useEffect } from 'react';

import {Container, Nav, Navbar, NavDropdown, Button, Form, Modal} from 'react-bootstrap'
import Logo from '../assets/waysbuck_logo.png'
import Login from './Login';
import Register from './Register';


function Navi() {
  //btn Login
  const [showLogin, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //btn Register
  const [showRegister, setShowRegis] = useState(false);
  const handleCloseRegis = () => setShowRegis(false);
  const handleShowRegis = () => setShowRegis(true);


  return (
     <Navbar bg="light" expand="lg" fixed="top">
       <Container>
         <Navbar.Brand href="#home">
           <img src={Logo} style={{height:55}} alt='logo'/>
         </Navbar.Brand>
         <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" />
         <Navbar.Collapse className="justify-content-end">
           <Nav>
            
             <Button className='btn-reverse-red' variant='reverse'
             onClick={handleShow}
             >Login</Button>

             <Button className='btn-red' style={{marginLeft:15}}
             onClick={handleShowRegis}
             >Register</Button>
           </Nav>
         </Navbar.Collapse>
       </Container>
       <Login showLogin={showLogin} handleClose={handleClose}/>
       <Register showRegister={showRegister} handleCloseRegis={handleCloseRegis}/>
     </Navbar>

  );
}

export default Navi;