import React from 'react';
import { Button,Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/Group 33141.png'

const Header = () => {
    return (
        <div className="container">
        <Navbar style={{marginBottom:"140px",paddingTop:"40px"}} className="justify-content-between"  >
        {/* bg="dark" variant="dark" */}
          
      <Navbar.Brand  href="#home"  >
        <img src={logo} 
         width="60"
         height="60"
         className="d-inline-block align-top"
        alt="" />
        </Navbar.Brand>
      <Nav  className="justify-content-end" >
      <Link style={{margin:"auto",marginRight:"30px"}}to="/home">Home</Link>
      <Link style={{margin:"auto",marginRight:"30px"}} to="/features">Features</Link>
      <Form inline>
      
      <Button as={Link} to="/login"variant="outline-info">Log in</Button>
    </Form>
      
    </Nav>

    

    
  </Navbar>

     </div>
    );
};

export default Header;