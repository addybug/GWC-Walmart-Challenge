import React, {useState} from "react";
import "./create-invite.css";
import { Form } from "react-bootstrap"
import FormBookClub from "./form-events/form-book-club";

function CreateInvite() {
  const [afterChange, setDisable] = useState(false);
  const [event, setEvent] = useState('')

  const handleChange = (e) => {
    setDisable(true);
    setEvent(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="outerContainer">
      <div className="createContainer">
        <h1 className="createHeader">Create an Invite</h1>
        <Form>
          <Form.Group className="mb-3" onChange={handleChange} controlId="formBasicName">
            <Form.Label>What Are You Planning?</Form.Label>
            <Form.Select aria-label="What Are You Planning?">
              {afterChange ? <option disabled>Choose One</option> : <option>Choose One</option>}
              <option value="bookclub">Book Club</option>
              <option value="skitrip">Ski Trip</option>
            </Form.Select>
          </Form.Group>
          {event === 'bookclub' ? <FormBookClub /> : ''}
        </Form>
      </div>
    </div>

  )
}

export default CreateInvite;
