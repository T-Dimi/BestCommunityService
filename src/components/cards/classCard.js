import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const NewCard = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={props.pic}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <Button color="info">Sign Up</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={props.pic_2}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title_2}</CardTitle>
          <CardText>{props.text_2}</CardText>
          <Button color="info">Sign Up</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={props.pic_3}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title_3}</CardTitle>
          <CardText>{props.text_3}</CardText>
          <Button color="info">Sign Up</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default NewCard;