import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

function LoginModal() {
  const [show, setShow] = useState(true);
  const [ form, setForm ] = useState({name:'', email:''});
  const [ errors, setErrors ] = useState({name:'', email:''});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const findFormErrors = () => {
    const { name, email } = form
    const newErrors = {name:'', email:''}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'Name required.'
    if ( !email || email === '' ) newErrors.email = 'Email required.'

    return newErrors
  }

  const handleClose = () => {
    window.location.reload();
  };

  const handleLogin = () => {
    const newErrors = findFormErrors()
    if ( newErrors.name.length > 0 || newErrors.email.length > 0 ) {
      setErrors(newErrors)
    } else {
      localStorage.setItem("name", form.name);
      localStorage.setItem("email", form.email);
      setShow(false);
      window.location.reload();
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create an Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={ e => setField('name', e.target.value)}
              placeholder="Enter name"
              isInvalid={ !!errors.name }
            />
            <Form.Control.Feedback type='invalid'>
              { errors.name }
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={ e => setField('email', e.target.value)}
              placeholder="Enter email"
              isInvalid={ !!errors.email }
            />
            <Form.Control.Feedback type='invalid'>
              { errors.email }
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{backgroundColor: "#2a9d8f"}} type="submit" onClick={handleLogin}>
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal;
