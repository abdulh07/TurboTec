import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './Header.css'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleOpen = () => setIsClose(!isClose);
  return (
    <div>
      <Navbar color="light" light expand="lg">
        <div className="container-fluid">
          <div className='d-flex justify-content-between'>
            <h1 className='navbar-brand'>TechHub</h1>
            <NavbarToggler onClick={toggle} />
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <h1 className='navbar-brand-tech' href="#" active>TechHub</h1>
              </NavItem>

              <div className="d-flex">
                <i className="ri-menu-3-line ms-5" style={{ fontSize: '28px', }} onClick={toggleOpen}></i>

                {/* Other Icons */}
              </div>

            </Nav>

            <div className="d-flex">
              <i className="ri-heart-line" style={{ fontSize: '28px', }}></i>
              <i className="ri-shopping-bag-line ms-3 me-3" style={{ fontSize: '28px', }}></i>
              <i className="ri-user-line" style={{ fontSize: '28px' }}></i>
            </div>

          </Collapse>

        </div>

      </Navbar>
      {isClose && (
        <div className="menu-bar shadow-lg">
          <div className='menu-item'>
            <h5>Home</h5>
            <h5>Shop</h5>
            <h5>Product</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
