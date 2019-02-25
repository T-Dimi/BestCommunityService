import React, { Component } from 'react';

class HomeCarePage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Home Care Page Content
                </h1>
                <p className="intro">
                  The Home Care page will have a card layout with different menu options. Each of 
                  these cards will show the different types of home care that is available. The cards
                  will also show pictures of the rooms that are available to reside in for the home card.
                  It will let the user choose which type of home care they would like to sign up for with a button
                  to confirm their choices. 
                  </p>
            </div>
        );
    }
}

export default HomeCarePage;