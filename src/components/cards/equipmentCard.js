import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const NewCard = (props) => {
  return (
    <CardDeck className="equip-Card">
      <Card>
        <CardImg top width="100%" src={props.pic}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title}</CardTitle>
          <CardText className="equip-text">{props.text}</CardText>
          <Button color="info">Rent</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={props.pic_2}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title_2}</CardTitle>
          <CardText className="equip-text">{props.text_2}</CardText>
          <Button color="info">Rent</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={props.pic_3}/>
        <CardBody>
          <CardTitle className="classTitle">{props.title_3}</CardTitle>
          <CardText className="equip-text">{props.text_3}</CardText>
          <Button color="info">Rent</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default NewCard;