import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Signup = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Primary</Button>
            </Form>
        </div>
    );
}

export default Signup;
