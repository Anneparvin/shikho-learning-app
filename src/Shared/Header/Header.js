import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
  const {user, logOut} =useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

    return (
        <div>
         <Navbar className='mb-4 shadow-lg' collapseOnSelect expand="lg" bg="succes" variant="light" >
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://cdni0.trtworld.com/w960/h540/q75/111924_shikhologo_1628868479605.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="ShikhoApp"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">shikhoApp</Link> </Nav.Link>
            
            <Nav.Link href='#user'>
              {
                user?.uid?
                <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut}>Log out</button>
                </>
                :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              </Nav.Link>
            <Nav.Link href='#user'>{user?.photoUrl?
            <img 
            style={{height:'30px'}} roundedCircle 
            src={user?.photoURL} alt=''/>
            :<FaUser></FaUser>
            }</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link><Link to="/register">Register</Link></Nav.Link>
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