import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import TextArea from './text-area'
import TextField from './text-field'

import form_validation from '../utils/form_validation'

const REQUIRED_FIELDS = ['name', 'email', 'message']

const MAX_LENGTH_FIELDS = [
  { name: 50 },
  { email: 254 },
  { phoneNumber: 20 },
  { message: 5000 },
]

const EMAIL_FIELDS = ['email']

const INITIAL_STATE = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  min-width: 300px;
  margin-bottom: 10vh;
  filter: drop-shadow(0 0 1.5rem rgb(234, 233, 235));
`

const ContactForm = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [formErrors, setErrors] = useState({})

  const handleSetValue = (key, value) => {
    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = async () => {
    const n_formErrors = form_validation(
      values,
      REQUIRED_FIELDS,
      MAX_LENGTH_FIELDS,
      EMAIL_FIELDS
    )
    setErrors(n_formErrors)

    if (Object.keys(n_formErrors).length === 0) {
      const data = new FormData()

      Object.keys(values).forEach((key) => data.append(key, values[key]))

      try {
        const response = await axios.post(
          process.env.REACT_APP_EMJINX_API_ENDPOINT,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'EMJINX-API-KEY': process.env.REACT_APP_EMJINX_API_KEY,
            },
          }
        )

        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <StyledContactForm>
      <h2>Contact Form</h2>
      <TextField
        id='name'
        label='Name'
        value={values.name}
        onChange={(e) => handleSetValue('name', e.target.value)}
        error={formErrors['name']}
      />
      <TextField
        id='email'
        label='Email'
        value={values.email}
        onChange={(e) => handleSetValue('email', e.target.value)}
        error={formErrors['email']}
      />
      <TextField
        id='phoneNumber'
        label='Phone'
        required={false}
        value={values.phoneNumber}
        onChange={(e) => handleSetValue('phoneNumber', e.target.value)}
        error={formErrors['phoneNumber']}
      />
      <TextArea
        id='message'
        label='Message'
        value={values.message}
        onChange={(e) => handleSetValue('message', e.target.value)}
        error={formErrors['message']}
      />

      <button onClick={handleSubmit}>Submit</button>
    </StyledContactForm>
  )
}

export default ContactForm
