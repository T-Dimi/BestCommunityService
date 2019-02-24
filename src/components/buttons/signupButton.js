import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SignupButton extends Component {
    render() {
        return (
            <div className="btn">
            <Link to='/Volunteer'><button className="">Sign up</button></Link>
            </div>
        );
    }
}

export default SignupButton;