import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Modal from '../modal';

const NewCard = (props) => {
  return (
    <div>
      <Card className="edit-card">
        <CardBody>
          <CardTitle className="cardTitle">{props.name}</CardTitle>
          <CardSubtitle>{props.price}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.pic} alt="Card image cap" />
        <CardBody>
          <CardText>{props.text}</CardText>
          <Modal {...props}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewCard;