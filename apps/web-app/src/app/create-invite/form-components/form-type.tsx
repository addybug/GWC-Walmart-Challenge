import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {FormDetails} from "./form-details";

function FormType({setForm, form, errors}: FormDetails) {

  const [type, setType] = useState('');

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })
    if(field === "type"){setType(value)}
  }

  return(
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Is your Event Remote or In Person? </Form.Label>
        <Form.Check
          type="radio"
          id="Remote"
          value="Remote"
          label="Remote"
          name="type-group"
          onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('type', event.target.value)}
          isInvalid={ !!errors.type }
        />
        <Form.Check
          type="radio"
          id="In Person"
          value="In Person"
          label="In Person"
          name="type-group"
          onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('type', event.target.value)}
          isInvalid={ !!errors.type }
        />
        <Form.Text>
          Before hosting an in person event, please check your state's <a href={"https://www.aarp.org/politics-society/government-elections/info-2020/coronavirus-state-restrictions.html"}>Coronavirus-related restrictions</a>.
        </Form.Text>
        <Form.Control.Feedback type='invalid'>
          { errors.type }
        </Form.Control.Feedback>
      </Form.Group>
      {type === "Remote" ?
        <Form.Group className="mb-3" controlId="formBasicLink">
          <Form.Label>Link to Event Video Call</Form.Label>
          <Form.Control
            type="text"
            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('link', event.target.value)}
          />
        </Form.Group>
        : ''}
      {type === "In Person" ?
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Are Masks Required? </Form.Label>
          <Form.Check
            type="radio"
            id="Yes"
            value="Yes"
            label="Yes"
            name="mask-group"
            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('mask', event.target.value)}
          />
          <Form.Check
            type="radio"
            id="No"
            value="No"
            label="No"
            name="mask-group"
            onChange={ (event: React.ChangeEvent<HTMLInputElement>) => setField('mask', event.target.value)}
          />
          <Form.Text>
            Please check your state's <a href={"https://www.aarp.org/health/healthy-living/info-2020/states-mask-mandates-coronavirus.html"}>Mask Mandate</a>.
          </Form.Text>
        </Form.Group>
        : ''}
    </div>
  )
}

export default FormType;
