import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, InputGroup,
InputGroupAddon, Input, Button } from 'reactstrap';
import homecare from '../../Assets/images/Homecare.png';

const Example = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={homecare}/>
        <CardImgOverlay >
        <div className="homecare-overlay">
          <CardTitle className="homecare-title">Helping Seniors Live Well at Home</CardTitle>
          <CardText className="homecare-text">The only home care solution offering a balanced approach 
          to longevity, emphasizing health, engagement, and purpose in our clients.</CardText>
          <CardText>
          <p className="homecare-location">Find a Location Near You</p>
                <InputGroup>
                    <Input className="homecare-input" placeholder="Enter a Zip Code" />
                    <InputGroupAddon addonType="append">
                    <button className="homecare-btn">Go!</button>
                    </InputGroupAddon>
                </InputGroup>
            
          </CardText>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Example;