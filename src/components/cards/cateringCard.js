import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText, CardSubtitle } from 'reactstrap';
import Modal from '../modal';



const CateringCard = (props) => {
  return (
    <div>
      <Card className="edit-card">
      <CardHeader className='catering-header'>{props.title}</CardHeader>
        <CardBody>
        <img width="100%" src={props.pic} alt="Card image cap" />
        </CardBody>
        <CardTitle className="cardTitle">{props.name}</CardTitle>
          <CardSubtitle className="catering-price">{props.price}</CardSubtitle>
        <CardBody>
          <CardText>{props.text}</CardText>
          <Modal {...props}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default CateringCard;