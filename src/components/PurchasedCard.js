import React, { useState } from 'react';

import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import Booba from '../assets/latte.jpg'
import Logo from '../assets/waysbuck_logo.png';
import Qrdummy from '../assets/qr_dummy.png';

function PurchasedCard(){
    return(
        <Container className='card-container position-relative'>
                <Row>
                    <Col>
                    {/* item */}
                        <Row style={{marginBottom:'1rem'}}> 
                                <Col md={'auto'}>
                                    <div style={{height:'6rem'}}>
                                    <img className="drink" src={Booba} alt="purchased"/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <p className='text-red'
                                    style={{fontSize:'13px', textAlign:'left'}}
                                    ><strong style={{fontSize:'20px'}}>
                                    Ice Coffe Palm Sugar</strong>
                                    <br/><strong>Monday</strong>, 8 August 2022
                                    <br/><br/>Topping : Manggo Slice
                                    <br/>Rp. 33.000</p>
                                </Col>
                        </Row>
                        <Row style={{marginBottom:'1rem'}}> 
                                <Col md={'auto'}>
                                    <div style={{height:'6rem'}}>
                                    <img className="drink" src={Booba} alt="purchased"/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <p className='text-red'
                                    style={{fontSize:'13px', textAlign:'left'}}
                                    ><strong style={{fontSize:'20px'}}>
                                    Ice Coffe Palm Sugar</strong>
                                    <br/><strong>Monday</strong>, 8 August 2022
                                    <br/><br/>Topping : Manggo Slice, Manggo
                                    <br/>Rp. 36.000</p>
                                </Col>
                        </Row>
                    </Col>
                </Row>
                
                <div className='position-absolute top-0 end-0'
                style={{marginRight:15, marginTop:15}}>
                    <div>
                        <img style={{marginBottom:15}} src={Logo} alt="dumdum"/>
                    </div>
                    <div>
                        <img style={{marginBottom:15}} src={Qrdummy} alt="qr"/>
                    </div>
                    <div>
                        <p className='status'>On The Wait</p>
                    </div>
                </div>
                <div className='position-absolute bottom-0 end-0'>
                    <p className='text-red bold-red' style={{margin:15}}>Subtotal : Rp. 69.000</p>
                </div>
                
        </Container>
    );
}

export default PurchasedCard;