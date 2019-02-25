import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from 'reactstrap';
import { RadioGroup, RadioButton} from 'react-radio-buttons';




class DonatePage extends Component {
    render() {
        return (
            <div className="page">
                <h1 className="page-title">
                    Best Community Donation
                </h1>
                <Container>
                    <Row>
                    <Col>
                    <p className="intro">
                    Your charitable donation will help fund all of our services that we offer here at Best Community
                    for the community. We appreciate any and all amounts that you are able to donate.
                    </p>
                    <Form className="volunteer-form" action="" method="">
                    <RadioGroup className='radioGroup' onChange={ this.onChange } vertical>
                    <RadioButton iconInnerSize={30} iconSize={40} pointColor='#112D32' value="orange">
                            $1 - Donation to Best Community Service
                        </RadioButton>
                        <RadioButton iconInnerSize={30} iconSize={40} pointColor='#112D32' value="orange">
                            $5 - Donation to Best Community Service
                        </RadioButton>
                        <RadioButton iconInnerSize={30} iconSize={40} pointColor='#112D32' value="orange">
                            $25 - Donation to Best Community Service
                        </RadioButton>
                    </RadioGroup>
                    <Button className="donate-btn">Contribute</Button>
                    </Form>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DonatePage;