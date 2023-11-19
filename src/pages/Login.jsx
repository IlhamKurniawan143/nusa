import { Form } from "react-bootstrap";

import React from 'react'

const Login = () => {
  return (
        <Form>
        <h1 className='mb-4' >NusaTech</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>

  )
}

export default Login