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
      <div>
        <Navbar className="header" light expand="md">
                <NavbarBrand href="/"><span className="header-text">Best Community Service</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                        <NavLink href="/"><span className="header-text">Home</span></NavLink>
                </NavItem>
                <NavItem>
                        <NavLink href="/rooms"><span className="header-text">Reserve Room</span></NavLink>
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
                        Catering
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Equipment Rental
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Shuttle
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Home Care
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
