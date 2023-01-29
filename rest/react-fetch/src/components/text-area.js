import React from 'react'
import styled from 'styled-components'

import InputLabel from './input-label'
import FormFieldError from './form-field-error'

const StyledTextArea = styled.div`
  width: 100%;

  textarea {
    width: 100%;
  }
`

const TextArea = ({ id, label, value, required = true, onChange, error }) => (
  <StyledTextArea>
    <InputLabel label={label} required={required} />
    <textarea id={id} rows={5} value={value} onChange={onChange}></textarea>
    <FormFieldError error={error} />
  </StyledTextArea>
)

export default TextArea
