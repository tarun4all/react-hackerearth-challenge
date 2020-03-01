import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Navbar, FormControl, Form, Nav, Badge } from 'react-bootstrap';
import '../App.css';


function NavbarComponent() {
  return (
      <>
        <Navbar bg="dark" variant="dark">
            🧐
            <Badge variant="secondary">Gugu Food Blog</Badge>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </Navbar>
    </>
    // <nav>
    //   <h3>Logo</h3>
    //   <ul className="nav-links">
    //       <Link to="/">
    //         <li>Home</li>
    //       </Link>
    //       <Link to="/about">
    //         <li>About</li>
    //       </Link>
    //       <Link to="/shop">
    //         <li>Shop</li>
    //       </Link>
    //   </ul>
    // </nav>
  );
}

export default NavbarComponent;