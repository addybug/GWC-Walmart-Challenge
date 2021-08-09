import React, {useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import {FormDetails} from "./form-details";
import {Form} from "react-bootstrap";
import "./form-components.css"

function FormEndTime({setForm, form, errors}: FormDetails) {

  const [dateTime, setValue] = useState(new Date());

  const setField = (field: string, value: Date) => {
    setValue(value);
    setForm({
      ...form,
      [field]: value
    })
  }

  return(
    <Form.Group className="mb-3">
      <Form.Label>End Time</Form.Label>
      <DateTimePicker
        value={dateTime}
        onChange={ (value) => setField('endTime', value)}
        isInvalid={ !!errors.endTime }
        id="end-time"
        disableClock={true}
        placeholder="End Time"
      />
      <Form.Control.Feedback type='invalid'>
        { errors.endTime }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormEndTime;
