import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Card from '../cards/classCard';
import Spanish from '../../Assets/images/spanish.png';
import Arts_Crafts from '../../Assets/images/arts_crafts.png';
import Painting from '../../Assets/images/painting.png';

class ClassesPage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Classes
                </h1>
                <Container className="contained">
                    <Row>
                    <Col xs="12">
                        <Card 
                            pic={Spanish}
                            pic_2={Arts_Crafts}
                            pic_3={Painting}
                            title='Spanish' 
                            title_2='Arts & Crafts' 
                            title_3='Painting'
                            text='This is not your typical Spanish class. 
                            Students practice speaking and conversing about real 
                            life. Mini lessons on grammar, reading, pronunciation, 
                            and writing create a skill set to support conversation.'
                            text_2='Arts and Crafts classes are a fun way to promote 
                            creativity in. Through using your hands to form objects, 
                            this type of instruction allows you to bring their thoughts 
                            deas into reality.'
                            text_3='This painting class will introduce you to classical and contemporary 
                            painting, techniques and concepts, with emphasis on the understanding 
                            of its formal language and the fundamentals of artistic expression.'
                        />
                    </Col>


                    </Row>
                </Container>
            </div>
        );
    }
}

export default ClassesPage;