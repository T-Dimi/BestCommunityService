import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>

                <div className='logo'>
                    LOGO

                </div>

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


            </header>
        );
    }
}

export default Header;
