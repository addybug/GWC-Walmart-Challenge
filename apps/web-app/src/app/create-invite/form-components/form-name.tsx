import {Form} from "react-bootstrap";
import React, {Dispatch, SetStateAction} from "react";
import {InviteDetails} from "./invite-details";

interface FormDetails {
  setForm: Dispatch<SetStateAction<any>>;
  form: InviteDetails;
  errors: InviteDetails;
}

interface NameDetails extends FormDetails {
  type: string
}

function FormName({setForm, form, errors, type}: NameDetails) {

  const setField = (field, value) => {
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
        onChange={ e => setField('name', e.target.value)}
        placeholder={localStorage.name + "'s " + type}
        isInvalid={ !!errors.name }
      />
      <Form.Text>
        Enter the name of your event.
      </Form.Text>
      <Form.Control.Feedback type='invalid'>
        { errors.name }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormName;
