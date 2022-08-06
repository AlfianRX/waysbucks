import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

import CheckTopping from '../assets/icons/check-icon.png'
import { DummyTopping } from '../dummyData/FakeDataProduct';

import "../styles/DetailProduct.css"

function Detailproduct(props){
    let { id } = useParams();

    return(
        <div className='container' style={{marginTop: 60, marginBottom: 50}}>
            <div className='row w-100' style={{marginTop: 30}}>
                <div className='col'>
                    <img className='image-fluid' style={{width:'90%'}} src={props.data[id].pic} alt="drink-pic"/>
                </div>
                <div className='col text-red'>
                   <h2 className='product-name bold-red'>{props.data[id].name}</h2>
                   <h4>Rp. {props.data[id].price}</h4>

                   {/* topping */}
                   <div style={{marginTop:75}}>
                    
                    <Container>
                    <h5 style={{fontWeight:'bold', marginBottom:22}}>Topping</h5>
                        <Row>
                            
                            {DummyTopping.map((topping, index) =>{
                               
                               return(
                                    <Col xs={6} md={3}>
                                        <div className='position-relative'>
                                        <img src={topping.pic} alt="toppings" style={{width:'70px'}}/>
                                        <img src={CheckTopping} alt="toppings" 
                                        className='position-absolute top-0 start-50 translate-middle-x'/>
                                        </div>
                                        <p className='topping-name text-red'
                                        style={{fontSize:13}}
                                        >{topping.name}</p>
                                    </Col>    

                                )}
                            
                            )}                            
                                                    
                        </Row>
                    </Container>

                    <Container style={{marginTop:35}}>
                        <Row>
                            <Col xs={12} md={6} className="footer-left text-red">
                            Total
                            </Col>
                            <Col xs={12} md={6} className="footer-right text-red">
                            Rp. {props.data[id].price}
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