import React, { Component } from 'react';
import logo from './logo.png';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={logo} alt="Logo" /> <span className='title'>Best Community Service</span>
                </header>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Equipment">Rent Equipment</Link>
                            </li>
                            <li>
                                <Link to="/Shuttle">Reserve Room</Link>
                            </li>
                            <li>
                                <Link to="/Catering">Catering Service</Link>
                            </li>
                            <li>
                                <Link to="/Classes">Classes</Link>
                            </li>
                            <li>
                                <Link to="/HomeCare">Home Care</Link>

                            </li>
                            <li>
                                <Link to="/Shuttle">Shuttle Service</Link>
                            </li>
                        </ul>
                    </nav>
                
            </div>

        );
    }
}

export default Header;
