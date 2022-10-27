
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
 import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
const [passwordError, setPasswordError] = useState('')
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()

  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn =() =>{
    providerLogin(googleProvider)
    .then (result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if(password.length< 6){
      setPasswordError('please password should be at least 6 characters');
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setPasswordError('please provide at least two upper case letters');
      return;
    }
    setPasswordError('');
    signIn(email, password)
    .then(result=> {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/')
    })
    .catch(e=> console.error(e));
}
    
  return (
        <div>
          <h1>Please Login</h1>
            <Form onSubmit ={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Text className="text-danger">
          {passwordError}
        </Form.Text>
        <div className='d-grid gap-2'>
      <Button variant="primary" type="submit">
      Login with email
      </Button>
      <Button onClick={handleGoogleSignIn} variant="primary" type="button">
      Login with Google
      </Button>
      </div>
      
    </Form>
        </div>
    );
};

export default Login;