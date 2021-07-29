import React from 'react'
import Form from 'react-bootstrap/Form'


const Login = () => {

  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password confirmation</Form.Label>
        <Form.Control type="passwordConfirmation" placeholder="Password confirmation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
  )
}

export default Login