import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [passwordError, setPasswordError] = useState('')
    const {createUser} = useContext(AuthContext)
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
        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(e=> console.error(e));
    }
    return (
        <div>
          <h1>Please Register</h1>
              <Form onSubmit ={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Text className="text-danger">
          {passwordError}
        </Form.Text>
        <div className='d-grid gap-2'>
      <Button variant="primary" type="submit">
    Register
      </Button>
      </div>
    </Form>
        </div>
    );
};

export default Register;