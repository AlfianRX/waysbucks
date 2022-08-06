import React, { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Container, Nav, Navbar, NavDropdown, Button, Image, Form, Modal} from 'react-bootstrap'
import '../styles/Dropdown.css'
import Logo from '../assets/waysbuck_logo.png'
import Login from './Login';
import Register from './Register';
import CartIc from '../assets/icons/cart_icon.png'
import Potrait from '../assets/user_photo.png'


function Navi() {
// login
const [isOpenLogin, setOpenLogin] = useState(false);
const handleLogin = (content) => setOpenLogin(content);

// register
const [isOpenRegister, setOpenRegister] = useState(false);
const handleRegister = (content) => setOpenRegister(content);

const [isLogin, setisLogin] = useState(true);
console.log(isLogin)

if (isLogin){

  return (  
     <Navbar style={{backgroundColor:`#FFFBFB`
     }} expand="lg" sticky="top">
        {/* nav after log */}
       <Container>
         <Navbar.Brand>
          <Link to="/">
           <img src={Logo} style={{height:55}} alt='logo'/>
          </Link>
         </Navbar.Brand>
         <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" />
         <Navbar.Collapse className="justify-content-end">
           <Nav>
            <Navbar.Brand>
            <Link to="/cart">
              <img src={CartIc} style={{height:30}} alt='logo'/>
            </Link>
            </Navbar.Brand>
            <Navbar.Brand>
            <img src={Potrait} style={{height:40,width:40}} alt='logo' className='rounded-circle float-end'/>
            </Navbar.Brand>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    );
  }

  return (  
    <Navbar bg="light" expand="lg" sticky="top">
       {/* nav before log */}
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
           <img src={Logo} style={{height:55}} alt='logo'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button className='btn-reverse-red' variant='reverse'
            onClick={() => handleLogin(true)}
            >Login</Button>

            <Button className='btn-red' style={{marginLeft:15}}
            onClick={() => handleRegister(true)}
            >Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
       {isOpenLogin && (
             <Login
               isOpen={isOpenLogin}
               isClose={() => handleLogin(false)}
               isOpenRegister={() => handleRegister(true)}
             />
           )}
         {isOpenRegister && (
             <Register
               isOpen={isOpenRegister}
               isClose={() => handleRegister(false)}
               isOpenLogin={() => handleLogin(true)}
             />
           )}
    </Navbar>
   );

}

export default Navi;