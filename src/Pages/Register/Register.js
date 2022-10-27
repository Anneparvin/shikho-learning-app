import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

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
          We'll never share your email with anyone else.
        </Form.Text>
      <Button variant="primary" type="submit">
    Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;