import React, { useState } from 'react';

import {Card, Button, Container, Row, Col} from 'react-bootstrap'

import Pict from './../assets/large_palm.jpg'
import Topping from '../assets/topping_1.png'
import CheckTopping from '../assets/icons/check-icon.png'

import "../styles/DetailProduct.css"

function Detailproduct(){
    return(
        <div className='container' style={{marginTop: 100, marginBottom: 50}}>
            <div className='row w-100' style={{marginTop: 30}}>
                <div className='col'>
                    <img className='w-90' src={Pict} alt="drink-pic"/>
                </div>
                <div className='col text-red'>
                   <h2 className='product-name bold-red'>Ice Coffee Palm Sugar</h2>
                   <h4>Rp.27.000</h4>

                   {/* topping */}
                   <div style={{marginTop:75}}>
                    
                    <Container>
                    <h5 style={{fontWeight:'bold', marginBottom:22}}>Topping</h5>
                        <Row>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className='position-relative'>
                                <img src={Topping} alt="toppings" style={{width:'75px'}}/>
                                <img src={CheckTopping} alt="toppings" 
                                className='position-absolute top-0 start-50 translate-middle-x'/>
                                </div>
                                <p className='topping-name text-red'>Manggo Slice</p>
                            </Col>
                            
                        </Row>
                    </Container>

                    <Container style={{marginTop:35}}>
                        <Row>
                            <Col xs={12} md={6} className="footer-left text-red">
                            Total
                            </Col>
                            <Col xs={12} md={6} className="footer-right text-red">
                            Rp. 33.0000
                            </Col>
                            <Button className='btn-cart btn-red'>Add Cart</Button>
                        </Row>

                    </Container>

                   </div>
                </div>
            </div>
        </div>


    );
}

export default Detailproduct;