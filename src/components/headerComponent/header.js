import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from './logo.png';



class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img className="header-img" src={logo} alt="Logo" /><span className="header-company">Best Community Service</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><span className="header-text">Home</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rooms"><span className="header-text">Reserve Hall</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/classes"><span className="header-text">Classes</span></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="header-text">Services</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/catering"><span className="dropdown-links">Catering</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/equipment"><span className="dropdown-links">Equipment Rental</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/shuttle"><span className="dropdown-links">Shuttle</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/homecare"><span className="dropdown-links">Home Care</span></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/login"><span className="header-login">Sign In</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </header>
    );
  }
}

export default Header;