import React, { Component } from 'react';
import Card from '../cards/roomCard';
import { Container, Row, Col } from 'reactstrap';
import Hall from '../../Assets/images/hall.png';
import Hall_2 from '../../Assets/images/banquethall.png';
import Community_Hall from '../../Assets/images/communityHall.png';
import Funeral_1 from '../../Assets/images/funeral_1.png';

class RoomPage extends Component {
    render() {
        return (
            <div className="page">
                <h1 className="page-title">
                    Reserve a Hall
                </h1>
                <Container className="contained">
                    <Row>
                    <Col xs="6">
                        <Card 
                            pic={Hall} 
                            name='Sterling Venue' 
                            price='$400 / day'
                            text='The magic of ambient interiors of our Sterling Venue in which 
                            we organize wedding receptions and banquets for up to 50 Guests. Cream and 
                            gold walls, crystal chandeliers and subtle decorations reflect your dreams 
                            about an elegant wedding reception or a banquet in a real palatial setting.'
                            header='Day(s)'
                            buttonLabel='Reserve Room'
                        />
                    </Col>
                    <Col xs="6">
                        <Card 
                            pic={Hall_2} 
                            name='Towers Venue'
                            price='$500 / day'
                            text='Phenomenal architecture, stunning vaulted ceilings, walls 
                            decorated with Art Nouveau is just a spectacular beginning. 
                            Thanks to outstanding acoustics and modern sound system, the celebration 
                            will forever remain in the memory of the bride and groom and their Guests.'
                            header='Day(s)'
                            buttonLabel='Reserve Room'
                        />
                    </Col>
                    <Col xs="6">
                        <Card 
                            pic={Community_Hall} 
                            name='Community Hall' 
                            price='$250 / day'
                            text='With its simple elegant interior design, is perfect for wedding receptions, 
                            quinceañeras, anniversary parties, or company conferences. The newly remodeled 
                            banquet hall accommodates up to 300 people for banquet-style seating or 400 people 
                            for theater-style seating. It can also be divided into two smaller rooms for weekday rentals.'
                            header='Day(s)'
                            buttonLabel='Reserve Room'
                        />
                    </Col>
                    <Col xs="6">
                        <Card 
                            pic={Funeral_1} 
                            name='Funeral Hall'
                            price='$200 / day'
                            text='The funeral hall was purpose built and specifically designed to cater for large 
                            religious, non religious and civil funerals with a modern but comfortable feel. This funeral 
                            will hold 150 seated and 50 standing. There are large parking facilities with plenty of off and 
                            on street parking. The hall can be changed to cater for any size of funeral from small to very large.'
                            header='Day(s)'
                            buttonLabel='Reserve Room'
                        />
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RoomPage;