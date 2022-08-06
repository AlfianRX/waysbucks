import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
import '../styles/Auth-modal.css'

function Login(props) {
    // Login
    const [show, setShow] = useState(props.isOpen);
    const handleLoginClose = () => {
        setShow(false);
        props.isClose();
    };

    // Register
    const handleModalRegister = () => {
        setShow(false);
        props.isClose();
        props.isOpenRegister();
    };    
  
    return (
      <>  
        <Modal className='info-modal'
        show={show} onHide={handleLoginClose} centered>
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
            <span
            onClick={handleModalRegister}
            style={{ textDecoration: "none" }}>
            <p className="form-auth-p">Don't have an account? Click Here</p>
          </span>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default Login;