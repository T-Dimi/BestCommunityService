import React, { Component } from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import Card from '../cards/shuttleCard';
import shuttle from '../../Assets/images/shuttle.png';

class ShuttlePage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Shuttle Service
                </h1>
                <Container className="shuttle-contained">
                    <Row>
                        <Col xs="6">
                        <CardImg width="100%" src={shuttle}/>
                        </Col>
                        <Col xs="6">
                        <Card />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ShuttlePage;