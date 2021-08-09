import {Form} from "react-bootstrap";
import React from "react";
import {FormDetails} from "./form-details";

function FormColor({setForm, form, errors}: FormDetails) {

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return(
    <Form.Group className="mb-3">
      <Form.Label htmlFor="colorInput">Choose a Color For Your Invite</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('color', event.target.value)}
        title="Choose your color"
        isInvalid={ !!errors.color }
      />
      <Form.Control.Feedback type='invalid'>
        { errors.color }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormColor;
