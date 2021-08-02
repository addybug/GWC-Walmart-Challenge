import FormName from "../form-components/form-name";
import {useState} from "react";
import React from 'react';

function FormBookClub() {
  const [ form, setForm ] = useState({name:''});
  const [ errors, setErrors ] = useState({name:''});

  const findFormErrors = () => {
    const { name } = form
    const newErrors = {name:''}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'Name required.'
    return newErrors
  }

  return (
    <FormName setForm={setForm} form={form} errors={errors} type={"Book Club"} />
  )
}

export default FormBookClub;
