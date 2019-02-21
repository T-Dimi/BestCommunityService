import React, { Component } from 'react';
import DonateButton from '../buttons/donateButton';

class HomePage extends Component {
    render() {
        return (

            <div className="page">
                <h1>
                    GIVE VOLUNTEER SERVICE WHERE YOU LIVE TODAY!
                </h1>
                <DonateButton />
                <p>
                    At Best Community Service, we believe that nothing should get in the way of organizations and volunteers 
                    coming together to do good things for the community, so we help make this happen for free.
                </p>
            </div>
        );
    }
}

export default HomePage;
