import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Form, Button, FormGroup, FormLabel, FormControl, Col, Container, Row } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    user: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [id]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toast.success('Registration successful!');
    setFormData({
      user: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                <FormGroup controlId="user">
                  <FormLabel>User ID</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter user"
                    required
                    value={formData.user}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <br></br>
                <FormGroup controlId="email">
                  <FormLabel>Email ID</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <br></br>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <div className="text-center mt-3">
                  <Button type="submit" variant="success">
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Register;
