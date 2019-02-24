import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class DonateButton extends Component {
    render() {
        return (
            <div className="btn">
                <Link to='/Donate'><button className="">Donate Now</button></Link>
            </div>
        );
    }
}

export default DonateButton;