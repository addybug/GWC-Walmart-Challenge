import {Form} from "react-bootstrap";
import React from "react";
import {FormDetails} from "./form-details";

function FormDescription({setForm, form, errors}: FormDetails) {

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return(
    <Form.Group className="mb-3">
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        as="textarea"
        rows={3}
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('description', event.target.value)}
        isInvalid={ !!errors.description }
      />
      <Form.Control.Feedback type='invalid'>
        { errors.description }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormDescription;
