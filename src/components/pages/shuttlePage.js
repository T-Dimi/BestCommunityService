import React, { Component } from 'react';

class ShuttlePage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Shuttle Page Content
                </h1>
                <p className="intro">
                  The Shuttle page will have a card layout with different menu options. There will
                  be a total of the type of shuttles that will be available. There is also going to 
                  be a form that will let the user choose which time they need the shuttle.
                  There will also be another form showing the times that the shuttle runs as well as
                  where the shuttle will take the customer. Once the user choose the time and place they
                  would like the shuttle to take them, there will be a button to confirm their shuttle.
                </p>
            </div>
        );
    }
}

export default ShuttlePage;