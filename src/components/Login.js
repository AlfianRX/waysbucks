import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
import '../styles/Auth-modal.css'

function  Login({showLogin,handleClose}) {
    // const [showLogin, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Login
        </Button> */}
  
        <Modal className='info-modal'
        show={showLogin} onHide={handleClose} centered>
            <Modal.Body>
                <Modal.Title className='modal-title mb-3'
                >Login</Modal.Title>
            <Form className='mb-3'>
                <Form.Group className='mb-3'>
                    <Form.Control
                        className="input-red"
                        // onChange={handleOnChange}
                        // value={state.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="false"
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control
                        className="input-red"
                        // onChange={handleOnChange}
                        // value={state.email}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="false"
                        required
                    />
                </Form.Group>
    
                <Button className="form-auth-button" type="submit">
                    Login
                </Button>
            </Form>
                Don't have an account ? Klik Here
            </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default Login;