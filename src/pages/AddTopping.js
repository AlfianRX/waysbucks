import React, { useState } from 'react';

import {Card, Form, Button, Container, Row, Col, FormLabel} from 'react-bootstrap'
import '../styles/AddTopping.css'

import Pict from './../assets/topping-large.png'
import Icons from './../assets/icons/upload.png'
function AddTopping(){
    return(
        <div className='container' style={{marginTop: 150, marginBottom: 50}}>
            
            <Container >
                <Row >
                    <Col md={6}>
                        <Form>
                            <FormLabel style={{marginBottom: 50}}>
                            <h1 className='bold-red text-red'>Topping</h1>
                            </FormLabel>
                            <Form.Group className="mb-3 input-red">
                                <Form.Control type="text" 
                                placeholder="Name Topping" />
                            </Form.Group>
                            <Form.Group className="mb-3 input-red">
                                <Form.Control type="text" 
                                placeholder="Price" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="file" 
                                hidden
                                id="addImage"
                                />
                            </Form.Group>
                            <FormLabel
                                 htmlFor="addImage"
                                 className='addImages cursor-pointer'>
                                <img src={Icons} className='upload' alt='icon'/>
                            </FormLabel>
                            <Button className='btn-add btn-red'>Add Topping</Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <img className='imgPreview' src={Pict} alt='preview'/>
                    </Col>
                </Row>
            </Container>          
        </div>

    );
}

export default AddTopping;