import React, { PureComponent } from 'react'
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
    DropdownItem } from 'reactstrap'

class NavBar extends PureComponent {
    constructor (props) {
        super(props)
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

    getColors() {
        return ['primary', 'danger', 'warning', 'light']
    }


    render () {
        return ( <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">React Learning by Sab</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>                  
                </Nav>
              </Collapse>
            </Navbar>
          </div>)
    }
}

export default NavBar