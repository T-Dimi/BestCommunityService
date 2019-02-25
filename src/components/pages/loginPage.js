import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'


class LoginPage extends Component {
    render() {
        return (

            <div className="page-login">
            <Container>
            <Col>
            <Row>
            <Form className="login-form" action="" method="">
                <h1 className="login-title">Sign in</h1>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="FirstName">User Name</Label>
                        <Input type="text" name="fName" required/>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="password">Passsword</Label>
                        <Input type="password" name="password" required/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />Remember me
                        </Label>
                    </FormGroup>
                    </Col>
                </Row>
                <Button className="login-btn">Sign in</Button>
                <div className='signup-login'>
                    Don't have an account?<br></br>
                    <Link to='/Signup'>Sign Up</Link>
                </div>
            </Form>

            </Row>
            </Col>
            </Container>
            

            </div>

        );
    }
}

export default LoginPage;