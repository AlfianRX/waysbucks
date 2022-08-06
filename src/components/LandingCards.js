import {Card, Container, Row, Col} from 'react-bootstrap'
import '../styles/LandingPage.css';
import { DummyProduct } from '../dummyData/FakeDataProduct';
import { Link } from 'react-router-dom';


function Cards(){
    return(
        <div className="container" style={{marginTop:15}}>
            <Container>
            <h2 className="text-red">Let's Order</h2>
                <Row>
                    {/* list-product */}
                    {DummyProduct.map((product,index) => {
                        return(
                            
                            <Col xs={6} md={3}>
                                
                                <Link to={`/product/${index}`} style={{ textDecoration:'none'}}>
                                <Card style={{ width: '15rem', textDecoration:'none' }}>
                                    <Card.Img variant="top" src={product.pic} />
                                    <Card.Body className='text-red bg-pink'>
                                        <Card.Title style={{ fontWeight:'bold'}}>{product.name}</Card.Title>
                                        <Card.Text>
                                        Rp. {product.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Link>
                            </Col>
                           
                        )
                    })
                    }

                    
                </Row>
            </Container>
        </div>
        
    );
}

export default Cards;