import React, { useState } from 'react';

import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import PurchasedCard from '../components/PurchasedCard';
import '../styles/Cart.css'
import Booba from '../assets/latte.jpg'
import Del from '../assets/icons/bin-icon.png'

function Cart(){
    return(
        <div className='container' style={{marginTop: 100}}>
            <Container>
                <Row>
                        <h2 className='text-red'>My Cart</h2>
                        <p className='text-red' style={{marginTop:26}}>Review Your Order</p>
                    <Col md={8}>
                        <hr className='red-line'/>
                        
                        {/* list purchased */}

                        <Row style={{marginBottom:'1rem'}}> 
                            <Col md={'auto'}>
                                <div style={{width:'6rem', height:'6rem'}}>
                                <img className="purchased-drink" src={Booba} alt="purchased"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p className='text-red bold-red'
                                style={{fontSize:'20px', textAlign:'left'}}
                                >Ice Coffe Palm Sugar</p>
                                <p className='text-red'>Topping : Manggo Slice</p>
                            </Col>
                            <Col md={4} style={{textAlign:'right'}}>
                                <p className='text-red'>Rp. 33.000</p>
                                <img src={Del} alt='delete'/>
                            </Col>
                        </Row>
                        
                        <Row style={{marginBottom:'1rem'}}> 
                            <Col md={'auto'}>
                                <div style={{width:'6rem', height:'6rem'}}>
                                <img className="purchased-drink" src={Booba} alt="purchased"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p className='text-red bold-red'
                                style={{fontSize:'20px', textAlign:'left'}}
                                >Ice Coffe Palm Sugar</p>
                                <p className='text-red'>Topping : Manggo Slice</p>
                            </Col>
                            <Col md={4} style={{textAlign:'right'}}>
                                <p className='text-red'>Rp. 33.000</p>
                                <img src={Del} alt='delete'/>
                            </Col>
                        </Row>    

                        <hr className='red-line'/>
                    </Col>

                    <Col md={4}>
                        <hr className='red-line'/>
                        <Row>
                            <Col md={6}>
                                <p className='text-red'>Subtotal</p>
                                <p className='text-red'>Qty</p>
                            </Col>
                            <Col md={6} style={{textAlign:'right'}}>
                                <p className='text-red'>Rp. 69.000</p>
                                <p className='text-red'>2</p>
                            </Col>
                        </Row>
                        <hr className='red-line'/>
                        <Row>
                            <Col md={6}>
                                <p className='text-red bold-red'>Total</p>
                            </Col>
                            <Col md={6} style={{textAlign:'right'}}>
                                <p className='text-red bold-red'>Rp. 69.000</p>
                            </Col>
                        </Row>
                        <Button className='btn-cart btn-red w-100'>Pay</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Cart;