import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Card from '../cards/cateringCard';
import italian from '../../Assets/images/ItalianBuffet.png';
import seafood from '../../Assets/images/SeafoodBuffet.png';
import thai from '../../Assets/images/ThaiFood.png';
import mexican from '../../Assets/images/MexicanFood.png';

class CateringPage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Meal Catering
                </h1>
                <Container>
                    <Row>
                        <Col xs="6">
                            <Card 
                                title='Wedding Meal'
                                name='Italian Buffet' 
                                price='$29.99 / Person' 
                                pic={italian}
                                header='Amount of People'
                                buttonLabel='Reserve Meal'
                            />
                        </Col>
                        <Col xs="6">
                            <Card 
                                title='Wedding Meal'
                                name='Seafood Dinner' 
                                price='$39.99 / Person' 
                                pic={seafood}
                                header='Amount of People'
                                buttonLabel='Reserve Meal'
                            />
                        </Col>
                        <Col xs="6">
                            <Card 
                                title='Cuisine'
                                name='Thai' 
                                price='$24.99 / Person' 
                                pic={thai}
                                header='Amount of People'
                                buttonLabel='Reserve Meal'
                            />
                        </Col>
                        <Col xs="6">
                            <Card 
                                title='Cuisine'
                                name='Mexican' 
                                price='$24.99 / Person' 
                                pic={mexican}
                                header='Amount of People'
                                buttonLabel='Reserve Meal'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CateringPage;