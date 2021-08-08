import {Form} from "react-bootstrap";
import React from "react";
import {FormDetails} from "./form-details";

interface NameDetails extends FormDetails {
  type: string
}

function FormName({setForm, form, errors, type}: NameDetails) {

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return(
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name of Event</Form.Label>
      <Form.Control
        type="text"
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('name', event.target.value)}
        placeholder={localStorage.name + "'s " + type}
        isInvalid={ !!errors.name }
      />
      <Form.Control.Feedback type='invalid'>
        { errors.name }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormName;
