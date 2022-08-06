import React, { useState } from 'react';

import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import Booba from '../assets/latte.jpg'
import Potrait from '../assets/user_photo.png'
import PurchasedCard from '../components/PurchasedCard';
import '../styles/Profile.css'

function Profile(){
    return(
        <div className='container' style={{marginTop: 100}}>
            <Container>
                <Row>
                    <Col md={6}>
                    <h2 className="text-red bold-red">My Profile</h2>
                        <Row style={{marginTop: 20}}>
                            <Col md={'auto'}>
                                <div style={{height:'18rem'}}>
                                <img className='pp' src={Potrait} alt='pp'/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p className='profile-text'>Full Name
                                <br/>Egi Ganteng</p>
                                
                                <p className='profile-text'>Email
                                <br/>egigans@mail.com</p>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                    <h2 className="text-red bold-red"
                    style={{marginBottom:20}}
                    >My Transaction</h2>
                        <PurchasedCard/>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Profile;