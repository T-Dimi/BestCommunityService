import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Card from '../cards/equipmentCard';
import projector from '../../Assets/images/Projector.png';
import fogMachine from '../../Assets/images/fogMachine.png';
import tent from '../../Assets/images/Tent.png';
import cottonCandy from '../../Assets/images/cottonCandy.png';
import popcorn from '../../Assets/images/popcorn.png';
import snowcone from '../../Assets/images/snowcone.png';

class Equipment extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Rental Equipment
                </h1>
                <Container>
                    <Row>
                        <Col>
                            <Card 
                                pic={projector}
                                title='Project' 
                                text='$102 / day'
                                pic_2={fogMachine}
                                title_2='Fog Machine' 
                                text_2='$53 / day'
                                pic_3={tent}
                                title_3='Tent Wall - 20 White' 
                                text_3='$22 / day'
                            />
                            <Card 
                                pic={cottonCandy}
                                title='Cotton Candy Machine' 
                                text='$73 / day'
                                pic_2={popcorn}
                                title_2='Popcorn Machine' 
                                text_2='$73 / day'
                                pic_3={snowcone}
                                title_3='Snow Cone Machine' 
                                text_3='$73 / day'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Equipment;
