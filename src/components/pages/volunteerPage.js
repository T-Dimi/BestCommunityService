import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


class VolunteerPage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Volunteer Registration
                </h1>
                <p className="intro">
                    Sign up to start volunteering in your area and making a difference to
                    those in need. 
                </p>
                <Container>
                    <Row>
                    <Col>
                        <Form className="volunteer-form" action="" method="">
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="FirstName">First Name</Label>
                                    <Input type="text" name="fName"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="LastName">Last Name</Label>
                                    <Input type="text" name="lName"/>
                                    </FormGroup>
                                </Col>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id=""/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="PhoneNumber">Phone Number</Label>
                                <Input type="tel" name="password" id="" />
                                </FormGroup>
                            </Col>
                            </Row>

                            <Button className="vol-btn">Sign in</Button>
                        </Form>
                    </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default VolunteerPage;