import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    return (
        <div>
         <Navbar className='mb-4' collapseOnSelect expand="lg" bg="success" variant="light">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://cdni0.trtworld.com/w960/h540/q75/111924_shikhologo_1628868479605.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">All Courses</Link> </Nav.Link>
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link href="/category">Category</Nav.Link>
            <Nav.Link href="/Courses">Courses</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link eventKey={2} href="register">
              Register
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
};

export default Header;