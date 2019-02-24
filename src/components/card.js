import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const NewCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="cardTitle">{props.name}</CardTitle>
        </CardBody>
        <img width="100%" src={props.pic} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Reserve Room</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewCard;