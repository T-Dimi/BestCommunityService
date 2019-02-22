import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Link className="links" to="/">About BCS |</Link> <Link className="links" to="/">Contact Us | </Link> 
                <Link className="links" to="/">Privacy Policy | </Link> <Link className="links" to="/">Site Map</Link> 
            </footer>
        );
    }
}

export default Footer;
