import React, {useState} from "react";
import "./create-invite.css";
import { Form } from "react-bootstrap";
import FormEvent from "./form-events/form-event";
import {useHistory} from "react-router-dom";

function CreateInvite() {
  const [afterChange, setDisable] = useState(false);
  const [event, setEvent] = useState('');
  const history = useHistory();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDisable(true);
    setEvent((e.target as HTMLTextAreaElement).value);
    console.log((e.target as HTMLTextAreaElement).value);
  }

  if(localStorage.name){
    return (
      <div className="outerContainer">
        <div className="createContainer">
          <h1 className="createHeader">Create an Invite</h1>
          <Form>
            <Form.Group className="mb-3" onChange={handleChange} controlId="formBasicName">
              <Form.Label>What Are You Planning?</Form.Label>
              <Form.Select aria-label="What Are You Planning?">
                {afterChange ? <option disabled>Choose One</option> : <option>Choose One</option>}
                <option value="Book Club">Book Club</option>
              </Form.Select>
            </Form.Group>
            {event === '' ? '' : <FormEvent eventName={event} />}
          </Form>
        </div>
      </div>
    )
  }
  else {
    history.push("/");
    window.location.reload();
  }

}

export default CreateInvite;
