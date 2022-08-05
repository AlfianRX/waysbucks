import React, { useState } from 'react';

// Bootstrap
import { Form, Button, Modal } from "react-bootstrap";
import '../styles/Auth-modal.css'

function Register({showRegister,handleCloseRegis}) {
     
    return (
      <>
        <Modal className='info-modal'
        show={showRegister} onHide={handleCloseRegis}
        centered>
            <Modal.Body>
                <Modal.Title className='modal-title mb-3'
                >Register</Modal.Title>
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
                <Form.Group className='mb-3'>
                    <Form.Control
                        className="input-red"
                        // onChange={handleOnChange}
                        // value={state.email}
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        autoComplete="false"
                        required
                    />
                </Form.Group>
                <Button className="form-auth-button" type="submit">
                    Register
                </Button>
            </Form>
                Already have an account ? Klik Here
            </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default Register;