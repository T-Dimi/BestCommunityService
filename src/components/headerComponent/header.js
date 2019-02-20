import React, { Component } from 'react';

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
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Rent Equipment</a>
                        </li>
                        <li>
                            <a href='#'>Reserve Room</a>
                        </li>
                        <li>
                            <a href='#'>Catering Service</a>
                        </li>
                        <li>
                            <a href='#'>Classes</a>
                        </li>
                        <li>
                            <a href='#'>Home Care</a>
                        </li>
                        <li>
                            <a href='#'>Shuttle Service</a>
                        </li>
                    </ul>
                </nav>


            </header>
        );
    }
}

export default Header;
