import React, { Component } from 'react';
import Card from '../cards/homecareCard';

class HomeCarePage extends Component {
    render() {
        return (

            <div className="page">
                <h1 className="page-title">
                    Home Care
                </h1>
                <Card />
            </div>
        );
    }
}

export default HomeCarePage;