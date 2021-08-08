import {Form} from "react-bootstrap";
import React from "react";
import {FormDetails} from "./form-details";

function FormGuests({setForm, form, errors}: FormDetails) {

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return(
    <Form.Group className="mb-3" controlId="formBasicDescription">
      <Form.Label>Invitees</Form.Label>
      <Form.Control
        type="text"
        as="textarea"
        rows={3}
        onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('guests', event.target.value)}
        isInvalid={ !!errors.guests }
      />
      <Form.Text>
        Please type the emails of your guests in a comma-seperated list above.
      </Form.Text>
      <Form.Control.Feedback type='invalid'>
        { errors.guests }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormGuests;
