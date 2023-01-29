import React from 'react'
import styled from 'styled-components'

import InputLabel from './input-label'
import FormFieldError from './form-field-error'

const StyledTextField = styled.div`
  width: 100%;

  input {
    width: 100%;
  }
`

const TextField = ({ id, label, value, required = true, onChange, error }) => (
  <StyledTextField>
    <InputLabel label={label} required={required} />
    <input type='text' id={id} value={value} onChange={onChange} />
    <FormFieldError error={error} />
  </StyledTextField>
)

export default TextField
