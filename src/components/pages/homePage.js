import React, { Component } from 'react';
import DonateButton from '../buttons/donateButton';
import SignupButton from '../buttons/signupButton';

class HomePage extends Component {
    render() {
        return (

            <div className="page">
                <h1>
                    GIVE VOLUNTEER SERVICE WHERE YOU LIVE TODAY!
                </h1>
                <div class="grid">
                    <div class="item">
                        <h3>Volunteer now!</h3>
                        <p className="boxes">Sign up today to start making a difference in the community. 
                            You’ll get email notifications when new projects are posted in your area.</p>
                        <SignupButton />
                    </div>
                    <div class="item">
                        <h3>Help save lives!</h3>
                        <p className="boxes">Donate today to start making a difference in your community. 
                            Your donation is greatly appreciated and is 100% tax-deductible.</p>
                        <DonateButton />
                    </div>
                </div>
                <p>
                    At Best Community Service, we believe that nothing should get in the way of organizations and volunteers 
                    coming together to do good things for the community, so we help make this happen for free.
                </p>
            </div>
        );
    }
}

export default HomePage;
