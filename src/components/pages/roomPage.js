import React, { Component } from 'react';
import Card from '../card';
import { Container, Row, Col } from 'reactstrap';
import Hall from '../../Assets/images/hall.png';
import Community_Hall from '../../Assets/images/communityHall.png';

class RoomPage extends Component {
    render() {
        return (
            <div className="page">
                <h1>
                    Room Page Content
                </h1>
                <Container className="contained">
                    <Row>
                    <Col xs="6"><Card pic={Hall} name='Banquet Hall'/></Col>
                    <Col xs="6"><Card pic={Community_Hall} name='Community Hall'/></Col>
                    <Col xs="6"><Card pic={Community_Hall} name='Community Hall'/></Col>
                    <Col xs="6"><Card pic={Community_Hall} name='Community Hall'/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RoomPage;