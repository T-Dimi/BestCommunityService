import React from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';


const NewCard = (props) => {
  return (
    <div>
      <Form className="shuttle-form">
        <FormGroup row>
          <Label for="" sm={2}>Pickup</Label>
          <Col sm={10}>
            <Input type="text" name="pickup" id="pickup" placeholder="Enter Pickup Address" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="" sm={2}>Dropoff</Label>
          <Col sm={10}>
            <Input type="text" name="pickup" id="pickup" placeholder="Enter Pickup Address" />
          </Col>
        </FormGroup>
        <FormGroup row id="shuttledropdown">
          <Label for="" sm={6}>Passengers</Label>
          <Col sm={6}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup id="shuttlecheckbox" check>
          <Label check>
            <Input type="checkbox" />{' '}
            Wheelchair Lift/Ramp Required to Board
          </Label>
        </FormGroup>
        <Button className="shuttlebtn" color="info">Book Ride</Button>
    
        
    </Form>
    </div>
  );
};

export default NewCard;