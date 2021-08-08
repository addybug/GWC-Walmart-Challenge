import React, {useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import {FormDetails} from "./form-details";
import {Form} from "react-bootstrap";
import "./form-components.css"

function FormStartTime({setForm, form, errors}: FormDetails) {

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
      <Form.Label>Start Time</Form.Label>
      <DateTimePicker
        value={dateTime}
        onChange={ (value) => setField('startTime', value)}
        isInvalid={ !!errors.startTime }
        id="time"
        disableClock={true}
        placeholder="Start Time"
      />
      <Form.Control.Feedback type='invalid'>
        { errors.startTime }
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormStartTime;
