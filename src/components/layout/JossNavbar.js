import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Form
} from 'reactstrap';

import Logo from 'components/layout/Logo';

class JossNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <Navbar color="dark" fixed={'top'} dark expand="md">
          <NavbarBrand href="/">
            <Logo />
          </NavbarBrand>
          <Form>
            <Input type="text" name="search" id="search" placeholder="Search" />
          </Form>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>ABOUT US</DropdownItem>
                  <DropdownItem>PRIVACY & TERMS</DropdownItem>
                  <DropdownItem>FAQ</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default JossNavbar;
