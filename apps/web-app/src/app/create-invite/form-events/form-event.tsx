import FormName from "../form-components/form-name";
import {useState} from "react";
import React from 'react';
import FormDescription from "../form-components/form-description";
import FormType from "../form-components/form-type";
import {formBasic} from "./basic-form";
import FormGuests from "../form-components/form-guests";
import FormColor from "../form-components/form-color";
import {Button} from "react-bootstrap";
import FormStartTime from "../form-components/form-start-time";
import FormEndTime from "../form-components/form-end-time";
import {useHistory} from "react-router-dom";

const isEmailsValid = (emailList) => {
  for(let i=0; i<emailList.length; i+=1){
    const regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!regEx.test(emailList[i].replaceAll(" ", ""))){
      return false;
    }
  }
  return true;
}

interface FormDetails {
  eventName: string
}

function FormEvent({eventName}: FormDetails) {
  const [ form, setForm ] = useState(formBasic);
  const [ errors, setErrors ] = useState({});
  const history = useHistory();

  const findFormErrors = () => {
    const { name, description, startTime, endTime, guests, type, color } = form
    const newErrors = {name:'', description:'', startTime:'', endTime:'', guests:'', type:'', color:'', errors:false}

    if ( !name || name === '' ) {newErrors.name = 'Name required.'; newErrors.errors = true}
    if ( !description || description === '' ) {newErrors.description = 'Description required.'; newErrors.errors = true}
    if ( !startTime || startTime === '' ) {newErrors.startTime = 'Start time required.'; newErrors.errors = true}
    if ( !endTime || endTime === '' ) {newErrors.endTime = 'End time required.'; newErrors.errors = true}
    if ( !type || type === '' ) {newErrors.type = 'Type of event required.'; newErrors.errors = true}
    if ( !color || color === '' ) {newErrors.color = 'Color required.'; newErrors.errors = true}
    if ( !guests || guests === '' ) {newErrors.guests = 'Guests required.'; newErrors.errors = true}

    const emailValidationResult = isEmailsValid(guests.split(","));
    if(!emailValidationResult) {
      newErrors.guests = 'Please check that the emails of your guests are comma seperated and that each email is valid.';
      newErrors.errors = true
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    const newErrors = findFormErrors()
    event.preventDefault();
    if (newErrors.errors) {
      setErrors(newErrors)
    } else {
      const newEvent = {
        id: '',
        invite: eventName,
        name: form.name,
        description: form.description,
        startTime: form.startTime,
        endTime: form.endTime,
        type: form.type,
        link: form.link,
        mask: form.mask,
        test: form.test,
        guests: form.guests,
        color: form.color
      };
      if(localStorage.events){
        newEvent.id = JSON.parse(localStorage.getItem("events")).length.toString();
        const added = JSON.parse(localStorage.getItem("events"));
        added.push(newEvent);
        localStorage.setItem("events", JSON.stringify(added));
      }
      else {
        newEvent.id = "0";
        localStorage.setItem('events', JSON.stringify([newEvent]));
      }
      history.push("/event/" + (JSON.parse(localStorage.getItem("events")).length-1).toString());
    }
  }

  return (
    <div>
      <FormName setForm={setForm} form={form} errors={errors} type={"Book Club"} />
      <FormStartTime setForm={setForm} form={form} errors={errors} />
      <FormEndTime setForm={setForm} form={form} errors={errors} />
      <FormDescription setForm={setForm} form={form} errors={errors} />
      <FormType setForm={setForm} form={form} errors={errors} />
      <FormGuests setForm={setForm} form={form} errors={errors} />
      <FormColor setForm={setForm} form={form} errors={errors} />
      <Button style={{backgroundColor: "#2a9d8f"}} type="submit" onClick={handleSubmit}>
        Create Event
      </Button>
    </div>
  )
}

export default FormEvent;
