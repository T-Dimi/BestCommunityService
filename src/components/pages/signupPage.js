import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


class SignupPage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Register
                </h1>
                <Container>
                    <Row>
                    <Col>
                        <Form className="volunteer-form" action="" method="">
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="FirstName">First Name</Label>
                                    <Input type="text" name="fName" required/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="LastName">Last Name</Label>
                                    <Input type="text" name="lName" required/>
                                    </FormGroup>
                                </Col>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="UserName">Username</Label>
                                <Input type="text" name="username" id="" required/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="PhoneNumber">Password</Label>
                                <Input type="password" name="password" id="" required/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" required/>
                                </FormGroup>
                            </Col>
                            </Row>

                            <Button className="vol-btn">Register</Button>
                        </Form>
                    </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default SignupPage;