import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import Drinks from '../assets/palm.jpg'
import '../styles/LandingPage.css';


function Cards(){
    return(
        <div className="container" style={{marginTop:15}}>
            <Container>
            <h2 className="text-red">Let's Order</h2>
                <Row>
                    <Col xs={6} md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={Drinks} />
                            <Card.Body className='text-red bg-pink'>
                                <Card.Title style={{ fontWeight:'bold'}}>Ice Coffee Palm Sugar</Card.Title>
                                <Card.Text>
                                Rp. 27.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Cards;